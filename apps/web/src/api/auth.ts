import { useQuery } from "@tanstack/react-query";
import { api, setAccessToken } from "./api";
import { User } from "@/types/user";




export const login = async (data: { email: string; password: string }) => {
  const response = await api.post("/auth/login", data);
  return response.data;
};

export const logout = async () => {
  const response = await api.post("/auth/logout");
  return response.data;
};

export const refresh = async () => {
  const response = await api.post("/auth/refresh")
  return response.data;
}

export const getMe = async (): Promise<User> => {
  const response = await api.get("/auth/me");
  return response.data;
};
