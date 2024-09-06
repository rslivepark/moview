import React from 'react';
import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

export default function useFetchData(endpoint, queryKey) {
  const fetchData = () => {
    return api.get(endpoint);
  };
  return useQuery({
    queryKey: [queryKey],
    queryFn: fetchData,
    select: (result) => result.data,
  });
}
