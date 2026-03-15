import { OrderHeader } from './OrderHeader';
import BuyAgainIcon from '../../assets/images/icons/buy-again.png';
import { OrderDetailsGrid } from './OrderDetailsGrid';

export function OrdersGrid({ orders, loadCart }) {
    return (
        <div className="orders-grid">
            {orders.map((order) => {
                
                return (
                    <div key={order.id} className="order-container">

                        <OrderHeader order={order} />

                        <OrderDetailsGrid order={order} loadCart={loadCart}/>
                    </div>
                )
            })
            }

        </div>
    )
}