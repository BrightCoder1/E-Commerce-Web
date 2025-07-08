import React from 'react';

const banners = [
  {
    title: 'Items on SALE',
    subtitle: 'Discounts up to 30%',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    large: true,
  },
  {
    title: 'Combo offers',
    subtitle: 'Discounts up to 50%',
    image: 'https://images.unsplash.com/photo-1730794545099-14902983739d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Discount Coupons',
    subtitle: 'Discounts up to 40%',
    image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const PromoBanners = () => {
  return (
    <div className="promo-banners">
      <div className="left-banner">
        <Banner {...banners[0]} />
      </div>
      <div className="right-banners">
        <Banner {...banners[1]} />
        <Banner {...banners[2]} />
      </div>
    </div>
  );
};

const Banner = ({ title, subtitle, image }) => (
  <div className="banner" style={{ backgroundImage: `url(${image})` }}>
    <div className="banner-content">
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <a href="#" className="shop-now">SHOP NOW</a>
    </div>
  </div>
);

export default PromoBanners;
