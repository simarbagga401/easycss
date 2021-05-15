import './styles/some.scss';
import './styles/app.scss';

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;

import axios from 'axios';
import { styleRequestData } from './data';

const btn = document.querySelector('.btn');
btn.addEventListener('click', async () => {
  try {
    const req = await axios.post('http://localhost:2000/styleRequest', {
      styleRequestData,
    });
    console.log(req.data);
  } catch (error) {
    if (error.code === 500) {
      console.error('Axios 500 error: Unexpected data recieved', error);
    }
  }
});
