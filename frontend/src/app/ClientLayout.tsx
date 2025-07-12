'use client';

import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-screen">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main
        className={`transition-all duration-300 ${
          isOpen ? 'ml-64' : 'ml-0'
        } p-4 bg-[url('/images/background.webp')] bg-cover bg-center`}
      >
        {children}
      </main>
    </div>
  );
}