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

    function open(name, arg){
        this.modal = document.getElementById(name);
        this.modal.style.display = 'block';

        if(arg && typeof(arg)==='object'){
            console.log('arg', arg);
            this.modal.style.zIndex = "999";
            let ul = document.getElementById("message_list_err");
            ul.innerHTML= "";
            for (let i = 0; i < arg.length; i++) {
                const message = arg[i].message;
                let li = document.createElement("li");
                li.appendChild(document.createTextNode(message));
                ul.appendChild(li);
            }
        }
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
    let countLogos;
    let carouselContainer = document.getElementsByClassName('carousel');
    let nodes = carouselContainer[0].children;
    let step = 0;
    let windowSize = function() { return document.documentElement.clientWidth; }
    countLogosWindow(windowSize); //init count logos

    window.addEventListener("resize", function(){
        countLogosWindow(windowSize); //set count logos when resize 
    });

    function countLogosWindow (size){
        if(size() > 1020) countLogos = 4;
        if(size() <= 1020)  countLogos = 3;
        if(size() <= 780) countLogos = 2;
        if(size() <= 520) countLogos = 1;
        start();
    }

    function start(){
        for ( let i = 0; i < nodes.length; i++ ) {
            ( i <= (countLogos-1)  ) ? nodes[i].className = 'visible' : nodes[i].className = 'hidden'
        }
        step = 0;
    }

    function next(){
        step++;
        if (step < nodes.length && step != (nodes.length-(countLogos-1))){
            for (let i = 0; i < nodes.length; i++) {
                (i >= step && i < (step + countLogos) ) ? nodes[i].className = 'visible' : nodes[i].className = 'hidden'
            }
        } else {
            start();
        }
    }

    function prev(){
        step--;
        if (step < 0) { step = nodes.length - countLogos; }
        for (let i = 0; i < nodes.length; i++) {
            (i >= step && i < (step + countLogos) ) ? nodes[i].className = 'visible' : nodes[i].className = 'hidden'
        }
    }

    // start();
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
            let pin = findEl(e).pin;
            let circle = findEl(e).circle;

            pin.classList.remove("gray");
            pin.classList.add("yellow");

            circle.classList.remove("yellow");
            circle.classList.add("gray");
        }

        function handlerOut(e){
            let pin = findEl(e).pin;
            let circle = findEl(e).circle;

            pin.classList.remove("yellow");
            pin.classList.add("gray");

            circle.classList.remove("gray");
            circle.classList.add("white");
        }

        function findEl(e){
            let arr = {
                'pin': '',
                'circle': ''
            };
            let id = "pin" + e.srcElement.dataset.area;
            let obj = document.getElementById('map');
            let svgDoc = obj.contentDocument;
            arr.pin = svgDoc.getElementById(id).getElementsByTagName('path')[0];
            arr.circle = svgDoc.getElementById(id).getElementsByTagName('circle')[0];

            return arr;
        }
})();

;(function(){
    function exportMail(){};
    let fName = {
        "pdn"       :"Согласие на обработку персональных данных",
        "phone"     : "Телефон",
        "name"      : "ФИО",
        "email"     : "E-mail",
        "orgname"   : "Название организации",
        "question"  : "Вопрос",
    }


    function validator(e){
        let err = [];
        //валидируем нажатие согласия на обработку ПДн
        if(!e.elements.namedItem('pdn').checked) {
            err.push({
                formName : "pnd",
                message : "Необходимо ваше согласие на обработку персональных данных"
            });
        }

        //валидируем все остальные поля формы
        for(let i=0; i<e.length; i++){
            if(e.elements[i].type === 'text' || e.elements[i].type === 'textarea'){
                if(e.elements[i].value == ''){
                    err.push({
                        formName : e.elements[i].name,
                        message : 'Необходимо заполнить поле ' + fName[e.elements[i].name]
                    });
                }
            }
        }
        return (err.length === 0) ? true : err;
    }

    //Сообщаем пользователю результ и отправляем сообщение
    function send(e){
        let valid = validator(e);
        let maildata = {};
        // console.log('result:', valid)
        if(typeof(valid) === 'boolean' && valid === true){
            for(let i=0; i<e.length; i++){
                if(e.elements[i].type === 'text' || e.elements[i].type === 'textarea'){
                    maildata[e.elements[i].name] = e.elements[i].value
                }
            }
            // console.log('maildata: ', maildata)
            sender(maildata);
            e.reset(); //сборс полей формы
        } else {
            Modal.close();
            Modal.open('errorModal', valid);
            console.log("ошибка");
        }
        return false;
    }

    function sender(data){
        $.ajax({
          type: "POST",
          url: "send_mail.php",
          data: data,
          success: function(e){ 
        //    console.log('response',e)
            var resp = JSON.parse(e);
            if(!resp.errmsg){
                Modal.close();
                Modal.open('thankyouModal');
                console.log('сообщение отправлено');
            } 
            else {
                Modal.close();
                Modal.open('othererrorModal');
                console.log('что-то пошло не так', resp);
            }
          },
          fail: function(err){ console.log('error: '+ err) }
        });
        return false;
    }
      
    exportMail.send = send;
    window.Mail = exportMail;
})();