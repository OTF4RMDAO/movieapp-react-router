import React from 'react';
import { MovieCard } from '../components/MovieCard';
import { movies } from '../data/movies';
import { Film } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Film className="w-8 h-8 mr-2 text-indigo-600" />
          <h1 className="text-3xl font-bold text-gray-900">Movie Collection</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};