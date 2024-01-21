var eltitle = document.querySelector('.title')
var num = prompt('Write number...')

if(num % 3 > 0){
    eltitle.innerHTML = "3 ga bo'linmaydi"
}else{
    eltitle.innerHTML = "3 ga bo'linadi"
}