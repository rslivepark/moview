import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchPopularMovie = () => {
  return api.get(`/movie/popular?page=1`);
};

export const usePopularMovieQuery = () => {
  return useQuery({
    queryKey: ['popular-movie'],
    queryFn: fetchPopularMovie,
    select: (result) => result.data,
  });
};
