$(document).ready(function(){
    var searchInterval = setInterval(searchElement, 500);

    function stopSearch() {
      clearInterval(searchInterval);
    }

    function searchElement() {
      if($('.recommendation-modal__container').length > 0) {
        stopSearch();

        $('.recommendation-modal__container').find('.recommendation-modal__benefits').find('ul').find('li').each(function(index){
            if(index == 1) {
                var countryName = $(this).text().split('for');
                countryName = countryName[1];
                $('.recommendation-modal__container').find('.recommendation-modal__benefits').find('ul').append(`<li style="color: rgb(51, 51, 51)">We ship TAX free to ${countryName}</li>`);
            }
        });
      }

      if($('.shopify-payment-button__button').length > 0) {
        if ($('.shopify-payment-button__button').text().trim().toLowerCase() == 'buy it now') {
          $('.shopify-payment-button__button').text('BUY NOW');
        }
      }
    }

    setTimeout(function(){
      stopSearch();
    },30000);
    
    setTimeout(() => {
      if($('.tt-wrapper').length > 0) {
        var $color = $('.tt-wrapper:nth-child(2)').find('.current_option_name');
        var color_name = $color.text().trim().toLowerCase();
        if (color_name == 'black') {
          $('.shipping-date-message').addClass('active');
        }
      }
    }, 500);
});

$(document).on('click', '.tt-options-swatch li', function(){
  var $color = $('.tt-wrapper:nth-child(2)').find('.current_option_name');
  var color_name = $color.text().trim().toLowerCase();
  console.log(color_name);
  if (color_name == 'black') {
    $('.shipping-date-message').addClass('active');
  } else {
    $('.shipping-date-message').removeClass('active');
  }
});

$(document).on('click', '.product-images-carousel .slick-slide', function(){
  if($(this).index() % 3 == 2) {
    $('.mediaimageholder').addClass('vertical-image');
  } else {
    $('.mediaimageholder').removeClass('vertical-image');
  }
});