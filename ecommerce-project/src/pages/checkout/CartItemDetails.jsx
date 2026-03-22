import axios from 'axios';
import { useState } from 'react'
import { formatMoney } from '../../utils/money';
import './CheckoutPage.css';


export function CartItemDetails({ cartItem, loadCart }) {
    const [isUpdatingQuantity, setIsUpdatingQuantity] = useState(false);
    const [quantity, setQuantity] = useState(cartItem.quantity);

    const deleteCartItem = async () => {
        await axios.delete(`/api/cart-items/${cartItem.productId}`);
        await loadCart();
    };

    const updateQuantityItem = async () => {
        if (isUpdatingQuantity) {
            await axios.put(`/api/cart-items/${cartItem.productId}`, {
                quantity: Number(quantity)
            })
            await loadCart();
            setIsUpdatingQuantity(false)
        } else {
            setIsUpdatingQuantity(true);
        }
    }

    const updateControlledQuantity = (event) => {
        setQuantity(event.target.value);

    }


    const keyEventHandler = (event) => {
        if (event.key === "Enter") {
            updateQuantityItem();
        } else if (event.key === "Escape") {
            setQuantity(cartItem.quantity);
            setIsUpdatingQuantity(false);
        }
    }

    return (

        <>
            <img className="product-image"
                data-testid="cart-item-image"
                src={cartItem.product.image} />

            <div className="cart-item-details">
                <div className="product-name"
                    data-testid="cart-item-name">
                    {cartItem.product.name}
                </div>
                <div className="product-price"
                    data-testid="cart-item-price">
                    {formatMoney(cartItem.product.priceCents)}
                </div>
                <div className="product-quantity"
                    data-testid="cart-item-quantity">
                    Quantity: {isUpdatingQuantity
                        ? <input type="text" className="update-quantity-input"
                            value={quantity} onChange={updateControlledQuantity}
                            onKeyDown={keyEventHandler} />
                        : <span>
                            <span className="quantity-label">Quantity: {cartItem.quantity}</span>
                        </span>
                    }


                    <span className="update-quantity-link link-primary"
                        onClick={updateQuantityItem}>
                        Update
                    </span>
                    <span className="delete-quantity-link link-primary"
                        data-testid="cart-item=delete-quantity-link"
                        onClick={deleteCartItem}>
                        Delete
                    </span>
                </div>
            </div>

        </>

    )
}