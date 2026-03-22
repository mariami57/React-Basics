import { it, expect, describe, vi, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
// import axios from 'axios';
import { PaymentSummary } from './PaymentSummary';

vi.mock('axios');

describe('PaymentSummary component', () => {
    let paymentSummary;
    let loadCart;
    // let user;

    beforeEach(() => {
        paymentSummary = {
            totalItems: 3,
            productCostCents: 4275,
            shippingCostCents: 499,
            totalCostBeforeTaxCents: 4774,
            taxCents: 477,
            totalCostCents: 5251
        }

        loadCart = vi.fn();
        // user = userEvent.setup();
    });

    it('displays the correct dollar amount', async () => {
        render(
            <MemoryRouter>
                <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
            </MemoryRouter>
        );

        const paymentProductCost = screen.getByTestId('payment-product-cost');
        const shippingCost = screen.getByTestId('payment-shipping-cost');
        const totalBeforeTax = screen.getByTestId('payment-total-before-tax');
        const tax = screen.getByTestId('payment-summary-tax');
        const total = screen.getByTestId('payment-summary-total');

        expect(
            screen.getByText('Items (3):')
        ).toBeInTheDocument();

        expect(
            within(paymentProductCost).getByText('$42.75')
        ).toBeInTheDocument();

        expect(
            within(shippingCost).getByText('$4.99')
        ).toBeInTheDocument();

        expect(
            totalBeforeTax
        ).toHaveTextContent('$47.74');

        expect(
            tax
        ).toHaveTextContent('$4.77');

        expect(
            total
        ).toHaveTextContent('$52.51')


    })
})