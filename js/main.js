
const containerDom = document.getElementById('container');

for ( let i = 1; i <= 100; i++) {
    console.log(i);

    if (i % 5 == 0 && i % 3 == 0) {
        containerDom.innerHTML += `<div class="box fizzBuzz">fizzbuzz</div>`;
    } else if (i % 3 == 0) {
        containerDom.innerHTML += `<div class="box fizz">fizz</div>`;
    } else if (i % 5 == 0) {
        containerDom.innerHTML += `<div class="box buzz">buzz</div>`;
    } else {
        containerDom.innerHTML += `<div class="box">${i}</div>`;
    }
}