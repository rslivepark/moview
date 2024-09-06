// import { useQuery } from '@tanstack/react-query';
// import api from '../utils/api';

// const fetchPopularMovie = () => {
//   return api.get(`/movie/popular?page=1`);
// };

// export const usePopularMovieQuery = () => {
//   return useQuery({
//     queryKey: ['popular-movie'],
//     queryFn: fetchPopularMovie,
//     select: (result) => result.data,
//   });
// };

import useFetchData from './useFetchData';

export const usePopularMovieQuery = () =>
  useFetchData('/movie/popular?page=1', 'popular-movie');
