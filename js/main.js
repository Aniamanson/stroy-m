// (function(){
    let portfolio = document.getElementById('portfolio-gallery');
    let portfolioModal = document.getElementById('portfolio-modal');

    function hiddenPortfolio (){
        portfolio.setAttribute('style','display:none');
        portfolioModal.classList.remove('hidden');
        portfolioModal.classList.add('visible');
    };

    console.log(portfolio);
// }());