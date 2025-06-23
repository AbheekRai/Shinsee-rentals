
import { Play, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=5760&auto=format&fit=crop')`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Experience
            <span className="block gradient-text">Cinema</span>
            Like Never Before
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in leading-relaxed">
            Discover thousands of movies and TV shows. Rent, stream, and enjoy premium content 
            from the comfort of your home.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg hover-lift"
            >
              <Play className="mr-2 h-5 w-5" />
              Start Watching
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg hover-lift"
            >
              <Info className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>
          
          <div className="mt-12 flex items-center space-x-8 text-gray-300 animate-fade-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10K+</div>
              <div className="text-sm">Movies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">5K+</div>
              <div className="text-sm">TV Shows</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">1M+</div>
              <div className="text-sm">Happy Users</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
