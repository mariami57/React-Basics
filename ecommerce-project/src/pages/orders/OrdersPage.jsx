import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { OrdersGrid } from './OrdersGrid';
import OrdersIcon from '../../assets/images/orders-favicon.png';
import './OrdersPage.css';

export function OrdersPage({ cart, loadCart }) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {

        const getOrdersData = async () => {
            const response = await axios.get('/api/orders?expand=products')
            setOrders(response.data);

        }

        getOrdersData();

    }, []);
    return (
        <>
            <link rel="icon" type="image/svg+xml" href={OrdersIcon} />
            <title>Orders</title>
            <Header cart={cart} />

            <div className="orders-page">
                <div className="page-title">Your Orders</div>

                <OrdersGrid orders={orders} loadCart={loadCart}/>
            </div>
        </>
    )
}