import React, { useState } from 'react';

const categories = [
    { name: 'Fruits & Veges', image: 'https://images.unsplash.com/photo-1708268327376-e37b9ea106e7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Breads & Sweets', image: 'https://plus.unsplash.com/premium_photo-1664551734580-fafebbfd3e81?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Fruits & Veges', image: 'https://images.unsplash.com/photo-1633424416833-2c558a535781?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Beverages', image: 'https://images.unsplash.com/photo-1683376952469-bc4e0d279429?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Meat Products', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Fast Food', image: 'https://plus.unsplash.com/premium_photo-1683619761468-b06992704398?q=80&w=1565&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
];

const Category = () => {
    const [showAll, setShowAll] = useState(false);

    const handleViewAll = () => {
        setShowAll(!showAll);
    };

    return (
        <div className="category-container">
            <h2 className='h-text-aline'>Category</h2>
            <button className="view-all flex" onClick={handleViewAll}>
                {showAll ? 'Hide All' : 'View All'}
            </button>
            <div className="category-row">
                {categories.slice(0, 5).map((cat, index) => (
                    <div className="category-item" key={index}>
                        <img src={cat.image} alt={cat.name} />
                        <p>{cat.name}</p>
                    </div>
                ))}
            </div>

            {showAll && (
                <div className="all-category-row">
                    {categories.map((cat, index) => (
                        <div className="category-item" key={index}>
                            <img src={cat.image} alt={cat.name} />
                            <p>{cat.name}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Category;
