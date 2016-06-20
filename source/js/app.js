'use strict';

 $(document).ready(function () {



      $('.button').on('click', function (e) {
          $('#fl').toggleClass('flip');
          $('.button').css({'opacity':0,'visibility':'hidden'});
      });
      $(document).on('click', function (e) {
          if ($(e.target).is('#good,#form,#sub,radio-1,radio-2,check, .button') === false) {
              $('#fl').removeClass('flip');
              $('.button').css({'opacity':1,'visibility':'visible'});
          }
      });

  });

 $(document).ready(function () {
var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

});


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
}