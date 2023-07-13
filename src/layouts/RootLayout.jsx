import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
