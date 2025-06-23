
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MovieGrid from '@/components/MovieGrid';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <Hero />
      <MovieGrid />
      <Footer />
    </div>
  );
};

export default Index;
