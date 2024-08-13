import { AuthRequest } from '@/shared/types/AuthRequest.ts';

export type RegistrationRequest = AuthRequest & {
  repeat_password: string;
};
