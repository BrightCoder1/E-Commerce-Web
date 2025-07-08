import React, { useState } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const images = [
    "https://images.unsplash.com/photo-1657639028182-24e11504c7c1?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1640441710596-d0b5e22edaac?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1485322551133-3a4c27a9d925?q=80&w=1470&auto=format&fit=crop"
];

const Services = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevImage = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextImage = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="gallery">
            <div className="gallery-text">
                <h2>Our Services</h2>
                <p>
                    Explore images of our well-appointed accommodations, featuring modern amenities and stylish decor designed to make your stay a memorable one. Admire the stunning views of the city skyline from our rooftop pool, where you can relax and unwind after a day of exploring the city.
                </p>
            </div>

            <div className="gallery-slider">
                <button className=" left" onClick={prevImage}>
                    <FaArrowLeftLong />
                </button>

                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex}`}
                    className="gallery-image"
                />

                <button className=" right" onClick={nextImage}>
                    <FaArrowRight />
                </button>
            </div>
        </section>
    );
};

export default Services;
