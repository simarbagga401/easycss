const socket = io.connect('http://localhost:3001');
const btn = document.querySelector('.btn');

socket.on('init', (res) => {
  console.log(res);
});

btn.addEventListener('click', () => {
  socket.emit('styleMyBtn', { task: 'styleMyBtn with nice black color' });
});
