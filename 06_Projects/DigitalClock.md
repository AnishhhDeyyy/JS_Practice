#Project 3

``` JAVASCRIPT
const clock = document.querySelector('#clock');
//console.log(date.toLocaleTimeString());

setInterval(function(){
  const date = new Date()
  clock.innerHTML = date.toLocaleTimeString()
},1000)

```