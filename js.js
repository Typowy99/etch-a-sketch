let container = document.querySelector('#container');
let amountInput = document.querySelector('#amountOfSquare');
let btn = document.querySelector('#btn');


// Create X elements div in container.
function createSquares(amount) {
    console.log(amount);
    container.innerHTML = '';
    for (let i = 0; i < amount; i++) {
        let newDiv = document.createElement('div');
        let square = Math.sqrt(amount);
        newDiv.style.width = (100 / square) + '%';
        newDiv.style.height = (100 / square) + '%';
        container.appendChild(newDiv);
    }

    const divElements = container.querySelectorAll('div');

    divElements.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'red';
        });
    });
}


createSquares(16); //Create squares grid.


btn.addEventListener('click', () => {
    const inputValue = parseInt(amountInput.value);
    if (isNaN(inputValue) || inputValue <= 0 || inputValue > 100) {
        console.log('za duzo mordo');
    } else {
        createSquares(parseInt(inputValue));
    }
});
