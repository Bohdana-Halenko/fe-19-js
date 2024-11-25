const dropdownContent = document.getElementById('dropdownContent');
const dropBtn = document.getElementById('dropBtn');

function dropdownInteraction() {
    dropdownContent.classList.toggle('show');
};

dropBtn.addEventListener('clikck', dropdownInteraction())