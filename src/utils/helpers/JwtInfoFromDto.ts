import { User } from '@/shared/types/User.ts';

type JwtInfoDto = {
  user_info: {
    user_id: string;
    email: string;
  };
};

export const JwtInfoFromDto = (dto: JwtInfoDto): User => {
  return {
    id: dto.user_info.user_id,
    email: dto.user_info.email,
  };
};
