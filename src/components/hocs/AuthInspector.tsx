import { FC, ReactNode, useContext, useLayoutEffect } from 'react';
import { StoreContext } from '@/context/StoreContext.tsx';
import { useNavigate } from 'react-router-dom';
import { MAIN } from '@/shared/constants/routes.ts';

type AuthInspectorProps = {
  children?: ReactNode;
  authIsRequired?: boolean;
};

/**
 * Компонент для редиректа со страниц, можно
 * редиректить при отсутствии авторизации, или
 * если она, наоборот, есть.
 * authIsRequired = true - редирект если нет авторизации;
 * authIsRequired = false - редирект если есть авторизация;
 */
export const AuthInspector: FC<AuthInspectorProps> = ({
  authIsRequired = true,
  children,
}) => {
  const navigate = useNavigate();
  const context = useContext(StoreContext);
  useLayoutEffect(() => {
    if (authIsRequired && context?.isInitialized && !context?.user)
      navigate(MAIN);
    else if (!authIsRequired && context?.isInitialized && context?.user)
      navigate(MAIN);
  }, [context?.isInitialized, context?.user]);
  return <>{children}</>;
};
