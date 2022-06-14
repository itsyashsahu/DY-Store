// Routing
import { Link } from 'react-router-dom';

const Breadcrumbs = () => {
	return (
		<section className='bg-blue-100 py-4'>
			<div className='container max-w-screen-xl mx-auto px-4'>
				{/* breadcrumbs start */}
				<ol className='inline-flex flex-wrap text-gray-600 space-x-1 md:space-x-3 items-center'>
					<li className='inline-flex items-center'>
						<Link className='text-gray-600 hover:text-blue-600' to='#'>
							Home
						</Link>
						<i className='ml-3 text-gray-400 fa fa-chevron-right' />
					</li>
					<li className='inline-flex items-center' aria-current='page'>
						<Link className='text-gray-600 hover:text-blue-600' to='#'>
							{' '}
							Clothes{' '}
						</Link>
						<i className='ml-3 text-gray-400  fa fa-chevron-right' />
					</li>
					<li className='inline-flex items-center' aria-current='page'>
						<Link className='text-gray-600 hover:text-blue-600' to='#'>
							{' '}
							Men's wear{' '}
						</Link>
						<i className='ml-3 text-gray-400  fa fa-chevron-right' />
					</li>
					<li className='inline-flex items-center'> Detail </li>
				</ol>
				{/* breadcrumbs end */}
			</div>{' '}
			{/* container ./ */}
		</section>
	);
};

export default Breadcrumbs;
