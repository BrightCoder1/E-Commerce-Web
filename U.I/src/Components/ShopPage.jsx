import Category from "./Category"
import ElectricProducts from "./ElectricProducts"
import FeaturedProducts from "./FeaturedProudects"
import GroceryProducts from "./GroceryProducts"
import HomeProducts from "./HomeProducts"
import ProductCategory from "./ProductCategory"
import ShopBanner from "./ShopBanner"
import Taddy from "./Taddy"

const ShopPage = () => {
    return (
        <>
            <ShopBanner />
            <br />
            <h1 className="h-text-aline">Products with Categore</h1>
            <Category />
            <ProductCategory />
            <FeaturedProducts />
            <HomeProducts />
            <ElectricProducts />
            <Taddy />
            <GroceryProducts />
        </>
    )
}

export default ShopPage;