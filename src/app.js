import Header from './components/Header';
import './scss/app.scss';

const app = async () => {
	document.getElementById('header').innerHTML = Header();
};

// Load app
app();
