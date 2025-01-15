import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Movie } from '../types/movie';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/movie/${movie.id}`)}
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
    >
      <img 
        src={movie.imageUrl} 
        alt={movie.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">{movie.year}</span>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span>{movie.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};