-- Create achievements table
create table public.achievements (
    id uuid default gen_random_uuid() primary key,
    image_url text not null,
    title text,
    display_order integer default 0,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Set up Row Level Security (RLS)
alter table public.achievements enable row level security;

-- Create policies
create policy "Allow public read access to achievements"
    on public.achievements for select
    using (true);

-- Allow authenticated admins full access
-- Note: Replace with actual admin role check if you have customized roles, 
-- or rely on RLS being bypassed for service role/admin client queries
create policy "Allow authenticated admins full access to achievements"
    on public.achievements for all
    to authenticated
    using (true)
    with check (true);

-- Create updated_at trigger
create or replace function public.handle_updated_at()
returns trigger as $$
begin
    new.updated_at = now();
    return new;
end;
$$ language plpgsql;

create trigger handle_achievements_updated_at
    before update on public.achievements
    for each row
    execute procedure public.handle_updated_at();

-- Add missing storage policies for achievements if they don't automatically fall under gallery (Optional, depending on storage setup)
