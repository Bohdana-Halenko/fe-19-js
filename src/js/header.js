'use strict'
const dropdown = document.querySelector('.header__dropdown');
const dropdownContent = document.getElementById('dropdownContent');
const dropBtn = document.getElementById('dropBtn');

function dropdownInteraction(e) {
    dropdownContent.classList.toggle('header__show');
};

dropBtn.addEventListener('click', dropdownInteraction());
dropdown.addEventListener('click', dropdownInteraction());
document.addEventListener('click', function(event){
    if(
        dropdownContent.classList.contains('header__show') && !dropdownContent.contains(event.target) && !dropdown.contains(event.target)
    ){
        dropdownContent.classList.remove('header__show')
    }
});

const menuItems = document.querySelectorAll('.header__dropdown-content-item');
menuItems.forEach(item => {
    item.addEventListener('click', () => {dropdownContent.classList.remove('header__show')});
});

// Зміна теми
// const bgContainer = document.querySelectorAll('.container');
// const themeSwitcher = document.getElementById('headerCheckbox');

// themeSwitcher.addEventListener('click', () => {
//     bgContainer.forEach((bgContainer) => {
//         if(bgContainer.style.backgroundColor = '#fff'){
//             bgContainer.style.backgroundColor = '#003161'; 
//         } else{
//             bgContainer.style.backgroundColor = '#fff';
//             console.log(bgContainer.style.backgroundColor);
//         }
//       });
// });

// modal
(() => { 
    const refs = { 
      openModalBtn: document.querySelector("[header__data-modal-open]"), 
      closeModalBtn: document.querySelector("[header__data-modal-close]"), 
      modal: document.querySelector("[header__data-modal]"), 
    }; 
   
    refs.openModalBtn.addEventListener("click", toggleModal); 
    refs.closeModalBtn.addEventListener("click", toggleModal); 
   
    function toggleModal() { 
      refs.modal.classList.toggle("header__is-hidden"); 
      document.body.classList.toggle("header__no-scroll"); 
    } 
  })();


// changeName
const saveNameBtn = document.getElementById('saveNameBtn');
const inputName = document.getElementById('inputName');
const setName = document.getElementById('headerOpenModal');

const changeName = (e) => {
    e.preventDefault();
    const newName = inputName.value.trim();
    if(newName){
        setName.textContent = `Welcome, ${newName}!`;
    } else{
        alert("Будь ласка, введіть ім'я!");
    }
    inputName.value = '';
    document.querySelector('[header__data-modal]').classList.add('header__is-hidden');
    document.body.classList.remove('header__no-scroll');
};
saveNameBtn.addEventListener('click', changeName);