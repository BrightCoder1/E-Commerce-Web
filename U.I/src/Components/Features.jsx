import { FaShoppingCart, FaShieldAlt, FaStore, FaMapMarkerAlt, FaGift } from 'react-icons/fa';

const features = [
  {
    icon: <FaShoppingCart />,
    title: 'Free delivery',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipi elit.'
  },
  {
    icon: <FaShieldAlt />,
    title: '100% secure payment',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipi elit.'
  },
  {
    icon: <FaStore />,
    title: 'Quality guarantee',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipi elit.'
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Guaranteed savings',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipi elit.'
  },
  {
    icon: <FaGift />,
    title: 'Daily offers',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipi elit.'
  },
];

const Features = () => {
  return (
    <div className="features-container">
      {features.map((item, index) => (
        <div className="feature-card" key={index}>
          <div className="feature-icon">{item.icon}</div>
          <div>
            <h4 className="feature-title">{item.title}</h4>
            <p className="feature-desc">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
