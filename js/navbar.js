document.addEventListener('DOMContentLoaded', function() {
    const btnMobile = document.querySelector('.btn-mobile');
    const links = document.querySelector('.links');

    btnMobile.addEventListener('click', onClickButton);

    function onClickButton(){
        links.classList.toggle('active');
    }
});