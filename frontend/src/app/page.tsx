import Header from '@/components/Header';
// import Footer from '@/components/Footer';
import DashboardSection from '@/components/DashboardSection';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-gray-100 text-gray-900">
      <Header />
      <DashboardSection />
      {/* <Footer /> */}
    </main>
  );
}
