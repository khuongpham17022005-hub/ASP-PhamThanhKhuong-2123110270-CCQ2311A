import Header from '../../components/Header';
import Footer from '../../components/Footer';

import HeroBanner from './HeroBanner';
import CategoryMenu from './CategoryMenu';
import ProductGrid from './ProductGrid';
import LatestBlog from './LatestBlog';

function HomePage() {
    return (
        <>
            <Header />
            <HeroBanner />
            <CategoryMenu />
            <ProductGrid />
            <LatestBlog />
            <Footer />
        </>
    );
}

export default HomePage;