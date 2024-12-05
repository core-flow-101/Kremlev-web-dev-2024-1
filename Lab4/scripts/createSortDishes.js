let dishes = [
    new Dish("gazpacho", "Гаспачо", 195, "soup", "350 г",
        "static/soups/gazpacho.jpg"),
    new Dish("mushroom_soup", "Грибной суп", 185, "soup", "330 г",
        "static/soups/mushroom_soup.jpg"),
    new Dish("norwegian_soup", "Норвежский суп", 270, "soup", "330 г",
        "static/soups/norwegian_soup.jpg"),

    new Dish("friedpotatoeswithmushrooms", "Жареная картошка с грибами",
        150, "main-course", "250 г",
        "static/main/fried_potato.jpg"),
    new Dish("lasagna", "Лазанья", 385, "main-course", "310 г",
        "static/main/lasagna.jpg"),
    new Dish("chickencutletsandmashedpotatoes",
        "Котлеты из курицы с картофельным пюре", 225, "main-course", "280 г",
        "static/main/chiken_potato.jpg"),

    new Dish("orangejuice", "Апельсиновый сок", 120, "beverage", "300 мл",
        "static/drinks/orangejuice.jpg"),
    new Dish("applejuice", "Яблочный сок", 90, "beverage", "300 мл",
        "static/drinks/applejuice.jpg"),
    new Dish("carrotjuice", "Морковный сок", 110, "beverage", "300 мл",
        "static/drinks/carrotjuice.jpg")
];

dishes.sort((first, second) => {
    if (first.category === second.category) {
        return first.name.localeCompare(second.name);
    }
});