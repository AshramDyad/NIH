import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center space-y-6 justify-center p-6 text-center">
      {/* Hero Text */}
      <h1 className="text-6xl md:text-8xl font-black text-secondary tracking-tight">
        404
      </h1>
      <h2 className="text-2xl md:text-4xl font-bold text-zinc-800">
        Oops! Page Not Found
      </h2>

      {/* Description */}
      <p className="text-zinc-600 max-w-lg text-lg leading-relaxed">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      {/* Action Button */}
      <Link
        href="/"
        className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-semibold text-lg lg:px-8 lg:py-4 px-6 py-3 rounded-full transition-all duration-300 shadow-lg"
      >
        Return to Home
      </Link>
    </div>
  );
}
