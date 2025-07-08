import CardComp from "./CardComp"
import Features from "./Features";
import InfoCard from "./InfoCard"
import Slider from "./Slider"
import VideoLoop from "./VideoLoop"
import Button from 'react-bootstrap/Button';


const HomePage = () => {
    return (
        <>
            <div className="sliderWidth">
                <Slider />
                <InfoCard />
                <div className="sizeTest">
                    <h1>Products</h1>
                    <div className="manyCard">
                        <CardComp className="CardComp" />
                        <CardComp className="CardComp" />
                        <CardComp className="CardComp" />
                        <CardComp className="CardComp" />
                    </div>
                    <Button variant="secondary">
                        <a href="/products" className="viewall">View All</a>
                    </Button>
                </div>
                <div className="videobox">
                    <VideoLoop />
                </div>
                <Features />
            </div>
        </>
    )
}

export default HomePage
