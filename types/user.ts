export type User = {
  id: string;
  name: string;
  email: string;
  password?: string;
  firstName: string;
  lastName: string;
  role?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type Token = {
  type: string;
  name: string;
  token: string;
  abilities: string[];
  lastUsedAt: string;
  expiresAt: string;
};
