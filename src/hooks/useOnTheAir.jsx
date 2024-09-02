import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchOnAir = () => {
  return api.get(`/tv/on_the_air`);
};

export const useOnAirQuery = () => {
  return useQuery({
    queryKey: ['TV-OnAir'],
    queryFn: fetchOnAir,
    select: (result) => result.data,
  });
};
