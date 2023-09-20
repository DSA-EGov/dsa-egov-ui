// TODO: modify to match api user

export interface User {
  _id: string;
  username: string;
  email: string;
  googleId?: string;
  avatarUrl?: string;
}

export interface CreateUser {
  googleId?: string;
  username: string;
  email: string;
  password: string;
}

export interface ExistingUser {
  username: string;
  googleId?: string;
  password?: string;
}
