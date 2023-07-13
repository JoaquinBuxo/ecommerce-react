/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react';
import Actions from '../components/Actions';
import { useCart } from '../hooks/useCart';

vi.mock('../hooks/useCart', () => ({
  useCart: vi.fn().mockReturnValue({
    addToCart: vi.fn(),
  }),
}));

describe('Actions', () => {
  const productId = '123';
  const options = {
    colors: [
      { code: '1', name: 'Red' },
      { code: '2', name: 'Blue' },
    ],
    storages: [
      { code: '3', name: 'Small' },
      { code: '4', name: 'Large' },
    ],
  };

  it('submits the form on button click', () => {
    render(<Actions productId={productId} options={options} />);
    const addToCartMock = useCart().addToCart;

    fireEvent.click(screen.getByRole('button', { name: 'Add Item' }));

    expect(addToCartMock).toHaveBeenCalled();
  });

  it('calls addToCart with correct parameters on form submission', () => {
    render(<Actions productId={productId} options={options} />);
    const addToCartMock = useCart().addToCart;

    fireEvent.change(screen.getByLabelText('Pick the colors'), {
      target: { value: '1' },
    });
    fireEvent.change(screen.getByLabelText('Pick the storages'), {
      target: { value: '3' },
    });
    fireEvent.submit(screen.getByRole('button', { name: 'Add Item' }));

    expect(addToCartMock).toHaveBeenCalledWith({
      id: productId,
      colorCode: '1',
      storageCode: '3',
    });
  });
});
