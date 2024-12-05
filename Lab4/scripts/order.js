let currentDishPriceSum = 0;

const selectedDishes = {
    soup: null,
    mainCourse: null,
    beverage: null
};

const dishMapper = {
    'soup': 'soup',
    'main-course': 'mainCourse',
    'beverage': 'beverage'
};


function addDish(event) {
    event.preventDefault();

    const dishCard = event.currentTarget.closest('.item');
    const dishCategory = dishCard.getAttribute('dish-category');
    const dishData = dishCard.getAttribute('dish-data');


    selectedDishes[dishMapper[dishCategory]] = dishData;

    document.querySelector(`.selected-${dishCategory}`).setAttribute('value', dishData);


    document.querySelectorAll(`.item[dish-category="${dishCategory}"]`)
        .forEach(card => card.classList.remove('selected'));


    dishCard.classList.add('selected');


    updateSelectedDishes();
}


function updateSelectedDishes() {
    if (areDishesEmpty()) {
        toggleDishListVisibility(false);
        return;
    }

    toggleDishListVisibility(true);

    currentDishPriceSum = 0;
    Object.values(selectedDishes).forEach(value => {
        if (!value) return;

        const dish = dishes.find(d => d.keyword === value);
        if (!dish) return;

        const categoryElement = document.querySelector(`.chosen[category='${dish.category}']`);
        categoryElement.querySelector('p').innerText = `${dish.name} - ${dish.price}`;
        currentDishPriceSum += dish.price;
    });


    document.querySelector('.order-price').innerText = currentDishPriceSum;
    document.querySelector('.order-price-input').setAttribute('value', currentDishPriceSum);
}


function toggleDishListVisibility(show) {
    const chosenElements = document.querySelectorAll('.user-order .hid');
    chosenElements.forEach(element => element.hidden = !show);

    document.querySelector('.nothing').hidden = show;
}


function areDishesEmpty() {
    return Object.values(selectedDishes).every(value => value === null);
}


function clearSelectedDishes() {

    document.querySelectorAll('.sel').forEach(tag => tag.setAttribute('value', ''));


    Object.keys(selectedDishes).forEach(key => {
        selectedDishes[key] = null;
    });


    document.querySelectorAll('.chosen p').forEach(p => p.innerText = 'Не выбрано');

    document.querySelectorAll('.item.selected').forEach(card => card.classList.remove('selected'));


    toggleDishListVisibility(false);
    currentDishPriceSum = 0;
    document.querySelector('.order-price').innerText = currentDishPriceSum;
    document.querySelector('.order-price-input').setAttribute('value', currentDishPriceSum);
}
