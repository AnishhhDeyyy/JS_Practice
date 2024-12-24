 ``` Javascript
const randomNumber = function () {
  const hex = '0123456789ABCDE';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
console.log(randomNumber());
const start = document.querySelector('#start');
const body = document.querySelector('body');
let t = 0;
start.addEventListener('click', function (e) {
  const s = setInterval(function () {
    body.style.background = randomNumber();
  }, 2000);
  t = s;
});

const stop = document.querySelector('#stop');
stop.addEventListener('click', function (e) {
  clearInterval(t);
  body.style.background = 'black';
});


```