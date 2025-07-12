'use client';

import Link from 'next/link';

export default function DashboardSection() {
  return (
    <section className="text-center">
      <h2 className="text-2xl font-bold mb-2">Dashboard IoT</h2>
      <p className="mb-6">Pantau dan kontrol perangkatmu secara real-time</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-6">
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold text-lg">Kelembaban Tanah</h3>
          <p className="text-2xl text-blue-600 mt-2">42%</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold text-lg">Suhu Ruangan</h3>
          <p className="text-2xl text-red-500 mt-2">28°C</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold text-lg">Status Pompa</h3>
          <p className="text-2xl text-green-600 mt-2">Aktif</p>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <Link href="/kontrol">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Pergi ke Kontrol
          </button>
        </Link>

        <Link href="/grafik">
          <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Lihat Grafik
          </button>
        </Link>
      </div>
    </section>
  );
}
