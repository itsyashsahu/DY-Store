// Utils
import ProductCard from '../Utils/ProductCard';

const ProductContainer = () => {
	return (
		<section className='py-10'>
			<div className='container max-w-screen-xl mx-auto px-4'>
				<h2 className='text-3xl font-bold mb-8'>New products</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</div>{' '}
				{/* grid ./ */}
			</div>
		</section>
	);
};

export default ProductContainer;
