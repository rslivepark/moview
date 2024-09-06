// import { useQuery } from '@tanstack/react-query';
// import api from '../utils/api';

// const fetchTopRatedMovie = () => {
//   return api.get(`/movie/top_rated`);
// };

// export const useTopRatedMovieQuery = () => {
//   return useQuery({
//     queryKey: ['top_rated'],
//     queryFn: fetchTopRatedMovie,
//     select: (result) => result.data,
//   });
// };

import useFetchData from './useFetchData';

export const useTopRatedMovieQuery = () =>
  useFetchData('/movie/top_rated', 'top_rated');
