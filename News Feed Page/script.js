const postBtn = document.querySelector('.post-btn');
const modalWrapper = document.querySelector('.modal-wrapper');
const modal = document.querySelector('.modal');
const postModalX = document.querySelector('.modal-header i');
const modalInput = document.querySelector('.modal-input');
const modalPostBtn = document.querySelector('.modal-header button');
const modalFooterPlus = document.querySelector('.modal-footer span');



// News Feed Page



// Post modal
postBtn.addEventListener('click', () => {
    modal.style.display  = 'block';
    modalWrapper.classList.add('modal-wrapper-display');
})

const changeOpacity = (x) => {
    modalPostBtn.style.opacity = x;
    modalFooterPlus.style.opacity = x;
}

postModalX.addEventListener('click', () => {
    modal.style.display  = 'none';
    modalWrapper.classList.remove('modal-wrapper-display')

    if(modalInput.value !==""){
        modalInput.value = "";
        changeOpacity(0.5);
    }
})

modalInput.addEventListener('keypress', (e) => {
    if(e.target.value !== ''){
        changeOpacity(1);
    }
})

modalInput.addEventListener('blur', (e) => {
    if(e.target.value === ''){
        changeOpacity(0.5);
    }
})