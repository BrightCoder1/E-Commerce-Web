const products = [
    {
        id: 1,
        name: 'HP Laptop',
        price: 45,
        originalPrice: 50,
        discount: '20% OFF',
        image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        rating: 5,
        reviews: 222
    },
    {
        id: 2,
        name: 'Whole Grain Oatmeal',
        price: 50,
        originalPrice: 54,
        discount: '10% OFF',
        image: 'https://images.unsplash.com/photo-1563139205-b6d0e303ad58?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        rating: 5,
        reviews: 41
    },
    {
        id: 3,
        name: 'Sharp Cheddar Cheese Block',
        price: 12,
        originalPrice: 14,
        discount: '10% OFF',
        image: 'https://images.unsplash.com/photo-1549320719-b97a0b5b8294?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        rating: 5,
        reviews: 32
    },
    {
        id: 4,
        name: 'Organic Baby Spinach',
        price: 18,
        originalPrice: 24,
        discount: '10% OFF',
        image: 'https://images.unsplash.com/photo-1658315216383-0981970a596b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        rating: 5,
        reviews: 222
    },
    {
        id: 5,
        name: 'Organic Baby Spinach (Washed)',
        price: 20,
        originalPrice: 25,
        discount: '15% OFF',
        image: 'https://images.unsplash.com/photo-1658315216383-0981970a596b?q=80&w=1374',
        rating: 4,
        reviews: 180
    },
    {
        id: 6,
        name: 'Organic Baby Spinach (250g)',
        price: 15,
        originalPrice: 20,
        discount: '25% OFF',
        image: 'https://images.unsplash.com/photo-1658315216383-0981970a596b?q=80&w=1374',
        rating: 5,
        reviews: 150
    }
];


const BestSellingProducts = () => {
    return (
        <div className="product-section">
            <div className="section-header">
                <h2>Best selling products</h2>
                {/* <button className="view-all-btn">View All</button> */}
            </div>
            <div className="product-grid">
                {products.map((product, index) => (
                    <div className="product-card" key={index}>
                        <div className="product-img-container">
                            <img src={product.image} alt={product.name} />
                            <div className="add-to-cart">
                                <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                                <button className="cart-btn">Add to Cart</button>
                                <button className="wishlist">♡</button>
                            </div>
                        </div>
                        <div className="product-info">
                            <h4>{product.name}</h4>
                            <div className="rating">
                                {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)} ({product.reviews})
                            </div>
                            <div className="price">
                                <span className="original-price">${product.originalPrice.toFixed(2)}</span>
                                <span className="sale-price">${product.price.toFixed(2)}</span>
                                <span className="discount">{product.discount}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestSellingProducts;
