import { AppShell, Container, em, Group } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import { MAIN, REGISTRATION } from '@/shared/constants/routes.ts';
import styles from './Header.module.css';
import clsx from 'clsx';

export const Header = () => {
  const createNavLinkClassName = (isActive: boolean) => {
    return clsx(
      styles.nav_link,
      isActive ? styles.nav_link_active : styles.nav_link_disabled,
    );
  };
  return (
    <AppShell.Header>
      <Container h={em('100%')} size={'responsive'} p={'0'}>
        <Group h={em('100%')} gap={80} align={'center'}>
          <NavLink
            className={({ isActive }) => createNavLinkClassName(isActive)}
            to={MAIN}
          >
            Главная
          </NavLink>
          <NavLink
            className={({ isActive }) => createNavLinkClassName(isActive)}
            to={REGISTRATION}
          >
            Регистрация
          </NavLink>
        </Group>
      </Container>
    </AppShell.Header>
  );
};
