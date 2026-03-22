import { it, expect, describe,  beforeEach } from 'vitest';
import { render, screen, within} from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Header } from './Header';
import SearchIcon from '../assets/images/icons/search-icon.png';
import CartIcon from '../assets/images/icons/cart-icon.png';
import CheckmarkWhite from '../assets/images/icons/checkmark-white.png';

describe('Header component', () => {
    let cart;

    beforeEach(() => {
        cart = [{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 2,
            deliveryOptionId: '1'
        }, {
            productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity: 3,
            deliveryOptionId: '2'
        }];
    });

    it('displays elements correctly', () => {
        render(
            <MemoryRouter>
                <Header cart={cart} />
            </MemoryRouter>
            
        );

        const logo = screen.getByTestId('logo');
        expect(logo).toHaveAttribute('src', CheckmarkWhite);


        const mobileLogo = screen.getByTestId('mobile-logo');
        expect(mobileLogo).toHaveAttribute('src', CheckmarkWhite);

        const searchBar = screen.getByTestId('search-bar');
        expect(searchBar).toBeInTheDocument();
      
        const searchButton = screen.getByTestId('search-button');
        expect(searchButton).toBeInTheDocument();
        expect(within(searchButton).getByTestId('search-icon')).toHaveAttribute('src', SearchIcon);

        const ordersLink = screen.getByTestId('orders-link');
        expect(ordersLink).toHaveTextContent('Orders');
        expect(ordersLink).toHaveAttribute('href', '/orders');

        const cartLink = screen.getByTestId('cart-link');
        expect(cartLink).toHaveTextContent('Cart');
        expect(within(cartLink).getByTestId('cart-icon')).toHaveAttribute('src', CartIcon);
        expect(cartLink).toHaveAttribute('href', '/checkout');


    })
})
