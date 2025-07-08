const orders = [
    {
        id: '#64997721460087',
        date: '14 January, 2022',
        amount: 499,
        status: 'Pending',
        products: [
            {
                name: 'Apple Watch Series 7',
                variant: 'Golden',
                image: 'https://images.unsplash.com/photo-1658315216383-0981970a596b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                price: 359,
            },
            {
                name: 'Beyolo 90 Speaker',
                variant: 'Space Gray',
                image: 'https://images.unsplash.com/photo-1658315216383-0981970a596b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                price: 49,
            },
        ],
    },
    {
        id: '#64997721460087',
        date: '14 January, 2022',
        amount: 299,
        status: 'Delivered',
        products: [
            {
                name: 'Apple Watch Series 7',
                variant: 'Golden',
                image: 'https://images.unsplash.com/photo-1658315216383-0981970a596b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                price: 359,
            },
            {
                name: 'Beyolo 90 Speaker',
                variant: 'Space Gray',
                image: 'https://images.unsplash.com/photo-1658315216383-0981970a596b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                price: 49,
            },
        ],
    },
]; 

const OrderDetails = () => {
    return (
        <div className="order-details">
            <h2>Order Details</h2>
            <p>Check the status of recent and old orders & discover more products</p>

            {orders.map((order, index) => (
                <div key={index} className="order-card">
                    <div className="order-info">
                        <p><strong>Order ID</strong><br />{order.id}</p>
                        <p><strong>Date</strong><br />{order.date}</p>
                        <p><strong>Total Amount</strong><br />${order.amount}</p>
                        <p>
                            <strong>Order Status</strong><br />
                            <span className={`status ${order.status.toLowerCase()}`}>{order.status}</span>
                        </p>
                    </div>

                    <div className="order-products">
                        {order.products.map((product, i) => (
                            <div key={i} className="product-row">
                                <img src={product.image} alt={product.name} />
                                <div className="product-details">
                                    <h4>{product.name}</h4>
                                    <p>{product.variant}</p>
                                    <div className="product-actions">
                                        <a href="#">View Product</a>
                                        {/* <a href="#">Similar Product</a> */}
                                    </div>
                                </div>
                                <div className="product-price">${product.price}</div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OrderDetails;
