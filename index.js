

const openModal = document.querySelector('.open-modal');
const hiddenModal = document.querySelector('.modal-input');
const navbar = document.querySelector('.fa-bars');
const closeModal = document.querySelector('.close-modal')

openModal.addEventListener('click', function(){
    hiddenModal.classList.remove('hidden')
    navbar.classList.remove('fa-bars')
    
})

closeModal.addEventListener('click', function(){
    hiddenModal.classList.add('hidden')
    navbar.classList.add('fa-bars')
})