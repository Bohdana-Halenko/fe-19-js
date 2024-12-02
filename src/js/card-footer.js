const footerInput = document.getElementById('footerInput');
const footerBtn = document.getElementById('footerInputCheck');

// modal
(() => { 
    const refs = { 
      openModalBtn: document.querySelector("[footer__data-modal-open]"), 
      closeModalBtn: document.querySelector("[footer__data-modal-close]"), 
      modal: document.querySelector("[footer__data-modal]"), 
    }; 
   
    refs.openModalBtn.addEventListener("click", toggleModal); 
    refs.closeModalBtn.addEventListener("click", toggleModal); 
   
    function toggleModal() { 
      refs.modal.classList.toggle("footer__is-hidden"); 
      document.body.classList.toggle("footer__no-scroll"); 
    } 
  })();