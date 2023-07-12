import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();

  let currentLink = '';

  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <li key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </li>
      );
    });
  return (
    <div className='text-sm breadcrumbs'>
      <ul>
        <li>
          <Link to='/'>Products</Link>
        </li>
        {crumbs}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
