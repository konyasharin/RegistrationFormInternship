import { Button, Center, Flex, Space, Text, TextInput } from '@mantine/core';
import { Form } from '@/components/ui/Form/Form.tsx';
import { Link } from 'react-router-dom';
import { REGISTRATION } from '@/shared/constants/routes.ts';

export const LoginPage = () => {
  return (
    <>
      <Space h={200} />
      <Form title={'Вход'}>
        <Flex direction={'column'} gap={10}>
          <TextInput size={'lg'} placeholder={'Электронная почта'} />
          <TextInput size={'lg'} placeholder={'Пароль'} />
        </Flex>
        <Space h={20} />
        <Button variant={'filled'} fullWidth size={'lg'}>
          Войти
        </Button>
      </Form>
      <Space h={5} />
      <Center>
        <Text component={Link} to={REGISTRATION} c={'blue'} size={'xl'}>
          Нет аккаунта? Зарегистрироваться
        </Text>
      </Center>
    </>
  );
};
