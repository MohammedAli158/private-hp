// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed left-6 top-1/2 -translate-y-1/2 h-80 w-16 bg-black/90 border border-green-500 rounded-4xl shadow-[0_0_20px_#00ff88] z-50 flex flex-col items-center py-6 backdrop-blur-sm">
      <div className="mb-6">
        <div className="w-10 h-10 bg-green-600 rounded-full relative">
          <p className="absolute top-1/2 -translate-y-1/2 translate-x-1/2 text-black font-bold">HP</p>
        </div>
      </div>

      <div className="flex flex-col space-y-5">
        <Link href="/" className="p-2 text-green-300 hover:text-green-500 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>
        </Link>

        <Link href="/about" className="p-2 text-green-300 hover:text-green-500 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
          </svg>
        </Link>

        <Link href="/contact" className="p-2 text-green-300 hover:text-green-500 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M21 8a2 2 0 00-2-2h-3.28a2 2 0 01-1.9-1.316L12.72 2.684A2 2 0 0010.82 2H6a2 2 0 00-2 2v12a2 2 0 002 2h3l2.1 3.15a1 1 0 001.8-.3L15 18h4a2 2 0 002-2V8z"/>
          </svg>
        </Link>
      </div>
    </nav>
  );
}
