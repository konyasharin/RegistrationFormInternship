import { Button, Flex } from '@mantine/core';
import { Link } from 'react-router-dom';
import { LOGIN, PROFILE, REGISTRATION } from '@/shared/constants/routes.ts';
import { useContext } from 'react';
import { StoreContext } from '@/context/StoreContext.tsx';

export const MainPage = () => {
  const context = useContext(StoreContext);
  return (
    <Flex gap={30} direction="column">
      {context?.user ? (
        <Button
          variant={'filled'}
          fullWidth
          component={Link}
          size={'xl'}
          to={PROFILE}
        >
          Профиль
        </Button>
      ) : (
        <>
          <Button
            variant={'filled'}
            fullWidth
            component={Link}
            size={'xl'}
            to={REGISTRATION}
          >
            Регистрация
          </Button>
          <Button
            variant={'filled'}
            fullWidth
            component={Link}
            size={'xl'}
            to={LOGIN}
          >
            Вход
          </Button>
        </>
      )}
    </Flex>
  );
};
