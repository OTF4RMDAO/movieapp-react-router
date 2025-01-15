import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star } from 'lucide-react';
import { movies } from '../data/movies';

export const MovieDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(m => m.id === Number(id));

  if (!movie) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-xl">Movie not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-indigo-600 mb-6 hover:text-indigo-800"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Movies
        </button>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src={movie.imageUrl} 
            alt={movie.title} 
            className="w-full h-64 object-cover"
          />
          
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold">{movie.title}</h1>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                <span className="text-lg">{movie.rating}</span>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6">{movie.description}</p>
            
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={movie.trailerUrl}
                title={`${movie.title} trailer`}
                className="w-full h-[400px] rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};