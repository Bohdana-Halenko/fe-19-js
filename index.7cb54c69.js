!function(){"use strict";var e=document.querySelector(".header__dropdown"),t=document.getElementById("dropdownContent");function o(e){e.stopPropagation(),t.classList.toggle("header__show")}document.getElementById("dropBtn").addEventListener("click",o),e.addEventListener("click",o),document.addEventListener("click",(function(o){!t.classList.contains("header__show")||t.contains(o.target)||e.contains(o.target)||t.classList.remove("header__show")})),document.querySelectorAll(".header__dropdown-content-item").forEach((function(e){e.addEventListener("click",(function(){t.classList.toggle("header__show")}))}));var n=document.querySelectorAll(".container"),d=document.getElementById("headerCheckbox"),c=document.getElementById("footer"),a=document.getElementById("header"),r=document.getElementById("body");d.addEventListener("click",(function(){n.forEach((function(e){"rgb(255, 255, 255)"===window.getComputedStyle(e).backgroundColor?(e.style.backgroundColor="#2e4545",c.style.backgroundColor="#2e4545",a.style.backgroundColor="#2e4545",r.style.backgroundColor="#2f2c2c"):(e.style.backgroundColor="#fff",c.style.backgroundColor="#fff",a.style.backgroundColor="#fff",r.style.backgroundColor="#f0ecec")}))})),function(){var e={openModalBtn:document.querySelector("[header__data-modal-open]"),closeModalBtn:document.querySelector("[header__data-modal-close]"),modal:document.querySelector("[header__data-modal]")};function t(){e.modal.classList.toggle("header__is-hidden"),document.body.classList.toggle("header__no-scroll")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}();var l=document.getElementById("saveNameBtn"),s=document.getElementById("inputName"),u=document.getElementById("headerOpenModal");l.addEventListener("click",(function(e){e.preventDefault();var t=s.value.trim();t?u.textContent="Welcome, ".concat(t,"!"):alert("Будь ласка, введіть ім'я!"),s.value="",document.querySelector("[header__data-modal]").classList.add("header__is-hidden"),document.body.classList.remove("header__no-scroll")}))}();
//# sourceMappingURL=index.7cb54c69.js.map