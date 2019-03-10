let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let modalNoButton = document.querySelector('.modal__action--negative');
let toggleButton = document.querySelector('.toggle-button');
let selectPlanButtons = document.querySelectorAll('.plan button');
let mobileNav = document.querySelector('.mobile-nav');
let ctaButton = document.querySelector(".main-nav__item--cta");


for (let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        //modal.style.display = 'block';
        //backdrop.style.display = 'block';
        modal.classList.add("open");
        backdrop.classList.add("open");
    });
}

backdrop.addEventListener('click', function() {
    mobileNav.style.display = 'none';
    closeModal();
});

if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}

function closeModal() {
    if (modal) {
       // modal.style.display = 'none';
        modal.classList.remove("open");
    }
     //backdrop.style.display = 'none';
    backdrop.classList.remove("open");
}
toggleButton.addEventListener('click', function() {
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
});

ctaButton.addEventListener('animationstart', function(event) {
    console.log('animation started', event);
});

ctaButton.addEventListener('animationend', function(event) {
    console.log('animation ended', event);
});

ctaButton.addEventListener('animationiteration', function(event) {
    console.log('animation iteration', event);
});
