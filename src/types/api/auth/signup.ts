export interface SignupRequest {
  username: string;
  email: string;
  password: string;
  nickname: string;
  bio: string | null;
}

export interface SignupResponse {
  message: string;
}
