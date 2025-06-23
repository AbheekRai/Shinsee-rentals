
import { Star, Play, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface MovieCardProps {
  title: string;
  image: string;
  rating: number;
  year: number;
  genre: string;
  duration: string;
  price: string;
  isNew?: boolean;
}

const MovieCard = ({ title, image, rating, year, genre, duration, price, isNew }: MovieCardProps) => {
  return (
    <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover-lift cursor-pointer">
      {/* Movie Poster */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <Button 
              size="sm" 
              className="w-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30"
            >
              <Play className="mr-2 h-4 w-4" />
              Watch Trailer
            </Button>
          </div>
        </div>
        
        {/* New Badge */}
        {isNew && (
          <Badge className="absolute top-3 left-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            New
          </Badge>
        )}
        
        {/* Rating */}
        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
          <Star className="h-3 w-3 text-yellow-400 fill-current" />
          <span className="text-white text-xs font-medium">{rating}</span>
        </div>
      </div>
      
      {/* Movie Info */}
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-purple-600 transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
          <span>{year}</span>
          <span className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {duration}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="text-xs">
            {genre}
          </Badge>
          <span className="font-bold text-lg text-purple-600">{price}</span>
        </div>
        
        <Button 
          className="w-full mt-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          size="sm"
        >
          Rent Now
        </Button>
      </div>
    </div>
  );
};

export default MovieCard;
