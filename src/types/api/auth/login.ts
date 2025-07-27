export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  username: string;
  email: string;
  nickname: string;
  userId: number;
  bio: string | null;
  displayName: string;
}
