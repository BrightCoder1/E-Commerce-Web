import { useState } from 'react';

const products = [
    {
        name: 'Greek Style Plain Yogurt',
        image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        rating: 5,
        reviews: 222,
        oldPrice: 24,
        newPrice: 18,
        discount: '10% OFF'
    },
    {
        name: 'Pure Squeezed No Pulp Orange Juice',
        image: 'https://images.unsplash.com/photo-1563139205-b6d0e303ad58?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

        rating: 5,
        reviews: 222,
        oldPrice: 24,
        newPrice: 18,
        discount: '10% OFF'
    },
    {
        name: 'Fresh Oranges',
        image: 'https://images.unsplash.com/photo-1549320719-b97a0b5b8294?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

        rating: 5,
        reviews: 222,
        oldPrice: 24,
        newPrice: 18,
        discount: '10% OFF'
    },
    {
        name: 'Gourmet Dark Chocolate Bars',
        image: 'https://images.unsplash.com/photo-1658315216383-0981970a596b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

        rating: 5,
        reviews: 222,
        oldPrice: 24,
        newPrice: 18,
        discount: '10% OFF'
    },
    {
        name: 'Natural Honey',
        image: 'https://images.unsplash.com/photo-1658315216383-0981970a596b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

        rating: 5,
        reviews: 150,
        oldPrice: 30,
        newPrice: 25,
        discount: '15% OFF'
    },
    {
        name: 'Organic Apples',
        image: 'https://images.unsplash.com/photo-1658315216383-0981970a596b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

        rating: 5,
        reviews: 190,
        oldPrice: 20,
        newPrice: 18,
        discount: '10% OFF'
    }
];


const FeaturedProducts = () => {
    const [showAll, setShowAll] = useState(false);
    const displayedProducts = showAll ? products : products.slice(0, 4);

    return (
        <div className="featured-products">
            <div className="header">
                <h2>Featured products</h2>
                <button className="view-all-btn" onClick={() => setShowAll(!showAll)}>
                    {showAll ? 'Hide' : 'View All'}
                </button>
            </div>
            <div className="product-grid">
                {displayedProducts.map((product, index) => (
                    <div className="product-card" key={index}>
                        <img src={product.image} alt={product.name} />
                        <h4>{product.name}</h4>
                        <div className="rating">
                            {'⭐'.repeat(product.rating)} <span>({product.reviews})</span>
                        </div>
                        <div className="price">
                            <span className="old">${product.oldPrice.toFixed(2)}</span>
                            <span className="new">${product.newPrice.toFixed(2)}</span>
                            <span className="discount">{product.discount}</span>
                        </div>
                        <div className="buy-section">
                            <input type="number" min="1" defaultValue="1" />
                            <button className="add-cart">🛒 Add to Cart</button>
                            <button className="wishlist">♡</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;
