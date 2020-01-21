var DEV = '../assets/img/';
var AEM = '';
var URL = DEV;

// -- Carousel control -- //
$(document).ready(function () {

    $(".header-counter").each(function (index, element) {
        $(element).find(".js-current-header").text(1);
    });

    $(".products-counter").each(function (index, element) {
        $(element).find(".js-current-products").text(1);
    });

    $(".products-counter").each(function (index, element) {
        $(element).find(".js-contrast-products").text(1);
    });

    $('.contrast-carousel').slick({
        appendArrows: $('.products-slick')[0],
        slidesPerRow: 3,
        infinite: false,
        autoplay: false,
        speed: 200,
        fade: true,
        cssEase: 'linear',
        prevArrow:"<img class='previous-arrow slick-prev' src='../assets/img/arrow-previous.svg'>",
        nextArrow:"<img class='next-arrow slick-next' src='../assets/img/next-arrow.svg'>",
        dots: true,
        windowTimer: true,
        dotsClass: 'custom_paging',
        customPaging: (slider) => {
            $(slider.$slider).siblings('.products-counter').find('.js-total-contrast').text(slider.slideCount);
            return;
        }
    });

    $('.contrast-carousel').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $(event.target).siblings('.products-counter').find('.js-contrast-products').text(nextSlide + 1);
    });


    $('.carousel').slick({
        appendArrows: $('.most-arrows-slick')[0],
        slidesPerRow: getSlidesPerRow(),
        rows: window.innerWidth >= 768 ? 2 : 1,
        infinite: false,
        dots: true,
        speed: 200,
        fade: true,
        cssEase: 'linear',
        prevArrow:"<img class='previous-arrow slick-prev' src='../assets/img/arrow-previous.svg'>",
        nextArrow:"<img class='next-arrow slick-next' src='../assets/img/next-arrow.svg'>",
        dotsClass: 'custom_paging',
        customPaging: (slider) => {
            $(slider.$slider).closest('.most-carousel').find('.js-total-products').text(slider.slideCount);
            return;
        }
    });

    $('.carousel').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $(event.target).closest('.most-carousel').find('.js-current-products').text(nextSlide + 1);
    });

    $('.photo-productcarousel').slick({
        appendArrows: $('.photo-product-arrows-slick')[0],
        slidesPerRow: getSlidesPerRow(),
        rows: window.innerWidth >= 768 ? 2 : 1,
        infinite: false,
        dots: true,
        speed: 200,
        fade: true,
        cssEase: 'linear',
        prevArrow:"<img class='previous-arrow slick-prev' src='../assets/img/arrow-previous.svg'>",
        nextArrow:"<img class='next-arrow slick-next' src='../assets/img/next-arrow.svg'>",
        dotsClass: 'custom_paging',
        customPaging: (slider) => {
            $(slider.$slider).closest('.photo-product-carousel').find('.js-total-products').text(slider.slideCount);
            return;
        }
    });

    $('.photo-productcarousel').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $(event.target).closest('.photo-product-carousel').find('.js-current-products').text(nextSlide + 1);
    });
    

    $('.carousel-area-aplication').slick({
        infinite: false,
        slidesToShow: window.innerWidth <= 768 ?  2 : 4,
        // rows: 1,
        appendArrows: $('.area-aplication-arrows-slick')[0],
        speed: 200,
        slideOffset: 15,
        slidesToScroll: window.innerWidth <= 768 ? 2 : 4,
        cssEase: 'linear',
        prevArrow:"<img class='previous-arrow slick-prev' src='../assets/img/arrow-previous.svg'>",
        nextArrow:"<img class='next-arrow slick-next' src='../assets/img/next-arrow.svg'>",
        dots: true,
        windowTimer: true,
        dotsClass: 'custom_paging',
        customPaging: (slider) => {
            const amountPerPage = window.innerWidth <= 768 ? 2 : 4;
            $(slider.$slider).closest('.area-aplication-carousel').find('.js-total-area-aplication').text(slider.slideCount);
            $(slider.$slider).closest('.area-aplication-carousel').find('.js-current-area-aplication').text(slider.slideCount);
            return;
        }
    });

    $('.carousel-area-aplication').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        const amountPerPage = window.innerWidth <= 768 ?  2 : 4;
        $(event.target).closest('.area-aplication-carousel').find('.js-current-area-aplication').text(currentSlide);
    });

    $('.header').slick({
        appendArrows: $('.header-arrows-slick')[0],
        infinite: false,
        autoplay: false,
        speed: 200,
        fade: true,
        cssEase: 'linear',
        prevArrow:"<img class='previous-arrow slick-prev' src='../assets/img/arrow-previous.svg'>",
        nextArrow:"<img class='next-arrow slick-next' src='../assets/img/next-arrow.svg'>",
        dots: true,
        windowTimer: true,
        dotsClass: 'custom_paging',
        customPaging: (slider) => {
            $(slider.$slider).closest('.js-header').find('.js-total-header').text(slider.slideCount);
            return;
        }
    });

    $('.header').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $(event.target).closest('.js-header').find('.js-current-header').text(nextSlide + 1);
        const title =  document.querySelector('.header-title')
        const subtitle =  document.querySelector('.header-subtitle')
        title.classList.add('animated', 'bounceInLeft')
    });

    $('.products-solution').slick({
        infinite: false,
        slidesToShow: window.innerWidth <= 768 ?  1 : window.innerWidth <= 1920 ? 3 : 4,
        // rows: 1,
        appendArrows: $('.products-arrows-slick')[0],
        speed: 200,
        slideOffset: 15,
        slidesToScroll: window.innerWidth <= 768 ? 1 : window.innerWidth <= 1920 ? 3 : 4,
        cssEase: 'linear',
        prevArrow:"<img class='previous-arrow slick-prev' src='../assets/img/arrow-previous.svg'>",
        nextArrow:"<img class='next-arrow slick-next' src='../assets/img/next-arrow.svg'>",
        dots: true,
        windowTimer: true,
        dotsClass: 'custom_paging',
        customPaging: (slider) => {
            const amountPerPage = window.innerWidth <= 768 ? 1 : 4;
            $(slider.$slider).closest('.products-slick').find('.js-total-contrast').text(Math.ceil(slider.slideCount / amountPerPage) + 1);
            return;
        }
    });

    $('.products-solution').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        const amountPerPage = window.innerWidth <= 768 ?  1 : window.innerWidth <= 1920 ? 3 : 4;
        $(event.target).closest('.products-slick').find('.js-contrast-products').text((nextSlide / amountPerPage) + 1);
    });


    function getSlidesPerRow() {
        if (window.innerWidth <= 768) return '1'
        else if (window.innerWidth > 768 && window.innerWidth <= 1919) return '2'
        else return '3'
    };

});
// -- Carousel control -- //

// -- Resumo descrição -- //

var read_more_limit = 190;

$('.read-more').each(function() {
  var html = $(this).html();
  if (html.length > read_more_limit) $(this).html(html.substring(0, read_more_limit) + '... <a href="#description" class="read-more-btn">[leia mais]</a>');
});

$('.summary-text').each(function() {
  var html = $(this).html();
  var data = $(this).data('limitCaracter');
  if (html.length > data) $(this).html(html.substring(0, data) + '...');
});


// -- Menu control -- //
function openMenu() {
    $('body').find('.menu-content').toggleClass('closed');
}

function openSearchMobile() {
    $('body').find('.mobile-menu-search').toggleClass('closed');
}

function openFilterhMobile() {
    $('body').find('.mobile-menu-filter').toggleClass('closed');
}

function openMenuCalculate() {
    $('body').find('.modal-calculate').toggleClass('closed');
}

function openAlertContact(nameclass) {
    $('body').find(nameclass).toggleClass('closed');
}

function modalOpen(nameclass) {
    $('body').find(nameclass).toggleClass('closed');
}

function expandSearchInput() {
    $('body').find('.search-suggestion').addClass('show');
     $('.fade-nav-search').addClass('in');
}

$('.fade-nav-search')[0].addEventListener("click", function() {
    $('body').find('.search-suggestion').removeClass('show');
     $('.fade-nav-search').removeClass('in');
});
// -- mobile menu control -- //

// -- Accordion control -- //
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

$(".dropbtn").click(function () {
    $(this).toggleClass("rotate").next().toggleClass("show")
    $('.fade-nav').addClass('in');
    const openedItems = document.getElementsByClassName('dropdown-content show').length;
    if (!openedItems) {
        $('.fade-nav').removeClass('in');
    }
});

$(".footer-drop").click(function () {
    $(this).toggleClass("rotate").next().toggleClass("show")
    const openedItems = document.getElementsByClassName('dropdown-content show').length;
});
// -- Accordion control -- //

// Show more HOME
$(".js-show-more").click(function () {
    $(this).siblings('.products-more').toggleClass("show");
    $(this).toggleClass("less");
});


(function () {
    if (window.location.hash === '#thanks') {
        $('body').find('.cta-error').addClass('hidden');
        $('body').find('.message-confirmation-title').text('Dados enviados');
        $('body').find('.message-content-title').text('E-mail cadastrado com sucesso!');
        $('body').find('.message-content-body').text('Obrigado por se cadastrar!');
        $('body').find('.message-confirmation').removeClass('closed');
        setTimeout(function () {
            $('body').find('.message-confirmation').addClass('closed');
        }, 6000);
    }
})();

function sendEmail() {
    $('body').find('.message-confirmation').addClass('closed');
    const email = document.getElementById('mce-EMAIL');
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("api-key", "api-key: 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");
    
    var requestOptions = {
      method: 'POST',
      body: JSON.stringify({"email_address": document.getElementById('mce-EMAIL').value, "updateEnabled":"false"}),
      headers: myHeaders,
      redirect: 'follow',
      mode: 'no-cors'
    };
    
    fetch("https://api.sendinblue.com/v3/contacts", requestOptions)
      .then(response => {
        console.log(response);
        $('.confirmation-mail-img').attr('src','./assets/img/mail-success.svg');
        if(response.status === 400) {
            $('body').find('.message-confirmation-title').text('E-mail já cadastrado');
            $('body').find('.message-content-title').text('Não foi possível cadastrar seu e-mail');
            $('body').find('.message-content-body').text('O e-mail inserido já está cadastrado em nosso sistema!');
        } else {
            $('body').find('.cta-error').addClass('hidden');
            $('body').find('.message-confirmation-title').text('Dados enviados');
            $('body').find('.message-content-title').text('E-mail cadastrado com sucesso!');
            $('body').find('.message-content-body').text('Obrigado por se cadastrar!');
        }
        $('body').find('.message-confirmation').removeClass('closed');
        setTimeout(function () {
            $('body').find('.message-confirmation').addClass('closed');
        }, 6000);

      })
      .catch(error =>{
        $('.confirmation-mail-img').attr('src', './assets/img/mail-error.svg');
        $('body').find('.cta-error').removeClass('hidden');
        $('body').find('.message-confirmation-title').text('E-mail não cadastrado');
        $('body').find('.message-content-title').text('Não foi possível cadastrar seu e-mail');
        $('body').find('.message-content-body').text('Verifique sua conexão com a internet e tente novamente.');
        $('body').find('.message-confirmation').removeClass('closed');
        setTimeout(function () {
            $('body').find('.message-confirmation').addClass('closed');
        }, 6000);
        console.log('error', error)
      });
}

function closeMessageModal() {
    $('body').find('.message-confirmation').addClass('closed');
}