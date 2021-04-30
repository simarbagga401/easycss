import { socket } from './socket';
import { BoxModelRequest } from './interfaces';

let border_div_thickness = document.querySelector('.border_div_thickness');
let border_div_radius = document.querySelector('.border_div_radius');

let thickness_counter = 1;
let radius_counter = 1;

border_div_thickness.addEventListener('onclick', () => {
  thickness_counter++;
  border_div_thickness.innerHTML = `${thickness_counter}`;

  let thickness_data: BoxModelRequest = {
    elementSelector: '.border_div',
    type: 'border',
    value: thickness_counter,
  };
  socket.emit('changeSize', thickness_data);
});

border_div_radius.addEventListener('onclick', () => {
  radius_counter++;
  border_div_radius.innerHTML = `${radius_counter}`;

  let radius_data: BoxModelRequest = {
    elementSelector: '.border_div',
    type: 'border-radius',
    value: thickness_counter,
  };
  socket.emit('changeSize', radius_data);
});
