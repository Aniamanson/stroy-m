;(function(){
    function exportPortfolio(){}

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
        activeImg = 0;
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

var modal = getElementById('myModal');
var close = getElementsByClassName('close-modal')[0];
var btn = getElementById('myBtn');

btn.onclick = function (event) {
    modal.style.display = "block";
    event.preventDefault();
    console.log('jryj');
}

close.onclick = function (event) {
    modal.style.display = "none";
    event.preventDefault();
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    } 
    event.preventDefault();
}