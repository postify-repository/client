import { authApi } from "@/api/auth";
import { useAuthStore } from "@/stores/authStore";
import { useModalStore } from "@/stores/modalStore";
import axios from "axios";

// 토큰 관련 함수들을 store에서 가져오기
const getToken = () => useAuthStore.getState().getToken();
const removeToken = () => useAuthStore.getState().removeToken();
const refreshToken = () => authApi.refreshToken();

// 기본 axios 인스턴스 (토큰 없이)
const publicApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// 인증이 필요한 요청용 axios 인스턴스
const privateApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

privateApi.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

privateApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // 401 에러이고 재시도하지 않은 요청인 경우
    if (
      error.response?.status === axios.HttpStatusCode.Unauthorized &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const currentToken = getToken();
        if (!currentToken) {
          // 토큰이 없으면 갱신 시도
          const newAccessToken = await refreshToken();

          if (newAccessToken) {
            // 원래 요청에 새 토큰으로 재시도
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            return privateApi(originalRequest);
          }
        }

        // 갱신 실패시 로그아웃 처리
        removeToken();

        // 로그인 모달 열기
        if (typeof window !== "undefined") {
          useModalStore.getState().openAuthModal("login");
        }
      } catch (refreshError) {
        // 리프레시 실패시 로그아웃 처리
        console.error("Token refresh error:", refreshError);
        removeToken();
        if (typeof window !== "undefined") {
          useModalStore.getState().openAuthModal("login");
        }
      }
    }

    return Promise.reject(error);
  },
);

export { privateApi, publicApi };
