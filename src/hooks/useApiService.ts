import { useMemo } from 'react';

import { ApiService } from '@services/ApiService';

export const useApiService = () => useMemo(() => new ApiService(), []);
