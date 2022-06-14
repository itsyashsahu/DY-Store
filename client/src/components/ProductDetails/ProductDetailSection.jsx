// Routing
import { Link } from 'react-router-dom';

const ProductDetailSection = () => {
	return (
		<section className='bg-gray-100 py-10'>
			<div className='container max-w-screen-xl mx-auto px-4'>
				<div className='flex flex-wrap -mx-2'>
					<div className='lg:w-3/4 px-2'>
						<article className='border border-gray-200 shadow-sm rounded bg-white'>
							<nav className='border-b px-4'>
								<Link
									to='#'
									className='px-3 py-4 mx-1 inline-block border-b border-blue-600 text-blue-600 hover:border-blue-600 hover:text-blue-500'
								>
									Overview
								</Link>
								<Link
									to='#'
									className='px-3 py-4 mx-1 inline-block hover:border-blue-600 hover:text-blue-500'
								>
									Specification
								</Link>
								<Link
									to='#'
									className='px-3 py-4 mx-1 inline-block hover:border-blue-600 hover:text-blue-500'
								>
									Delivery
								</Link>
								<Link
									to='#'
									className='px-3 py-4 mx-1 inline-block hover:border-blue-600 hover:text-blue-500'
								>
									Payment info
								</Link>
								<Link
									to='#'
									className='px-3 py-4 mx-1 inline-block hover:border-blue-600 hover:text-blue-500'
								>
									Seller profile
								</Link>
							</nav>
							<div className='p-5 text-gray-700'>
								<p className='mb-3'>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</p>
								<p className='mb-3'>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. <br /> Excepteur sint
									occaecat cupidatat non proident, sunt in culpa qui officia
									deserunt mollit anim id est laborum.
								</p>
								<p className='mb-3'>
									Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip ex ea commodo
									consequat. Duis aute irure dolor in reprehenderit in voluptate
									velit esse cillum dolore eu fugiat nulla pariatur. <br />{' '}
									Excepteur sint occaecat cupidatat non proident, sunt in culpa
									qui officia deserunt mollit anim id est laborum.
								</p>
								<p className='mb-3'>
									Consectetur adipisicing elit, sed do eiusmod tempor incididunt
									ut labore et dolore magna aliqua. Ut enim ad minim veniam,
									quis nostrud exercitation ullamco laboris nisi ut aliquip ex
									ea commodo consequat. Duis aute irure dolor in reprehenderit
									in voluptate velit esse cillum dolore eu fugiat nulla
									pariatur.
								</p>
							</div>
						</article>
					</div>{' '}
					{/* col.// */}
					<aside className='lg:w-1/4 px-2'>
						<article className='border border-gray-200 shadow-sm rounded bg-white p-4'>
							<h3 className='mb-5 text-lg font-semibold'>Similar products</h3>
							<figure className='flex flex-row mb-4'>
								<div>
									<Link
										to='#'
										className='block w-20 h-20 rounded border border-gray-200 overflow-hidden'
									>
										<img src='images/items/8.jpg' alt='Title' />
									</Link>
								</div>
								<figcaption className='ml-3'>
									<p>
										<Link to='#' className='text-gray-600 hover:text-blue-600'>
											Travel Bag Jeans Blue Color Modern
										</Link>
									</p>
									<p className='mt-1 font-semibold'>$712.00</p>
								</figcaption>
							</figure>
							<figure className='flex flex-row mb-4'>
								<div>
									<Link
										to='#'
										className='block w-20 h-20 rounded border border-gray-200 overflow-hidden'
									>
										<img src='images/items/9.jpg' alt='Title' />
									</Link>
								</div>
								<figcaption className='ml-3'>
									<p>
										<Link to='#' className='text-gray-600 hover:text-blue-600'>
											Apple Watch Series 4 - Space Gray
										</Link>
									</p>
									<p className='mt-1 font-semibold'>$12.99</p>
								</figcaption>
							</figure>
							<figure className='flex flex-row mb-4'>
								<div>
									<Link
										to='#'
										className='block w-20 h-20 rounded border border-gray-200 overflow-hidden'
									>
										<img src='../../ProductImages/10.jpg' alt='Title' />
									</Link>
								</div>
								<figcaption className='ml-3'>
									<p>
										<Link to='#' className='text-gray-600 hover:text-blue-600'>
											Apple Watch Series 4 - Space Gray
										</Link>
									</p>
									<p className='mt-1 font-semibold'>$12.99</p>
								</figcaption>
							</figure>
							<figure className='flex flex-row mb-4'>
								<div>
									<Link
										to='#'
										className='block w-20 h-20 rounded border border-gray-200 overflow-hidden'
									>
										<img src='images/items/11.jpg' alt='Title' />
									</Link>
								</div>
								<figcaption className='ml-3'>
									<p>
										<Link to='#' className='text-gray-600 hover:text-blue-600'>
											Apple Watch Series 4 - Space Gray
										</Link>
									</p>
									<p className='mt-1 font-semibold'>$12.99</p>
								</figcaption>
							</figure>
						</article>
					</aside>{' '}
					{/* col./ */}
				</div>{' '}
				{/* grid./ */}
			</div>{' '}
			{/* container./ */}
		</section>
	);
};

export default ProductDetailSection;
