import { Flex, Paper, Space, Text, Title } from '@mantine/core';
import { useContext } from 'react';
import { StoreContext } from '@/context/StoreContext.tsx';

export const ProfilePage = () => {
  const user = useContext(StoreContext)?.user;
  return (
    <Paper p={'xl'} shadow={'xl'}>
      <Title tt={'uppercase'} order={2} size={'h1'} ta={'center'}>
        Профиль
      </Title>
      <Space h={30} />
      <Flex direction={'column'} gap={20}>
        <Flex gap={10} align={'center'}>
          <Text size={'xl'} fw={700}>
            Электронная почта:
          </Text>
          <Text size={'lg'}>{user?.email}</Text>
        </Flex>
      </Flex>
    </Paper>
  );
};
