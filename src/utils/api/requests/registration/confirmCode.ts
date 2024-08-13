import { api } from '@/utils/api/instance.ts';
import axios, { AxiosResponse } from 'axios';
import { SuccessResponse } from '@/shared/types/SuccessResponse.ts';
import { ValidationErrorResponse } from '@/shared/types/ValidationErrorResponse.ts';

export const confirmCode = async (
  confirmationCode: string,
): Promise<
  AxiosResponse<Partial<SuccessResponse & ValidationErrorResponse>> | undefined
> => {
  try {
    return await api.patch(`/registration/${confirmationCode}`);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response;
    }
  }
};
