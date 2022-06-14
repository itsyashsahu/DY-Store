// Routing
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import ProductDetail from './pages/ProductDetail';

// Css
import './App.css';
import './components/Utils/fonts/css/all.min.css';

const App = () => {
	return (
		<Routes>
			<Route exact path='/' element={<Home />} />
			<Route exact path='/signin' element={<SignIn />} />
			<Route exact path='/productdetail' element={<ProductDetail />} />
		</Routes>
	);
};

export default App;
