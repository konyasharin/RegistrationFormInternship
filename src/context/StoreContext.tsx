import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';
import { Jwt } from '@/shared/types/Jwt.ts';
import { useLocalStorage } from '@mantine/hooks';
import { User } from '@/shared/types/User.ts';

type AlertPopup = {
  isActive: boolean;
  title: string;
  text: string;
};

type StoreContextData = {
  jwt: Partial<Jwt>;
  setJwt: (
    val: Partial<Jwt> | ((prevState: Partial<Jwt>) => Partial<Jwt>),
  ) => void;
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  isInitialized: boolean;
  setIsInitialized: Dispatch<SetStateAction<boolean>>;
  alertPopup: AlertPopup;
  setAlertPopup: Dispatch<SetStateAction<AlertPopup>>;
} | null;

export const StoreContext = createContext<StoreContextData>(null);

export const StoreProvider: FC<{ children: ReactNode }> = props => {
  const [jwt, setJwt] = useLocalStorage<Partial<Jwt>>({
    key: 'jwt',
    defaultValue: {},
    getInitialValueInEffect: false,
  });
  const [user, setUser] = useState<User | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [alertPopup, setAlertPopup] = useState<AlertPopup>({
    isActive: false,
    text: '',
    title: '',
  });

  return (
    <StoreContext.Provider
      value={{
        jwt,
        setJwt,
        user,
        setUser,
        isInitialized,
        setIsInitialized,
        alertPopup,
        setAlertPopup,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};
