import { Link } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';

const Header = () => {
  return (
    <header className='navbar bg-base-100 relative flex items-center justify-between mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
      <div className='flex-col items-baseline'>
        <Link className='btn btn-ghost normal-case text-xl'>ECOMMERCE</Link>
        <Breadcrumbs />
      </div>
      <div className='flex-none'>
        <label tabIndex={0} className='btn btn-ghost btn-circle'>
          <div className='indicator'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
              />
            </svg>
            <span className='badge badge-sm indicator-item'>8</span>
          </div>
        </label>
      </div>
    </header>
  );
};

export default Header;
