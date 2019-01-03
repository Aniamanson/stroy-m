;(function(){
    function modal(value){}

    let portfolio = document.getElementById('portfolio-gallery');
    let portfolioModal = document.getElementById('portfolio-modal');
    let sliderView = document.getElementsByClassName('slides');
    let sliderThumbs = document.getElementsByClassName('slider-img');
    let albumsPath = 'img/';
    let activeImg = 0;

    function open(name, folder){
        hiddenPortfolio();

        let albumName = document.getElementById('albumName');
        albumName.textContent = getAlbumName(name);

        //загружаем список изображений слайдера
        let path = albumsPath + folder + '/';
        sliderView[0].style.backgroundImage = 'url('+ path + '0' + '.jpg)';
        
        //превьюшки к сладеру
        for (let i = 0; i < 6; i++ ){
            sliderThumbs[i].style.backgroundImage = 'url('+ path + i + '.jpg)';
        }
        // console.log(name, folder);
    }

    function closeModal (){
        portfolioModal.classList.remove('visible');
        portfolioModal.classList.add('hidden');
        portfolio.classList.remove('hidden');
    };

    function checkImg (path){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', path, false);
        xhr.send();
        return (xhr.status != 200);
    }
    function getAlbumName (name){
        return name.parentNode.parentNode.getElementsByTagName('p')[0].textContent;

    }
    
    function hiddenPortfolio (){
        portfolio.classList.add('hidden');
        portfolioModal.classList.remove('hidden');
        portfolioModal.classList.add('visible');
    };
    
    // let xhr = new XMLHttpRequest();
    // xhr.open('GET', albumsPatch + name + '/album_name.txt', false);
    // xhr.send();
    // if (xhr.status != 200) {
    //     alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
    // } else {
    //     return (xhr.responseText);
    // }

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
    // console.log(e.keyCode);
}

$(function () {
    $(".tel").mask("+7(000) 000-00-00");
  });

