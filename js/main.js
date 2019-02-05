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
    let carouselContainer = document.getElementsByClassName('carousel');
    let nodes = carouselContainer[0].children;
    let step = 0;

    function start(){
        for (let i = 0; i < nodes.length; i++) {
            (i <= 2  ) ? nodes[i].className = 'visible' : nodes[i].className = 'hidden'
        }
        step = 0;
    }

    function next(){
        step++;
        if (step < nodes.length && step != (nodes.length-2)){
            for (let i = 0; i < nodes.length; i++) {
                (i >= step && i < (step + 3) ) ? nodes[i].className = 'visible' : nodes[i].className = 'hidden'
            }
        } else {
            start();
        }
    }

    function prev(){
        step--;
        if (step < 0) { step = nodes.length - 3; }
        for (let i = 0; i < nodes.length; i++) {
            (i >= step && i < (step + 3) ) ? nodes[i].className = 'visible' : nodes[i].className = 'hidden'
        }
    }

    start();
    exportСarousel.next = next;
    exportСarousel.prev = prev;
    window.Carousel = exportСarousel;
}());



$(document).ready(function(){
	$("nav").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;

		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
    });

    $("#button-up").on("click", function () {
        $('body,html').animate({scrollTop: 0}, 1500);
    });

    $("#scroll").on("click", function () {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });


});

;(function(){
    function exportMap(){};
        let areas = document.getElementsByClassName('areas');

        for (let i = 0; i < areas[0].children.length; i++) {
            const element = areas[0].children[i].getElementsByTagName('p');
            for (let i = 0; i < element.length; i++) {
                const d = element[i];
                d.addEventListener('mouseover', handler);
                d.addEventListener('mouseout', handlerOut);
            }
        }

        function handler(e){
            let id = "pin" + e.srcElement.dataset.area;
            let obj = document.getElementById('map');
            let svgDoc = obj.contentDocument;
            let pin = svgDoc.getElementById(id).getElementsByTagName('path')[0];
            let circle = svgDoc.getElementById(id).getElementsByTagName('circle')[0];

            pin.classList.remove("gray");
            pin.classList.add("yellow");

            circle.classList.remove("yellow");
            circle.classList.add("gray");
        }

        function handlerOut(e){
            let id = "pin" + e.srcElement.dataset.area;
            let obj = document.getElementById('map');
            let svgDoc = obj.contentDocument;
            let pin = svgDoc.getElementById(id).getElementsByTagName('path')[0];
            let circle = svgDoc.getElementById(id).getElementsByTagName('circle')[0];

            pin.classList.remove("yellow");
            pin.classList.add("gray");

            circle.classList.remove("gray");
            circle.classList.add("white");
        }


        // exportMap.select = selectCity;
        // window.Map = exportMap;
})();