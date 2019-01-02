;(function(){
    function modal(value){}

    let portfolio = document.getElementById('portfolio-gallery');
    let portfolioModal = document.getElementById('portfolio-modal');
    let albumsPatch = 'img/';

    function open(name){
        hiddenPortfolio();

        let albumName = document.getElementById('albumName');
        albumName.textContent = getAlbumName(name);

        console.log('open: ', name);
    }

    function getAlbumName (name){
        return name.parentNode.parentNode.getElementsByTagName('p')[0].textContent;

        // let xhr = new XMLHttpRequest();

        // xhr.open('GET', albumsPatch + name + '/album_name.txt', false);
        // xhr.send();
        // if (xhr.status != 200) {
        //     alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
        // } else {
        //     return (xhr.responseText);
        // }
    }

    function hiddenPortfolio (){
        portfolio.classList.add('hidden');
        portfolioModal.classList.remove('hidden');
        portfolioModal.classList.add('visible');
    };

    function closeModal (){
        portfolioModal.classList.remove('visible');
        portfolioModal.classList.add('hidden');
        portfolio.classList.remove('hidden');
    };

    //export
    modal.open = open;
    modal.close = closeModal;
    window.Modal = modal;
}());

document.onkeydown = function (e) {
    switch(e.keyCode) {
        case 27: console.log('ESC'); 
            Modal.close();
            break;
        case 39: console.log('right'); break;
        case 37: console.log('left'); break;
    }
    console.log(e.keyCode);
}