'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `block px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition ${
      pathname === path ? 'bg-blue-600 text-white' : ''
    }`;

  return (
    <>
      {/* Tombol buka sidebar (tampil hanya saat sidebar tertutup) */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Buka sidebar"
          title="Buka sidebar"
          className="fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded shadow"
        >
          <Menu size={20} />
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-white shadow z-40 transition-all duration-300 ${
          isOpen ? 'w-64 p-4' : 'w-0 overflow-hidden p-0'
        }`}
      >
        {isOpen && (
          <>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Smart Agro</h2>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Tutup sidebar"
                title="Tutup sidebar"
                className="p-1 rounded hover:bg-gray-200"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="space-y-2">
              <Link href="/" className={linkClass('/')}>
                Dashboard
              </Link>
              <Link href="/kontrol" className={linkClass('/kontrol')}>
                Kontrol
              </Link>
              <Link href="/grafik" className={linkClass('/grafik')}>
                Grafik
              </Link>
            </nav>
          </>
        )}
      </aside>
    </>
  );
}
