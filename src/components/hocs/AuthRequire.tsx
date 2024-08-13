import { FC, ReactNode, useContext, useLayoutEffect } from 'react';
import { StoreContext } from '@/context/StoreContext.tsx';
import { useNavigate } from 'react-router-dom';
import { MAIN } from '@/shared/constants/routes.ts';

type AuthRequireProps = {
  children?: ReactNode;
};

export const AuthRequire: FC<AuthRequireProps> = props => {
  const navigate = useNavigate();
  const context = useContext(StoreContext);
  useLayoutEffect(() => {
    if (context?.isInitialized && !context?.user) navigate(MAIN);
  }, [context?.isInitialized, context?.user]);
  return <>{props.children}</>;
};
