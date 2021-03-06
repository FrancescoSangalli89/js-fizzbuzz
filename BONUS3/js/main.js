
const btnDom = document.getElementById('btn');

const containerDom = document.getElementById('container');

const inputWrapperDom = document.querySelector('.inputWrapper');

const boxesDom = document.getElementById('boxes')

btnDom.addEventListener('click',

    function() {
        let squareNumberDom = parseInt(document.getElementById('squareNumber').value);

        for ( let i = 1; i <= squareNumberDom; i++) {
            console.log(i);

            const box = document.createElement('div');

            if (i % 5 == 0 && i % 3 == 0) {
                box.append('fizzbuzz');
                box.classList = "box fizzBuzz";
                boxesDom.append(box);
            } else if (i % 3 == 0) {
                box.append('fizz');
                box.classList = "box fizz";
                boxesDom.append(box);
            } else if (i % 5 == 0) {
                box.append('buzz');
                box.classList = "box buzz";
                boxesDom.append(box);
            } else {
                box.append(i);
                box.classList = "box";
                boxesDom.append(box);
            }
        }

        inputWrapperDom.classList.add('hidden');
        containerDom.classList.add('show');
        containerDom.classList.remove('hidden');
        squareNumber.value = '';
    }
)

const cancelDom = document.getElementById('cancel');

cancelDom.addEventListener('click', 
    function() {
        inputWrapperDom.classList.remove('hidden');
        containerDom.classList.remove('show');
        containerDom.classList.add('hidden');  
        boxesDom.innerHTML = '';
    }
)