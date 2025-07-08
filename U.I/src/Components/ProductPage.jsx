function ProductPage() {
    return (
        <div className="min-h-screen bg-yellow-300 flex flex-col items-center justify-center font-sans relative overflow-hidden p-4">
            <div className="absolute top-0 right-0 w-full md:w-1/2 lg:w-2/5 h-1/2 md:h-full bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://placehold.co/800x600/FACC15/000000?text=Organic+Produce')",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right top',
                    zIndex: 0
                }}>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-left md:text-left py-8 md:py-16 px-4 md:px-0">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight mb-4">
                    <span className="text-green-600">Organic Foods</span>
                    <br />
                    at your
                    <br />
                    Doorsteps
                </h1>

                <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-md">
                    Dignissim massa diam elementum.
                </p>

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
                    <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 btnclr" >
                        START SHOPPING
                    </button>

                    <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 btnclr">
                        <a className="atag" href="/register">
                            JOIN NOW
                        </a>
                    </button>
                    <br />
                </div>
                <br />

                <div className="flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center w-full mt-12 space-y-8 sm:space-y-0 sm:space-x-8">
                    <div className="text-center sm:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">14k+</h2>
                        <p className="text-gray-600 text-sm md:text-base">PRODUCT</p>
                    </div>

                    <div className="text-center sm:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">50k+</h2>
                        <p className="text-gray-600 text-sm md:text-base">HProductPageY</p>
                    </div>

                    <div className="text-center sm:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">10+</h2>
                        <p className="text-gray-600 text-sm md:text-base">STORE LOCATIONS</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;