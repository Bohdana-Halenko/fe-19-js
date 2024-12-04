const footerInput = document.getElementById('footerInput');
const footerBtn = document.getElementById('footerInputCheck');
const footerModalWlcm = document.getElementById('footerWelcome');

const checkMail = () => {
  const footerInputValue = footerInput.value;
  if(footerInputValue.includes('@' && '.')){
    footerModalWlcm.textContent = `Користувач ${footerInputValue},дякуємо за підписку!`;
  } else if(footerInputValue === ''){
    footerModalWlcm.textContent = `Поле для пошти не може бути пустим!`;
  } else {
    footerModalWlcm.textContent = `${footerInputValue} не є коректною поштою!`;
  }
};
footerBtn.addEventListener('click', checkMail);

// modal
(() => { 
    const refsFooter = { 
      openModalBtnFooter: document.querySelector("[footer__data-modal-open]"), 
      closeModalBtnFooter: document.querySelector("[footer__data-modal-close]"), 
      modalFooter: document.querySelector("[footer__data-modal]"), 
    }; 
   
    refsFooter.openModalBtnFooter.addEventListener("click", toggleModalFooter); 
    refsFooter.closeModalBtnFooter.addEventListener("click", toggleModalFooter); 
   
    function toggleModalFooter(e) { 
      e.preventDefault();
      e.stopPropagation();
      refsFooter.modalFooter.classList.toggle("footer__is-hidden"); 
      document.body.classList.toggle("footer__no-scroll"); 
    } 
})();