import { Button, Flex } from '@mantine/core';
import { Link } from 'react-router-dom';
import { LOGIN, REGISTRATION } from '@/shared/constants/routes.ts';

export const MainPage = () => {
  return (
    <Flex gap={30} direction="column">
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
    </Flex>
  );
};
