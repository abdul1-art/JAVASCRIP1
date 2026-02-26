let alamat = document.getElementById('adrees')
console.log(alamat.textContent);

// mengambil elemen dengan class
let text = document.querySelector('.support')
console.log(text.textContent);

// mengambil elemen dengan lebih dari 1class
let view = document.getElementsByClassName('card')
console.log(view);



// 
console.log(window.innerWidth);
console.log(window.screenY);

// addevenetlistener
let btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    alert('Button di click');
    console.log('button ini sedang di click');
})
