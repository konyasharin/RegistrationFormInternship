import { Button, em, Stack } from '@mantine/core';
import { Link } from 'react-router-dom';
import { LOGIN, REGISTRATION } from "@/shared/constants/routes.ts";

export const MainPage = () => {
  return (
    <Stack mih={em('100vh')} align="stretch" justify="center" gap={30}>
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
    </Stack>
  );
};
