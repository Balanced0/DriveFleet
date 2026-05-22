import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: "#1D232A" }}
    >
      <div className="text-center max-w-lg">
        <div className="mb-6 select-none">
          <h1 className="text-[10rem] font-extrabold leading-none text-orange-500 tracking-tighter">
            404
          </h1>
        </div>

        <h2 className="text-3xl font-bold text-white mb-3">Page Not Found</h2>
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          Looks like this road leads nowhere. The page you're looking for
          doesn't exist or may have been moved.
        </p>

        <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto mb-8" />

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-3 rounded-xl transition-colors duration-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
