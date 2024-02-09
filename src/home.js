
const renderHome = (content) => {
  const welcome = document.createElement('h2');
  welcome.textContent = 'Welcome to Pie Hard Pizza!!!!';
  const home = document.createElement('div');
  home.classList.add('home');
  const welcomeText = document.createElement('p');
  welcomeText.innerHTML = '- Hello and welcome to Pie Hard Pizza, where we sell all kinds of Pizzas.'
  const menuText = document.createElement('p');
  menuText.innerHTML = '- If you want to order, check out our menu right now.'
  const contactText = document.createElement('p');
  contactText.innerHTML = '- If you want to get in touch with us, check out our contact page for information on how to do so.'
  home.appendChild(welcomeText);
  home.appendChild(menuText);
  home.appendChild(contactText);
  content.appendChild(welcome);
  content.appendChild(home);
};

export { renderHome };
