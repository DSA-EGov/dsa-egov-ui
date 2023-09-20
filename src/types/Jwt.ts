import type { User } from '@/types/User';

export interface Jwt {
  accessToken: string;
}

export interface JwtPayload {
  user: User;
  iat: number;
  exp: number;
}
