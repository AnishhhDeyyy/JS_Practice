#Project 1

```JS CODE

const buttons = document.querySelectorAll('.button');
// console.log(buttons)
const body = document.querySelector('body');

buttons.forEach((button) =>
  // console.log(button)
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    switch(e.target.id){
      case "grey":
        body.style.backgroundColor = e.target.id
        break;
      case "yellow":
        body.style.backgroundColor = e.target.id
        break;
      case "blue":
        body.style.backgroundColor = e.target.id
        break;
      case "white":
        body.style.backgroundColor = e.target.id
        break;
      case "Pink":
        body.style.backgroundColor = e.target.id
        break;
      default :
         body.style.backgroundColor = 'black'
         break;
    }

  })
);



```