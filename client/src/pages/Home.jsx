// Utils
import Header from '../components/Utils/Header';
import Navbar from '../components/Utils/Navbar';

// Components
import Banner from '../components/Homepage/Banner';
import ProductContainer from '../components/Homepage/ProductContainer';
import InfoBlock from '../components/Homepage/InfoBlock';
import HomePageFooter from '../components/Homepage/HomePageFooter';

const Home = () => {
	return (
		<>
			<Header />
			<Navbar />
			<Banner />
			<ProductContainer />
			<InfoBlock />
			<HomePageFooter />
		</>
	);
};

export default Home;
