document.addEventListener('DOMContentLoaded', () => {
    loadCards();
    if (isSelectedDishes()) {
        hideSelectedDishes();
    }
});

function loadCards() {
    for (let dish of dishes) {
        console.log(dish);
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.setAttribute('dish-data', dish.keyword);
        itemDiv.setAttribute('dish-category', dish.category);

        const imgElement = document.createElement('img');
        imgElement.src = dish.image;
        imgElement.alt = dish.keyword;

        itemDiv.appendChild(imgElement);

        const mainInfoDiv = document.createElement('div');
        mainInfoDiv.className = 'main-info';

        const priceP = document.createElement('p');
        priceP.innerHTML = dish.price + '&#8381;';

        const nameP = document.createElement('p');
        nameP.textContent = dish.name;

        mainInfoDiv.appendChild(priceP);
        mainInfoDiv.appendChild(nameP);

        itemDiv.appendChild(mainInfoDiv);

        const formElement = document.createElement('form');

        const weightP = document.createElement('p');
        weightP.textContent = dish.mass;

        const buttonElement = document.createElement('button');
        buttonElement.textContent = 'Добавить';
        buttonElement.addEventListener('click', addDish);

        formElement.appendChild(weightP);
        formElement.appendChild(buttonElement);

        itemDiv.appendChild(formElement);

        const section = document.querySelector('main .' + dish.category);
        const content = section.querySelector('.items');
        content.appendChild(itemDiv);
    }
}