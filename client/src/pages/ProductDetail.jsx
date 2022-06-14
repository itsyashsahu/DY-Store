// Utils
import Header from '../components/Utils/Header';
import Navbar from '../components/Utils/Navbar';
import Breadcrumbs from '../components/Utils/Breadcrumbs';

// Components
import ProductDetailCard from '../components/ProductDetails/ProductDetailCard';
import ProductDetailSection from '../components/ProductDetails/ProductDetailSection';

const ProductDetail = () => {
	return (
		<>
			<Header />
			<Navbar />
			<Breadcrumbs />
			<ProductDetailCard />
			<ProductDetailSection />
		</>
	);
};

export default ProductDetail;
