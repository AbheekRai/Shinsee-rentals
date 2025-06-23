
import MovieCard from './MovieCard';

const MovieGrid = () => {
  const featuredMovies = [
    {
      title: "Inception",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400&h=600&auto=format&fit=crop",
      rating: 8.8,
      year: 2010,
      genre: "Sci-Fi",
      duration: "2h 28m",
      price: "$4.99",
      isNew: false
    },
    {
      title: "The Matrix",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=400&h=600&auto=format&fit=crop",
      rating: 8.7,
      year: 1999,
      genre: "Action",
      duration: "2h 16m",
      price: "$3.99",
      isNew: false
    },
    {
      title: "Interstellar",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&h=600&auto=format&fit=crop",
      rating: 8.6,
      year: 2014,
      genre: "Drama",
      duration: "2h 49m",
      price: "$4.99",
      isNew: true
    },
    {
      title: "Blade Runner 2049",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400&h=600&auto=format&fit=crop",
      rating: 8.0,
      year: 2017,
      genre: "Sci-Fi",
      duration: "2h 44m",
      price: "$5.99",
      isNew: true
    },
    {
      title: "Dune",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=400&h=600&auto=format&fit=crop",
      rating: 8.1,
      year: 2021,
      genre: "Adventure",
      duration: "2h 35m",
      price: "$6.99",
      isNew: true
    },
    {
      title: "The Dark Knight",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&h=600&auto=format&fit=crop",
      rating: 9.0,
      year: 2008,
      genre: "Action",
      duration: "2h 32m",
      price: "$3.99",
      isNew: false
    }
  ];

  const newReleases = featuredMovies.filter(movie => movie.isNew);
  const trending = featuredMovies.filter(movie => movie.rating >= 8.5);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Trending Section */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Trending Now</h2>
          <button className="text-purple-600 hover:text-purple-700 font-medium">
            View All
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {trending.map((movie, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <MovieCard {...movie} />
            </div>
          ))}
        </div>
      </section>

      {/* New Releases Section */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">New Releases</h2>
          <button className="text-purple-600 hover:text-purple-700 font-medium">
            View All
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {newReleases.map((movie, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <MovieCard {...movie} />
            </div>
          ))}
        </div>
      </section>

      {/* All Movies Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Popular Movies</h2>
          <button className="text-purple-600 hover:text-purple-700 font-medium">
            View All
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredMovies.map((movie, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <MovieCard {...movie} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MovieGrid;
