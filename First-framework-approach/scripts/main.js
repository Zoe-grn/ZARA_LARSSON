//emelyne 18/02
const modal = document.querySelector('#myPopup');
const closeButtons = document.querySelectorAll('.close-modal-trigger');
const btnYes = document.querySelector('#btnYes');
const extraContent = document.querySelector('#extra-content');

window.addEventListener('load', () => {
  modal.showModal(); 
});

// Fermeture
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    modal.close();
  });
});

btnYes.addEventListener('click', () => {
  extraContent.style.display = 'block';
  
  
});

//emelyne 07/03
//bouton yes

const boutonYes = document.querySelector('.button-yes');

boutonYes.addEventListener('click', function() {

  this.classList.toggle('is-clicked');
  
});

//bouton submit
const boutonSubmit = document.querySelector('.button-submit');

boutonSubmit.addEventListener('click', function() {

  this.classList.toggle('is-clicked');
  
});