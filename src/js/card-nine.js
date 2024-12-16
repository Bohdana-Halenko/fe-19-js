document.addEventListener('DOMContentLoaded', () => { 
    const cards = document.querySelectorAll('.gallery__card'); 
    const leftButton = document.querySelector('.carousel__btn-left'); 
    const rightButton = document.querySelector('.carousel__btn-right'); 
 
    let currentIndex = 0; 
 
    function updateCard(index) { 
        cards.forEach((card, i) => { 
            card.classList.toggle('active', i === index); 
        }); 
    } 
 
    leftButton.addEventListener('click', () => { 
        currentIndex = (currentIndex - 1 + cards.length) % cards.length; 
        updateCard(currentIndex); 
    }); 
 
    rightButton.addEventListener('click', () => { 
        currentIndex = (currentIndex + 1) % cards.length; 
        updateCard(currentIndex); 
    }); 
    updateCard(currentIndex); 
});