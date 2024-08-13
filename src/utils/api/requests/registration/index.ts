import { RegistrationRequest } from '@/shared/types/RegistrationRequest.ts';
import { api } from '@/utils/api/instance.ts';
import { SuccessResponse } from '@/shared/types/SuccessResponse.ts';
import axios, { AxiosResponse } from 'axios';
import { ValidationErrorResponse } from '@/shared/types/ValidationErrorResponse.ts';

export const postRegistration = async (
  data: RegistrationRequest,
): Promise<
  AxiosResponse<Partial<SuccessResponse & ValidationErrorResponse>> | undefined
> => {
  try {
    return await api.post<SuccessResponse>('/registration/', data);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response;
    }
  }
};
