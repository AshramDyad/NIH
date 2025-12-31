"use client";

export default function AboutNIH() {
    return (
        <section className="relative sm:py-16 py-12 bg-zinc-50 overflow-hidden">

            {/* Parallax Floating Text */}
            {/* <div
                style={{ y: y1 }}
                className="absolute top-20 -right-20 text-[20rem] font-black text-secondary/5 select-none pointer-events-none whitespace-nowrap hidden lg:block"
            >
                300 YEARS
            </div>
            <div
                style={{ y: y2 }}
                className="absolute bottom-40 -left-20 text-[15rem] font-black text-primary/5 select-none pointer-events-none whitespace-nowrap hidden lg:block uppercase"
            >
                Holistic
            </div> */}

            <div className="container mx-auto px-4 relative z-10">
                <div className="container mx-auto">

                    {/* Header Section */}
                    <div className="space-y-4 mb-6 text-center lg:text-left">
                        <div
                            className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full text-secondary font-bold text-sm uppercase tracking-widest border border-secondary/20"
                        >
                            <span>The NIH Philosophy</span>
                        </div>

                        <h2
                            className="text-3xl md:text-5xl font-black text-zinc-900"
                        >
                            National Institute of <span className="text-secondary italic">Holistic Health </span>(NIH)
                        </h2>
                    </div>

                    {/* Main Content Grid */}
                    <div className="flex flex-col lg:flex-row lg:gap-12 gap-8 items-start">

                        {/* Primary Narrative */}
                        <div
                            className="lg:col-span-7 space-y-6"
                        >
                            <p className="text-lg text-zinc-600 leading-relaxed">
                                Health is the biggest necessity in today&apos;s life. We have to correct our diet, our thoughts and our behavior to keep our health constant,
                                <span className="text-zinc-900"> only then we can remain physically, mentally and spiritually healthy and this is also the right definition of health.</span>
                            </p>

                            <p className="text-lg text-zinc-600 leading-relaxed">
                                The National Institute of Holistic Health (NIH) has been working continuously for the last 4 years to make the common people aware of health globally, in which many programs for health awareness, health education, health awareness camps, seminars, conferences etc are being run and these works will be useful in making the whole world healthy.
                            </p>
                        </div>

                        {/* Premium Glass Card Quote */}
                        <div
                            className="lg:col-span-5"
                        >
                            <div className="relative group">
                                <div className="relative bg-white/70 backdrop-blur-xl border border-white sm:p-6 p-4 rounded-2xl shadow-sm overflow-hidden">

                                    <div className="relative z-10 space-y-6">
                                        <p className="text-lg sm:text-xl font-serif italic text-zinc-800 leading-snug">
                                            According to mythological beliefs, man&apos;s age was considered to be around 300 years. But in today&apos;s environment, we can keep our body perfectly healthy for 100 years and for this, we have to keep our diet, behavior and thoughts completely sattvic.
                                        </p>

                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-px bg-primary" />
                                            <span className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400">Holistic Truth</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Statement */}
                    <div
                        className="mt-6 pt-4 border-t border-zinc-200"
                    >
                        <h3 className="text-2xl font-black text-zinc-900 italic">
                            Come, <span className="text-primary">let us all</span> make the world healthy.
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
}
