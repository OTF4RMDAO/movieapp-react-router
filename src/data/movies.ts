import { Movie } from '../types/movie';

export const movies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    imageUrl: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=1000",
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
    year: 2010,
    rating: 8.8
  },
  {
    id: 2,
    title: "The Dark Knight",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    imageUrl: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&q=80&w=1000",
    trailerUrl: "https://www.youtube.com/embed/EXeTwQWrcwY",
    year: 2008,
    rating: 9.0
  },
  {
    id: 3,
    title: "Interstellar",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    imageUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80&w=1000",
    trailerUrl: "https://www.youtube.com/embed/zSWdZVtXT7E",
    year: 2014,
    rating: 8.6
  }
];