// (function(){
    let portfolio = document.getElementById('portfolio-gallery');
    let portfolioModal = document.getElementById('portfolio-modal');

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

    console.log(portfolio);
// }());