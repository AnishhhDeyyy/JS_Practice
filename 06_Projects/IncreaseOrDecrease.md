``` Javascript

const plus = document.querySelector('#plsBtn')
const h = document.querySelector('#headd')
plus.addEventListener('click',function(e){
    let text = parseInt(h.innerHTML)
    text = text + 1
    h.innerHTML = text
    minus.removeAttribute('disabled')
    if(text==10){
        plus.setAttribute('disabled','')
    }

})
const minus = document.querySelector('#minusBtn')
minus.addEventListener('click',function(e){
    plus.removeAttribute('disabled')
    let text = parseInt(h.innerHTML)
    text = text - 1
    h.innerHTML = text
    if(text == 0){
        minus.setAttribute('disabled','')
    }
})



```