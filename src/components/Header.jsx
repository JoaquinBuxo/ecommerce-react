import { Link } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
import Cart from './Cart';

const Header = () => {
  return (
    <header className='navbar bg-base-100 relative flex items-center justify-between mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
      <div className='flex-col items-baseline'>
        <Link className='btn btn-ghost normal-case text-xl'>ECOMMERCE</Link>
        <Breadcrumbs />
      </div>
      <div className='flex-none'>
        <Cart />
      </div>
    </header>
  );
};

export default Header;
