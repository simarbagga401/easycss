import { ColorRequest } from './interfaces/interfaces';

export const socket = io.connect('http://localhost:3001');
const btn = document.querySelector('.btn');
const div = document.querySelector('#someDiv');

socket.on('serverConnected', (res) => {
  console.log(res);
});

btn.addEventListener('click', () => {
  let color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  console.log(color);
  let data: ColorRequest = {
    elementSelector: '.btn',
    type: 'background',
    value: color,
  };
  socket.emit('changeColor', data);
});

div.addEventListener('click', () => {
  let color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  let data: ColorRequest = {
    elementSelector: '#someDiv',
    type: 'text',
    value: color,
  };
  socket.emit('changeColor', data);
});

div.addEventListener('dblclick', () => {
  let color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  let data: ColorRequest = {
    elementSelector: '#someDiv',
    type: 'border',
    value: color,
  };
  socket.emit('changeColor', data);
});
