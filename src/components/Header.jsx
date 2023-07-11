import { Link } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';

const Header = () => {
  return (
    <header>
      <Link to='/'>ECOMMERCE</Link>
      <Breadcrumbs />
    </header>
  );
};

export default Header;
