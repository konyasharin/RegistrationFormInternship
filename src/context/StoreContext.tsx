import { createContext, Dispatch, FC, ReactNode, SetStateAction, useState } from "react";
import { Jwt } from '@/shared/types/Jwt.ts';
import { useLocalStorage } from '@mantine/hooks';
import { User } from '@/shared/types/User.ts';

type StoreContextData = {
  jwt: Partial<Jwt>;
  setJwt: (
    val: Partial<Jwt> | ((prevState: Partial<Jwt>) => Partial<Jwt>),
  ) => void;
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
} | null;

export const StoreContext = createContext<StoreContextData>(null);

export const StoreProvider: FC<{ children: ReactNode }> = props => {
  const [jwt, setJwt] = useLocalStorage<Partial<Jwt>>({
    key: 'jwt',
    defaultValue: {},
  });
  const [user, setUser] = useState<User | null>(null);
  return (
    <StoreContext.Provider
      value={{
        jwt,
        setJwt,
        user,
        setUser,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};
