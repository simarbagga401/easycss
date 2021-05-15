import './styles/some.scss';
import './styles/app.scss';
import './styles/style.scss';

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;

import axios from 'axios';
import { styleRequestData, styleRequestData2 } from './data';

const btn = document.querySelector('.btn');
btn.addEventListener('click', async () => {
  try {
    const req = await axios.post('http://localhost:2000/styleRequest', {
      styleRequestData,
    });
    console.log(req.data);
  } catch (error) {
    console.error(error);
  }
});

const btn2 = document.querySelector('.btn2');
btn2.addEventListener('click', async () => {
  try {
    const req = await axios.post('http://localhost:2000/styleRequest', {
      styleRequestData: styleRequestData2,
    });
    console.log(req.data);
  } catch (error) {
    console.error(error);
  }
});
