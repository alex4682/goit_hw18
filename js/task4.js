let counterValue = 0;

const valueElement = document.querySelector('#value');

const increment = () => {
    counterValue += 1;
    valueElement.textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;
    valueElement.textContent = counterValue;
};

const incrementButton = document.querySelector('button[data-action="increment"]');
const decrementButton = document.querySelector('button[data-action="decrement"]');

incrementButton.addEventListener('click', increment);
decrementButton.addEventListener('click', decrement);
