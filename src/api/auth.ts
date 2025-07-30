import { privateApi, publicApi } from "@/lib/api";
import {
  LoginRequest,
  LoginResponse,
  SignupRequest,
  SignupResponse,
} from "@/types/api/auth";

export const authApi = {
  refreshToken: async (): Promise<string> => {
    const response = await publicApi.post(`/auth/refresh-token`);
    return response.data.accessToken;
  },
  checkEmail: async (email: string) => {
    const response = await publicApi.post(`/auth/email-check`, { email });
    return response.data;
  },
  signup: async (data: SignupRequest): Promise<SignupResponse> => {
    const response = await publicApi.post(`/auth/signup`, data);
    return response.data;
  },
  login: async (data: LoginRequest): Promise<LoginResponse> => {
    const response = await publicApi.post(`/auth/login`, data);
    return response.data;
  },
  logout: async (): Promise<void> => {
    const response = await privateApi.post(`/auth/logout`);
    return response.data;
  },
};
