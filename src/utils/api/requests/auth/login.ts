import axios, { AxiosResponse } from 'axios';
import { api } from '@/utils/api/instance.ts';
import { SuccessResponse } from '@/shared/types/SuccessResponse.ts';
import { Jwt } from '@/shared/types/Jwt.ts';

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  auth_token: string;
  refresh_token: string;
  continue_uri: string | null;
};

export const loginResponseFromDto = (response: LoginResponse): Jwt => {
  return {
    authToken: response.auth_token,
    refreshToken: response.refresh_token,
  };
};

export const login = async (
  data: LoginRequest,
): Promise<
  AxiosResponse<Partial<SuccessResponse & LoginResponse>> | undefined
> => {
  try {
    return await api.post<Partial<SuccessResponse & LoginResponse>>(
      '/auth/login/',
      data,
    );
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response;
    }
  }
};
