import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchUpcomingMovie = () => {
  return api.get(`/movie/upcoming`);
};

export const useUpcomingMovieQuery = () => {
  return useQuery({
    queryKey: ['upcoming'],
    queryFn: fetchUpcomingMovie,
    select: (result) => result.data,
  });
};
