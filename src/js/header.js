'use'
const dropdown = document.querySelector('.header__dropdown');
const dropdownContent = document.getElementById('dropdownContent');
// const dropBtn = document.getElementById('dropBtn');

function dropdownInteraction(e) {
    // e.stopPropagation();
    dropdownContent.classList.toggle('header__show');
};

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
const bgContainer = document.querySelectorAll('.container');
const themeSwitcher = document.getElementById('headerCheckbox');

themeSwitcher.addEventListener('click', () => {
    bgContainer.forEach((bgContainer) => {
        if(bgContainer.style.backgroundColor = '#fff'){
            bgContainer.style.backgroundColor = '#003161'; 
        } else{
            bgContainer.style.backgroundColor = '#fff'
            console.log(bgContainer.style.backgroundColor);
        }

      });
});