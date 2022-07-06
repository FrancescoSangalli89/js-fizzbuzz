
const containerDom = document.getElementById('container');

for ( let i = 1; i <= 100; i++) {
    console.log(i);

    const box = document.createElement('div');

    if (i % 5 == 0 && i % 3 == 0) {
        box.append('fizzbuzz');
        box.classList = "box fizzBuzz";
        containerDom.append(box);
    } else if (i % 3 == 0) {
        box.append('fizz');
        box.classList = "box fizz";
        containerDom.append(box);
    } else if (i % 5 == 0) {
        box.append('buzz');
        box.classList = "box buzz";
        containerDom.append(box);
    } else {
        box.append(i);
        box.classList = "box";
        containerDom.append(box);
    }
}

