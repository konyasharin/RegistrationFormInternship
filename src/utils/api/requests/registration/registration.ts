import { api } from '@/utils/api/instance.ts';
import { SuccessResponse } from '@/shared/types/SuccessResponse.ts';
import axios, { AxiosResponse } from 'axios';
import { ValidationErrorResponse } from '@/shared/types/ValidationErrorResponse.ts';
import { LoginRequest } from '@/utils/api/requests/auth/login.ts';

type RegistrationRequest = LoginRequest & {
  repeatPassword: string;
};

type RegistrationRequestDto = LoginRequest & {
  repeat_password: string;
};

const registrationRequestToDto = ({
  repeatPassword,
  ...fields
}: RegistrationRequest): RegistrationRequestDto => {
  return {
    repeat_password: repeatPassword,
    ...fields,
  };
};

export const registration = async (
  data: RegistrationRequest,
): Promise<
  AxiosResponse<Partial<SuccessResponse & ValidationErrorResponse>> | undefined
> => {
  try {
    return await api.post<SuccessResponse>(
      '/registration/',
      registrationRequestToDto(data),
    );
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response;
    }
  }
};
