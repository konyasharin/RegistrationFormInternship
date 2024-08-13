import { Container, em } from '@mantine/core';
import { Route, Routes } from 'react-router-dom';
import { LOGIN, MAIN, REGISTRATION } from '@/shared/constants/routes.ts';
import { RegistrationPage } from '@/pages/RegistrationPage/RegistrationPage.tsx';
import { MainPage } from '@/pages/MainPage/MainPage.tsx';
import { LoginPage } from '@/pages/LoginPage/LoginPage.tsx';

function App() {
  return (
    <Container mih={em('100vh')} size={'responsive'} pos={'relative'}>
      <Routes>
        <Route path={MAIN} element={<MainPage />} />
        <Route path={REGISTRATION} element={<RegistrationPage />} />
        <Route path={LOGIN} element={<LoginPage />} />
      </Routes>
    </Container>
  );
}

export default App;
