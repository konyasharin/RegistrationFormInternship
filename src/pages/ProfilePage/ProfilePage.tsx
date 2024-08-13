import { Button, Flex, Paper, Space, Text, Title } from '@mantine/core';
import { useContext } from 'react';
import { StoreContext } from '@/context/StoreContext.tsx';

export const ProfilePage = () => {
  const context = useContext(StoreContext);
  return (
    <Paper p={'xl'} shadow={'xl'}>
      <Title tt={'uppercase'} order={2} size={'h1'} ta={'center'}>
        Профиль
      </Title>
      <Space h={40} />
      <Flex direction={'column'} gap={20}>
        <Flex gap={10} align={'baseline'}>
          <Text size={'xl'} fw={700}>
            Электронная почта:
          </Text>
          <Text size={'md'}>{context?.user?.email}</Text>
        </Flex>
        <Button
          w={'fit-content'}
          h={'fit-content'}
          p={0}
          size={'lg'}
          variant={'transparent'}
          c={'red'}
          onClick={() => {
            context?.setUser(null);
            context?.setJwt({});
          }}
        >
          Выйти
        </Button>
      </Flex>
    </Paper>
  );
};
