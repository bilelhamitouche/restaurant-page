
const renderMenu = (content) => {
  const container = document.createElement('h2');
  container.textContent = 'Menu';
  const menu = document.createElement('div');
  menu.classList.add('menu');
  const menuList = document.createElement('ul');
  menuList.classList.add('menu-list');
  const normalPizza = document.createElement('li');
  normalPizza.innerHTML = '<strong>Normal: </strong> Sauce, Cheese, Olives, Mayonnaise';
  const cheesePizza = document.createElement('li');
  cheesePizza.innerHTML = '<strong>Cheese: </strong> Sauce, Double Cheese, Olives, Mayonnaise';
  const chickenPizza = document.createElement('li');
  chickenPizza.innerHTML = '<strong>Chicken: </strong> Sauce, Cheese, Chicken, Olives, Mayonnaise';
  const peperroniPizza = document.createElement('li');
  peperroniPizza.innerHTML = '<strong>Pepperoni: </strong> Sauce, Cheese, Pepperoni, Olives, Mayonnaise';
  const vegetarianPizza = document.createElement('li');
  vegetarianPizza.innerHTML = '<strong>Vegetarian: </strong> Sauce, Cheese, Tomatos, Pepper, Olives, Mayonnaise';
  const menuPriceList = document.createElement('ul');
  menuPriceList.classList.add('menu-price-list');
  const normalPizzaPrice = document.createElement('li');
  normalPizzaPrice.innerHTML = '<strong>5$</strong>';
  const cheesePizzaPrice = document.createElement('li');
  cheesePizzaPrice.innerHTML = '<strong>8$</strong>';
  const chickenPizzaPrice = document.createElement('li');
  chickenPizzaPrice.innerHTML = '<strong>10$</strong>';
  const peperroniPizzaPrice = document.createElement('li');
  peperroniPizzaPrice.innerHTML = '<strong>12$</strong>';
  const vegetarianPizzaPrice = document.createElement('li');
  vegetarianPizzaPrice.innerHTML = '<strong>12$</strong>';
  menuList.appendChild(normalPizza);
  menuList.appendChild(cheesePizza);
  menuList.appendChild(chickenPizza);
  menuList.appendChild(peperroniPizza);
  menuList.appendChild(vegetarianPizza);
  menuPriceList.appendChild(normalPizzaPrice);
  menuPriceList.appendChild(cheesePizzaPrice);
  menuPriceList.appendChild(chickenPizzaPrice);
  menuPriceList.appendChild(peperroniPizzaPrice);
  menuPriceList.appendChild(vegetarianPizzaPrice);
  content.appendChild(container);
  menu.appendChild(menuList);
  menu.appendChild(menuPriceList);
  content.appendChild(menu);
};

export { renderMenu };
