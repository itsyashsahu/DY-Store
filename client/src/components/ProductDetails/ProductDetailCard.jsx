// Routing
import { Link } from 'react-router-dom';

const ProductDetailCard = () => {
	return (
		<section className='bg-white py-10'>
			<div className='container max-w-screen-xl mx-auto px-4'>
				<div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
					<aside>
						{/* gallery */}
						<div className='border border-gray-200 shadow-sm p-3 text-center rounded mb-5'>
							<img
								className='object-cover inline-block'
								width={400}
								src='images/items/detail/big.jpg'
								alt='Product title'
							/>
						</div>
						<div className='space-x-2 overflow-auto text-center whitespace-nowrap'>
							<Link
								to='#'
								className='inline-block border border-gray-200 p-1 rounded-md hover:border-blue-500'
							>
								<img
									className='w-14 h-14'
									src='images/items/detail/thumb.jpg'
									alt='Product title'
								/>
							</Link>
							<Link
								to='#'
								className='inline-block border border-gray-200 p-1 rounded-md hover:border-blue-500 '
							>
								<img
									className='w-14 h-14 object-cover'
									src='images/items/detail/thumb1.jpg'
									alt='Product title'
								/>
							</Link>
							<Link
								to='#'
								className='inline-block border border-gray-200 p-1 rounded-md hover:border-blue-500'
							>
								<img
									className='w-14 h-14 object-cover'
									src='images/items/detail/thumb2.jpg'
									alt='Product title'
								/>
							</Link>
							<Link
								to='#'
								className='inline-block border border-gray-200 p-1 rounded-md hover:border-blue-500'
							>
								<img
									className='w-14 h-14 object-cover'
									src='images/items/detail/thumb3.jpg'
									alt='Product title'
								/>
							</Link>
							<Link
								to='#'
								className='inline-block border border-gray-200 p-1 rounded-md hover:border-blue-500'
							>
								<img
									className='w-14 h-14 object-cover'
									src='images/items/detail/thumb4.jpg'
									alt='Product title'
								/>
							</Link>
						</div>
						{/* gallery end./ */}
					</aside>
					<main>
						<h2 className='font-semibold text-2xl mb-4'>
							Sweater Men New Arrival Casual Pullover <br /> Men Long Sleeve
						</h2>
						<div className='flex flex-wrap items-center space-x-2 mb-2'>
							<img
								className='d-inline-block h-4'
								src='images/misc/stars-active.svg'
								alt='Rating'
							/>
							<span className='text-yellow-500'>9.3</span>
							<svg
								width='6px'
								height='6px'
								viewBox='0 0 6 6'
								xmlns='http://www.w3.org/2000/svg'
							>
								<circle cx={3} cy={3} r={3} fill='#DBDBDB' />
							</svg>
							<span className='text-gray-400'>
								<i className='fa fa-shopping-bag mr-2' /> 154 orders
							</span>
							<svg
								width='6px'
								height='6px'
								viewBox='0 0 6 6'
								xmlns='http://www.w3.org/2000/svg'
							>
								<circle cx={3} cy={3} r={3} fill='#DBDBDB' />
							</svg>
							<span className='text-green-500'>Verified</span>
						</div>
						<p className='mb-4 font-semibold text-xl'>
							$98.00
							<span className='text-base font-normal'>/1 box</span>
						</p>
						<p className='mb-4 text-gray-500'>
							Virgil Abloh's Off-White is Link streetwear-inspired collection
							that continues to break away from the conventions of mainstream
							fashion. Made in Italy, these black and brown Odsy-1000 low-top
							sneakers.
						</p>
						<ul className='mb-5'>
							<li className='mb-1'>
								{' '}
								<b className='font-medium w-36 inline-block'>Model#:</b>
								<span className='text-gray-500'>Odsy-1000</span>
							</li>
							<li className='mb-1'>
								{' '}
								<b className='font-medium w-36 inline-block'>Color:</b>
								<span className='text-gray-500'>Brown</span>
							</li>
							<li className='mb-1'>
								{' '}
								<b className='font-medium w-36 inline-block'>Delivery:</b>
								<span className='text-gray-500'>Russia, USA &amp; Europe</span>
							</li>
							<li className='mb-1'>
								{' '}
								<b className='font-medium w-36 inline-block'>Color:</b>
								<span className='text-gray-500'>Brown</span>
							</li>
						</ul>
						<div className='flex flex-wrap mb-4'>
							{/* select-custom */}
							<div className='relative w-1/3 lg:w-1/4 mr-2 mb-4'>
								<select className='block appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 pr-5 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full'>
									<option>Select size</option>
									<option>Extra large</option>
									<option>Medium size</option>
									<option>Normal size</option>
								</select>
								<i className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500'>
									<svg
										width={24}
										height={24}
										className='fill-current h-5 w-5'
										viewBox='0 0 24 24'
									>
										<path d='M7 10l5 5 5-5H7z' />
									</svg>
								</i>
							</div>
							{/* select-custom .//end  */}
							{/* select-custom */}
							<div className='relative w-1/3 lg:w-1/4 mr-2 mb-4'>
								<select className='block appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 pr-5 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full'>
									<option>Select color</option>
									<option>Lightblue</option>
									<option>Green</option>
									<option>Black</option>
								</select>
								<i className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500'>
									<svg
										width={24}
										height={24}
										className='fill-current h-5 w-5'
										viewBox='0 0 24 24'
									>
										<path d='M7 10l5 5 5-5H7z' />
									</svg>
								</i>
							</div>
							{/* select-custom .//end  */}
						</div>
						{/* action buttons */}
						<div className='flex flex-wrap gap-2'>
							<Link
								className='px-4 py-2 inline-block text-white bg-yellow-500 border border-transparent rounded-md hover:bg-yellow-600'
								to='#'
							>
								Buy now
							</Link>
							<Link
								className='px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700'
								to='#'
							>
								<i className='fa fa-shopping-cart mr-2' />
								Add to cart
							</Link>
							<Link
								className='px-4 py-2 inline-block text-blue-600 border border-gray-300 rounded-md hover:bg-gray-100'
								to='#'
							>
								<i className='fa fa-heart mr-2' />
								Save for later
							</Link>
						</div>
						{/* action buttons .//end */}
					</main>
				</div>{' '}
				{/* grid ./ */}
			</div>{' '}
			{/* container ./ */}
		</section>
	);
};

export default ProductDetailCard;
