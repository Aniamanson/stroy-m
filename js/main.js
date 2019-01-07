;(function(){
    function exportPortfolio(){}

    let portfolio = document.getElementById('portfolio-gallery');
    let portfolioModal = document.getElementById('portfolio-modal');
    let sliderView = document.getElementsByClassName('slides');
    let sliderThumbs = document.getElementsByClassName('slider-img');
    let albumName = document.getElementById('albumName');
    let activeFolder = 'nl';
    let activeImg = 0;

    function open(name, folder){
        activeImg = 0;
        activeFolder = folder;
        albumName.textContent = getAlbumName(name);
        hiddenPortfolio();
        resetActiveImg();

        //загружаем список изображений слайдера
        sliderView[0].style.backgroundImage = 'url(img/'+ activeFolder + '/0.jpg)';
        
        //превьюшки к слайдеру
        for (let i = 0; i < 6; i++ ){
            sliderThumbs[i].style.backgroundImage = 'url(img/' + activeFolder + '/' + i +'.jpg)';
            sliderThumbs[i].setAttribute('id', i);
            sliderThumbs[i].addEventListener('click', handler);

        }
    }

    function close (){
        portfolioModal.classList.remove('visible');
        portfolioModal.classList.add('hidden');
        portfolio.classList.remove('hidden');
    }

    function nextImg() {
        (activeImg >= 5) ? activeImg = 0 : activeImg++;
        sliderView[0].style.backgroundImage = 'url(img/'+ activeFolder + '/'+ activeImg +'.jpg)';
        resetActiveImg();
    }

    function prevImg() {
        (activeImg <= 0) ? activeImg = 5 : activeImg--;
        sliderView[0].style.backgroundImage = 'url(img/'+ activeFolder + '/'+ activeImg +'.jpg)';
        resetActiveImg();
    }

    function handler(e){
        activeImg = e.srcElement.id;
        sliderView[0].style.backgroundImage = e.srcElement.style.backgroundImage;
        resetActiveImg();
        e.preventDefault(); //отмена перезагрузки страницы при клике
    }

    function resetActiveImg(){
        for (let i = 0; i < 6; i++ ){
            if(i == activeImg) {
                sliderThumbs[i].className = 'slider-img img-active';
            } else {
                sliderThumbs[i].classList.remove('img-active');
            }
        }
    }

    function getAlbumName (name){
        return name.parentNode.parentNode.getElementsByTagName('p')[0].textContent;
    }

    function hiddenPortfolio (){
        portfolio.classList.add('hidden');
        portfolioModal.classList.remove('hidden');
        portfolioModal.classList.add('visible');
    }

    document.onkeydown = function (e) {
        switch(e.keyCode) {
            case 27: 
                //console.log('ESC'); 
                close();
            break;
            case 39: 
                //console.log('right'); 
                nextImg();
            break;
            case 37: 
                //console.log('left'); 
                prevImg();
            break;
        }
    }

    exportPortfolio.open = open;
    exportPortfolio.close = close;
    exportPortfolio.nextImg = nextImg;
    exportPortfolio.prevImg = prevImg;
    window.Portfolio = exportPortfolio;
}());

;(function(){
    function exportModal(){}
    let modal = {};

    function open(name){
        this.modal = document.getElementById(name);
        this.modal.style.display = 'block';
        // console.log(name);
    }

    function close(){
        this.modal.style.display = 'none';
    }

    exportModal.open = open;
    exportModal.close = close;
    window.Modal = exportModal;
}());

;(function(){
    function exportСarousel(){}
    let carouselContainer = document.getElementsByClassName('slides');
    console.log(carouselContainer[0]);

    function next(name){

    }

    function prev(){
    }

    exportСarousel.next = next;
    exportСarousel.prev = prev;
    window.Carousel = exportСarousel;
}());