;(function(){
    function modal(value){}

    let portfolio = document.getElementById('portfolio-gallery');
    let portfolioModal = document.getElementById('portfolio-modal');
    let sliderView = document.getElementsByClassName('slides');
    let sliderThumbs = document.getElementsByClassName('slider-img');
    let activeFolder = 'nl';
    let activeImg = 0;

    function open(name, folder){
        hiddenPortfolio();
        activeFolder = folder;

        let albumName = document.getElementById('albumName');
        albumName.textContent = getAlbumName(name);

        //загружаем список изображений слайдера
        sliderView[0].style.backgroundImage = 'url(img/'+ activeFolder + '/0.jpg)';
        
        //превьюшки к сладеру
        for (let i = 0; i < 6; i++ ){
            sliderThumbs[i].style.backgroundImage = 'url(img/' + activeFolder + '/' + i +'.jpg)';
            sliderThumbs[i].setAttribute('id', i);
            sliderThumbs[i].addEventListener('click', handler);

        }
    }

    function nextImg() {
        (activeImg >= 5) ? activeImg = 0 : activeImg++;
        sliderView[0].style.backgroundImage = 'url(img/'+ activeFolder + '/'+ activeImg +'.jpg)';
    }

    function prevImg() {
        (activeImg <= 0) ? activeImg = 5 : activeImg--;
        sliderView[0].style.backgroundImage = 'url(img/'+ activeFolder + '/'+ activeImg +'.jpg)';
    }

    function handler(e){
        activeImg = e.srcElement.id;
        sliderView[0].style.backgroundImage = e.srcElement.style.backgroundImage;
        // TODO: доделать смену класса для активного изображения
        e.srcElement.classList.add('img-active');
    }


    function closeModal (){
        portfolioModal.classList.remove('visible');
        portfolioModal.classList.add('hidden');
        portfolio.classList.remove('hidden');
        activeImg = 0;
    };

    function getAlbumName (name){
        return name.parentNode.parentNode.getElementsByTagName('p')[0].textContent;

    }
    
    function hiddenPortfolio (){
        portfolio.classList.add('hidden');
        portfolioModal.classList.remove('hidden');
        portfolioModal.classList.add('visible');
    };

    //export
    modal.open = open;
    modal.close = closeModal;
    modal.nextImg = nextImg;
    modal.prevImg = prevImg;
    window.Modal = modal;
}());

document.onkeydown = function (e) {
    switch(e.keyCode) {
        case 27: console.log('ESC'); 
            Modal.close();
            break;
        case 39: console.log('right'); 
            Modal.nextImg();
            break;
        case 37: console.log('left'); 
            Modal.prevImg();
            break;
    }
    // console.log(e.keyCode);
}


