'use strict';

$(window).scroll(function(){
  var wScroll = $(window).scrollTop();
  
  (function(){
      
    var
      bg = $('.bg__image'),
      sectionText = $('.author__section-img'),
      user = $('.author__section-block');

    slideIt(bg, wScroll / 80);
    slideIt(sectionText, wScroll / 10);
    slideIt(user, wScroll / 3);

    function slideIt(block, strafeAmount) {
      var strafe = -strafeAmount + '%',
        transormString = 'translate3d(0,' + strafe + ',0)';

      block.css({
        'transform' : transormString
      });
    }
  }());


});
// (function(){
//     var
//         svg = $('#test'),
//         svgPath = svg.find('.graph__fill graph__fill--html'),
//         svgPos = svg.offset().top,
//         windowMargin = $(window).height() / 3,
//         startAnimate = wScroll - svgPos + windowMargin,
//         pixelsElapsed = svgPos - wScroll,
//         percentsElapsed = Math.ceil(pixelsElapsed / (svgPos - (svgPos - windowMargin)) * 100),
//         percentsDraw = 1200 / 100 * percentsElapsed;


//     if (startAnimate >= 0) {
//       if (percentsDraw > 0) {
//         svgPath.css({
//           'stroke-dashoffset' : percentsDraw
//         });
//       }
//     }

//     var
//       svg = $('#test'),
//       svgPaths = svg.find('.graph__fill graph__fill--html'),
//       svgPos = svg.offset().top,
//       windowMargin = $(window).height() / 3,
//       startAnimate = wScroll - svgPos + windowMargin,
//       pixelsElapsed = svgPos - wScroll,
//       percentsElapsed =  100 - Math.ceil(pixelsElapsed / (svgPos - (svgPos - windowMargin)) * 100),
//       percentsDraw = 1200 / 100 * percentsElapsed;


//     if (startAnimate >= 0) {

//       var drawAmount = 1200 - percentsDraw;

//       if (drawAmount > 0) {
//         svgPaths.css({
//           'stroke-dashoffset' : drawAmount
//         });
//       }

     
//     }
//   }());
// }); 

 $(document).ready(function () {



      $('.button').on('click', function (e) {
          $('#fl').toggleClass('flip');
          $('.button').css({'opacity':0,'visibility':'hidden'});
      });
      $(document).on('click', function (e) {
          if ($(e.target).is('#good, .button, .mainframe') === false) {
              $('#fl').removeClass('flip');
              $('.button').css({'opacity':1,'visibility':'visible'});
          }
      });


 });

//-----------------------Parallax Scroll------------------------------//



 $(document).ready(function () {

var scene = document.getElementById('scene');
var parallax = new Parallax(scene);
  
})
// --------------------------Slider Section--------------------------//


$(document).ready(function () {

  (function () {
    var counter = 1;

    $('.switch__link').on('click', function(e){
        e.preventDefault();

      var $this = $(this),
        container = $this.closest('.slider'),
        items = container.find('.slider__item'),
        activeItem = container.find('.slider__item.active');

      if (counter >= items.length) {
        counter = 0;
      }

      var reqItem = items.eq(counter);

      activeItem.animate({
        'top' : '100%'
      }, 300);

      reqItem.animate({
        'top' : '0%'
      }, 300, function () {
        activeItem.removeClass('active').css('top', '-100%');
        $(this).addClass('active');
      });

      counter++;

    });
  }());
  
  (function () {

    $('.slideshow__link').on('click', function(e){
        e.preventDefault();
        
        var $this = $(this),
          path = $this.attr('href'),
          container = $this.closest('.slideshow'),
          display = container.find('.slideshow__display-pic'),
          preloader = $('#preloader');

      display.fadeOut(300, function () {
        preloader.show();

        display.attr('src', path).load(function () {
          $(this).fadeIn();
          preloader.hide();
        });
      });
    });
  }());
});



//----------------------Navigation click function--------------------//

$('#nav__btn').on('click', function (e) {


if($('.menu_btn').hasClass('active')) {
    $(this).removeClass('active');
} else { 
    $(this).toggleClass('active');    
}

});


// -----------------------STICKY BLOG SECTION --------------------//



$(window).scroll(function() {
  var
    wScroll = $(window).scrollTop(),
    menu = $('.blog-container .aside__list'),
    sidebar = $('.blog-container .wrapper__list'),
    stickyStart = sidebar.offset().top,
    menuClone = sidebar.clone(),
    fixedSidebar = $('.blog-container-fixed .aside');

  if (wScroll >= stickyStart) {

    // menu.css({
    //  top : wScroll - stickyStart + 'px'
    // });

    if (!fixedSidebar.find('.wrapper__list').length) {
      fixedSidebar.append(menuClone);
      menu.hide();
    }


  } else {
    fixedSidebar.find('.wrapper__list').remove();
    menu.show();
  }

});

//----------------------------SWIPE MENU--------------------------//
$('aside').on('click', function(){

if($('aside').hasClass('active')) {
    $(this).removeClass('active');
} else { $(this).addClass('active')}


});

//-------------------------- MAP STYLES ----------------------------//

function initMap() {
  var myLatLng = {lat:59.974181, lng:30.321228};
  var styleArray = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#61dac9"
            },
            {
                "visibility": "on"
            },
            {
                "saturation": "0"
            }
        ]
    }
    ]
 
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    scrollwheel: false,
    // Apply the map style array to the map.
    styles: styleArray,
    center: myLatLng,
    zoom: 14
  });
    var image = '../assets/img/map_marker.svg';
   var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    icon: image,
    title: 'Привет я здесь!'
  });
};

 
