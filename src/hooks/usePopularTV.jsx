// import { useQuery } from '@tanstack/react-query';
// import api from '../utils/api';

// const fetchPopularTV = () => {
//   return api.get(`/tv/popular?page=1`);
// };

// export const usePopularTVQuery = () => {
//   return useQuery({
//     queryKey: ['tv-popular-series'],
//     queryFn: fetchPopularTV,
//     select: (result) => result.data,
//   });
// };

import useFetchData from './useFetchData';

export const usePopularTVQuery = () =>
  useFetchData('/tv/popular?page=1', 'tv-popular-series');
