// import { useQuery } from '@tanstack/react-query';
// import api from '../utils/api';

// const fetchTopRatedTV = () => {
//   return api.get(`/tv/top_rated`);
// };

// export const useTopRatedTVQuery = () => {
//   return useQuery({
//     queryKey: ['TV-top-rated'],
//     queryFn: fetchTopRatedTV,
//     select: (result) => result.data,
//   });
// };

import useFetchData from './useFetchData';

export const useTopRatedTVQuery = () =>
  useFetchData('/tv/top_rated', 'TV-top-rated');
