/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductList from '../components/ProductList';

describe('ProductList', () => {
  const products = [
    { id: 1, model: 'Product 1', brand: 'Brand 1' },
    { id: 2, model: 'Product 2', brand: 'Brand 2' },
  ];

  it('renders the product list correctly', () => {
    render(
      <BrowserRouter>
        <ProductList products={products} query='' />
      </BrowserRouter>
    );

    expect(screen.getByText('Product 1')).toBeTruthy();
    expect(screen.getByText('Product 2')).toBeTruthy();
  });

  it('filters products by query', () => {
    render(
      <BrowserRouter>
        <ProductList products={products} query='Product 1' />
      </BrowserRouter>
    );

    expect(screen.getByText('Product 1')).toBeTruthy();
    expect(screen.queryByText('Product 2')).toBeNull();
  });
});
