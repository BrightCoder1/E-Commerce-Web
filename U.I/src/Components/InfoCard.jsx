const InfoCard = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-inter">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-6xl w-full flex flex-col md:flex-row width">
                    {/* Image Section */}
                    <div className="md:w-1/2 flex-shrink-0 widthSet">
                        <img src="https://images.unsplash.com/photo-1726137569820-bff1c68311a1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="img" />
                    </div>

                    {/* Content Section */}
                    <div className="card md:w-1/2 p-8 flex flex-col justify-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                            CLASSIC WINTER <br /> COLLECTION
                        </h1>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                            Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus, gravida orci, fringilla a.
                            Ac sed eu fringilla odio mi. Consequat pharetra at magna imperdiet cursus ac
                            faucibus sit libero. Ultricies quam nunc, lorem sit lorem urna, pretium aliquam ut. In
                            vel, quis donec dolor id in. Pulvinar commodo mollis diam sed facilisis at cursus
                            imperdiet cursus ac faucibus sit faucibus sit libero.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis commodi quos eaque odio aspernatur eligendi, molestias tenetur quia, vel exercitationem sapiente. Culpa sequi ullam provident ad reprehenderit in odit nostrum repellendus. Animi labore facilis reprehenderit, quisquam consectetur consequatur, fugiat, laudantium possimus cupiditate aut dicta odio? Ullam ducimus provident aut atque veritatis impedit eligendi sed consectetur voluptatibus. Aut, voluptate expedita vel facilis dolore earum sapiente tempora incidunt vitae illo voluptatum consectetur quos, dignissimos doloremque culpa eaque officia aliquid, eos accusantium minima voluptates autem explicabo eius reprehenderit. Ullam labore totam eaque minus et neque architecto repudiandae quos, ex beatae magni vel placeat?
                        </p>
                        <button className="self-start bg-gray-800 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-700 transition duration-300 ease-in-out shadow-md hover">
                            SHOP COLLECTION
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoCard;