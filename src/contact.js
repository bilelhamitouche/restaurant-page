import Facebook from './facebook.png';
import Instagram from './instagram.png';
import Twitter from './twitter.png';

const renderContact = (content) => {
  const contactHeader = document.createElement('h2');
  contactHeader.textContent = 'Contact';
  const contactBody = document.createElement('div');
  contactBody.classList.add('contact');
  const address = document.createElement('p');
  address.innerHTML = '<strong>Address</strong>: 1220 Bab El Ouad, Algiers, Algeria.';
  const tel = document.createElement('p');
  tel.innerHTML = '<strong>Tel</strong>: 0556 23 45 86';
  const email = document.createElement('p');
  email.innerHTML = '<strong>Email</strong>: piehardpizza@gmail.com';
  contactBody.appendChild(address);
  contactBody.appendChild(tel);
  contactBody.appendChild(email);
  const socials = document.createElement('div');
  socials.classList.add('socials');
  const myFacebookIcon = new Image();
  const myInstagramIcon = new Image();
  const myTwitterIcon = new Image();
  myFacebookIcon.src = Facebook;
  myFacebookIcon.classList.add('social-image');
  myInstagramIcon.src = Instagram;
  myInstagramIcon.classList.add('social-image');
  myTwitterIcon.src = Twitter;
  myTwitterIcon.classList.add('social-image');
  socials.appendChild(myFacebookIcon);
  socials.appendChild(myInstagramIcon);
  socials.appendChild(myTwitterIcon);
  content.appendChild(contactHeader);
  content.appendChild(contactBody);
  content.appendChild(socials);
};

export { renderContact };
