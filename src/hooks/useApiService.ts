import { useMemo } from 'react';

import { ApiService } from '@services/ApiService';

export const useApiService = (token: string) => {
  return useMemo(() => new ApiService(token), [token]);
};
