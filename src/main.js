import App from './app';

const app = async () => {
  document.getElementById('app').appendChild(await App());
};
// Load app
app();
