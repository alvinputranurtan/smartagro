import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from './ClientLayout';

export const metadata: Metadata = {
  title: 'Smart Agro IoT',
  description: 'Pantauan dan kontrol perangkat pertanian cerdas',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
