import User from './components/User';
import Header from './components/Header';
import './scss/app.scss';

const app = async () => {
	document.getElementById('header').innerHTML = Header();
	document.getElementById('user').innerHTML = await User();
};

// Load app
app();
