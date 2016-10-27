var markers__array = [
  [-39.29677, 174.063399, 'Mt Taranaki', 'img/map/nz__waihiki.png', 2016, 2, 'New Zealand'],
  [-37.04603, 175.602103, 'Coromandel Pinnacles', 'img/map/nz__crane.png', 2016, 2, 'New Zealand'],
  [-35.934423, 174.34936, 'Waipu Caves', 'img/map/nz__taranaki.png', 2016, 2, 'New Zealand'],
  [-36.264692, 174.79747, 'Goat Island', 'img/map/nz__crane.png', 2016, 2, 'New Zealand'],
  [-37.534167, 175.741667, 'Mt Te Aroha', 'img/map/nz__taranaki.png', 2016, 2, 'New Zealand'],
  [-39.129606, 175.635764, 'Tongaririo Crossing', 'img/map/nz__crane.png', 2016, 2, 'New Zealand'],
  [-39.29677, 174.063399, 'Mt Taranaki', 'img/map/nz__waihiki.png', 2016, 2, 'New Zealand'],
  [-37.04603, 175.602103, 'Coromandel Pinnacles', 'img/map/nz__taranaki.png', 2016, 2, 'New Zealand'],
  [-35.934423, 174.34936, 'Waipu Caves', 'img/map/nz__waihiki.png', 2016, 2, 'New Zealand'],
  [-39.29677, 174.063399, 'Mt Taranaki', 'img/map/nz__waihiki.png', 2016, 2, 'New Zealand'],
  [-37.04603, 175.602103, 'Coromandel Pinnacles', 'img/map/nz__crane.png', 2016, 2, 'New Zealand'],
  [-35.934423, 174.34936, 'Waipu Caves', 'img/map/nz__taranaki.png', 2016, 2, 'New Zealand'],
  [-36.264692, 174.79747, 'Goat Island', 'img/map/nz__crane.png', 2016, 2, 'New Zealand'],
  [-37.534167, 175.741667, 'Mt Te Aroha', 'img/map/nz__taranaki.png', 2016, 2, 'New Zealand'],
  [-39.129606, 175.635764, 'Tongaririo Crossing', 'img/map/nz__crane.png', 2016, 2, 'New Zealand'],
  [-39.29677, 174.063399, 'Mt Taranaki', 'img/map/nz__waihiki.png', 2016, 2, 'New Zealand'],
  [-37.04603, 175.602103, 'Coromandel Pinnacles', 'img/map/nz__taranaki.png', 2016, 2, 'New Zealand'],
  [-35.934423, 174.34936, 'Waipu Caves', 'img/map/nz__waihiki.png', 2016, 2, 'New Zealand'],
  [-36.264692, 174.79747, 'Goat Island', 'img/map/nz__waihiki.png', 2016, 2, 'New Zealand'],
  [-39.129606, 175.635764, 'Tongaririo Crossing', 'img/map/nz__crane.png', 2016, 2, 'New Zealand'],
  [-39.29677, 174.063399, 'Mt Taranaki', 'img/map/nz__waihiki.png', 2016, 2, 'New Zealand'],
  [-37.04603, 175.602103, 'Coromandel Pinnacles', 'img/map/nz__taranaki.png', 2016, 2, 'New Zealand'],
  [-35.934423, 174.34936, 'Waipu Caves', 'img/map/nz__waihiki.png', 2016, 2, 'New Zealand'],
  [-37.04603, 175.602103, 'Coromandel Pinnacles', 'img/map/nz__taranaki.png', 2016, 2, 'New Zealand'],
  [-35.934423, 174.34936, 'Waipu Caves', 'img/map/nz__waihiki.png', 2016, 2, 'New Zealand'],
  [-36.264692, 174.79747, 'Goat Island', 'img/map/nz__waihiki.png', 2016, 2, 'New Zealand'],
  [-39.129606, 175.635764, 'Tongaririo Crossing', 'img/map/nz__crane.png', 2016, 2, 'New Zealand'],
  [-39.29677, 174.063399, 'Mt Taranaki', 'img/map/nz__waihiki.png', 2016, 2, 'New Zealand'],
  [-37.04603, 175.602103, 'Coromandel Pinnacles', 'img/map/nz__taranaki.png', 2016, 2, 'New Zealand'],
  [-35.934423, 174.34936, 'Waipu Caves', 'img/map/nz__waihiki.png', 2016, 2, 'New Zealand'], 
  [-36.264692, 174.79747, 'Goat Island', 'img/map/nz__waihiki.png', 2016, 2, 'New Zealand'],
  [-39.129606, 175.635764, 'Tongaririo Crossing', 'img/map/nz__crane.png', 2016, 2, 'New Zealand'],
  [-39.29677, 174.063399, 'Mt Taranaki', 'img/map/nz__waihiki.png', 2016, 2, 'New Zealand'],
  [-37.04603, 175.602103, 'Coromandel Pinnacles', 'img/map/nz__taranaki.png', 2016, 2, 'New Zealand'],
  [-35.934423, 174.34936, 'Waipu Caves', 'img/map/nz__waihiki.png', 2016, 2, 'New Zealand'],            
];

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
};

function initMap() {
	var mapDiv = document.getElementById('map');
    
  var map = new google.maps.Map(mapDiv, {
    center: {lat: -39.29677, lng: 174.063399},
    zoom: 6,
    mapTypeId: google.maps.MapTypeId.TERRAIN,
    backgroundColor: 'none',
    scrollwheel: false,
    mapTypeControl: false,
    scaleControl: true,
    styles:[
    {
      featureType: 'water',
      stylers: [
      {color: '#ffffff'}
      ]
    },
    {
      featureType: 'road',
      stylers: [
      {visibility: 'off'}
      ]
    },
    ]
  });

  google.maps.event.addListenerOnce(map, 'idle', function(){
    var boundary__north_east_lat = map.getBounds().getNorthEast().lat();
    var boundary__north_east_lng = map.getBounds().getNorthEast().lng();
    var boundary__south_west_lat = map.getBounds().getSouthWest().lat();
    var boundary__south_west_lng = map.getBounds().getSouthWest().lng();
    var range__lat = Math.abs(Math.abs(boundary__south_west_lat) - Math.abs(boundary__north_east_lat)); 
    var range__lng = Math.abs(Math.abs(boundary__south_west_lng) - Math.abs(boundary__north_east_lng));
    var proposed_lat = boundary__north_east_lat;
    var proposed_lng__shifter = 0.15;
    var proposed_lng = boundary__south_west_lng + Math.abs(range__lng) * proposed_lng__shifter;
    var margin__set = range__lat * 0.15;
    //var markers__max = Math.floor(range__lat/margin__set);
    var markers__max = 6;
    var markers__placed = 0;
    var toggled = 0;
    var proposed_lng__order = 2;

    for (i = 0; i < markers__array.length; i++) {

      if (markers__placed < markers__max) {
         proposed_lat = proposed_lat - margin__set;
      }
      if (markers__placed == markers__max){
        proposed_lat = boundary__north_east_lat - margin__set;
        proposed_lng = boundary__north_east_lng - Math.abs(boundary__south_west_lng - proposed_lng);
        markers__placed = 0;
        toggled ++;
      }
      if (toggled == 2) {
        proposed_lat = proposed_lat - margin__set;
        proposed_lng = boundary__south_west_lng + Math.abs(range__lng) * proposed_lng__shifter * proposed_lng__order;
        toggled = 0;
        markers__placed = 0;
      } 

      var marker = new google.maps.Marker({
        position: {lat: proposed_lat, lng: proposed_lng},
        map: map,
        title: markers__array[i][2] + ", " + markers__array[i][4],
        icon: markers__array[i][3], 
      });

      var flightPlanCoordinates = [
        {lat: markers__array[i][0], lng: markers__array[i][1]},
        {lat: proposed_lat, lng: proposed_lng},
      ];

      var flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: '#000000',
        strokeOpacity: 0.1,
        strokeWeight: 1
      });

      markers__placed ++;
      flightPath.setMap(map);
    }
  });
}