var originD = '';
var map;

    function initNearByMap() {
      var pyrmont = {lat: 48.3670854, lng: -107.9188971};

      map = new google.maps.Map(document.getElementById('nearbyMap'), {
        center: pyrmont,
        zoom: 60,
        mapTypeId: 'nearbyMap'
      });

      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch({
        location: pyrmont,
        radius: 500,
        rankby: 'distance',
        type: ['store', 'restaurant']
      }, processResults);


      // Create the search box and link it to the UI element.
      var input = document.getElementById('location');
      var searchBox = new google.maps.places.SearchBox(input);
      //map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

      // Bias the SearchBox results towards current map's viewport.
      map.addListener('bounds_changed', function () {
        searchBox.setBounds(map.getBounds());
      });

      var markers = [];
      // Listen for the event fired when the user selects a prediction and retrieve
      // more details for that place.
      searchBox.addListener('places_changed', function () {
        var places = searchBox.getPlaces();

        if (places.length == 0) {
          return;
        }

        // Clear out the old markers.
        markers.forEach(function (marker) {
          marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function (place) {
          if (!place.geometry) {
            console.log("Returned place contains no geometry");
            return;
          }
          var icon = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
          };

          // Create a marker for each place.
          markers.push(new google.maps.Marker({
            map: map,
            icon: icon,
            title: place.name,
            position: place.geometry.location
          }));

          if (place.geometry.viewport) {
            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }
        });
        map.fitBounds(bounds);
      });

      /* get Directions starts*/
      var $inputAuto = $('#location');
      var autocomplete;
      var autocompleteOptions = {
        radius: 10,
        types: ['geocode']
      };
      autocomplete = new google.maps.places.Autocomplete($inputAuto[0], autocompleteOptions);
      autocomplete.addListener('place_changed', function () {
        var locationName = $inputAuto.val();
        $("#destination_direction").val(locationName);
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        ////
        var geocoder = new google.maps.Geocoder;
        var infowindow = new google.maps.InfoWindow;
        var addressValue = geocodeLatLng(geocoder, map, infowindow, directionsService, directionsDisplay);
        /////
        var map = new google.maps.Map(document.getElementById('nearbyMap'), {
          zoom: 7,
          center: {lat: 41.85, lng: -87.65}
        });
        directionsDisplay.setMap(map);
        // calculateAndDisplayRoute(directionsService, directionsDisplay);

      });
      /* get Directions ends*/
    }
    function setDrivingIconVal() {
      $("#car_icon").parent().parent().addClass('active');
      $('#walking_icon').parent().parent().removeClass('active');
      $('#clicked_icon').val('DRIVING');
    }
    function setWalkingIconVal() {
      $("#walking_icon").parent().parent().addClass('active');
      $('#car_icon').parent().parent().removeClass('active');
      $('#clicked_icon').val('WALKING');
    }
    function geocodeLatLng(geocoder, map, infowindow, directionsService, directionsDisplay) {
      var input = '48.3670854,-107.9188971';
            var latlngStr = input.split(',', 2);
            var latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};
            geocoder.geocode({'location': latlng}, function (results, status) {
              var addressValue = results[0].formatted_address;
              $("#origin_direction").val(addressValue);
              originD = addressValue;
              calculateAndDisplayRoute(directionsService, directionsDisplay);

            });

    }
    function calculateAndDisplayRoute(directionsService, directionsDisplay) {
      var originP = $("#origin_direction").val();
      var outputstr = originD.replace(/'/g, '');
      directionsService.route({
        origin: outputstr,
        destination: $("#destination_direction").val(),
        travelMode: $("#clicked_icon").val()
      }, function (response, status) {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
        } else {
          //window.alert('Directions request failed due to ' + status);
          alert('Entered location does not belongs to property country location.');
        }
      });

    }
    function processResults(results, status, pagination) {
      if (status !== google.maps.places.PlacesServiceStatus.OK) {
        return;
      } else {
        createMarkers(results);

        if (pagination.hasNextPage) {
          var moreButton = document.getElementById('more');

          moreButton.disabled = false;

          moreButton.addEventListener('click', function () {
            moreButton.disabled = true;
            pagination.nextPage();
          });
        }
      }
    }

    function createMarkers(places) {

      var bounds = new google.maps.LatLngBounds();
      var placesList = document.getElementById('places');
      var searchPlaceLat = '48.3670854';
      var searchPlaceLng = '-107.9188971';
      for (var i = 0, place; place = places[i]; i++) {
        var latValue = place.geometry.location.lat();
        var lngValue = place.geometry.location.lng();

        var val = getDistance(searchPlaceLat, searchPlaceLng, latValue, lngValue);// returns in meter
        var distance = parseFloat(val / 1000).toFixed(2);// change to Km

        var image = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
        };

        var marker = new google.maps.Marker({
          map: map,
          icon: image,
          title: place.name,
          position: place.geometry.location
        });

        placesList.innerHTML += '<li><image src="' + place.icon + '" height="20px" >' + place.name + '<span>' + distance + 'Km </span></li>';
        bounds.extend(place.geometry.location);

      }
      map.fitBounds(bounds);
      google.maps.event.trigger(map, "resize");
    }

    function rad(x) {
        return x * Math.PI / 180;
    }
    function getDistance(searchPlaceLat, searchPlaceLng, latValue, lngValue) {
      var R = 6378137; // Earth’s mean radius in meter
      var dLat = rad(latValue - searchPlaceLat);
      var dLong = rad(lngValue - searchPlaceLng);
      var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(rad(searchPlaceLat)) * Math.cos(rad(latValue)) *
              Math.sin(dLong / 2) * Math.sin(dLong / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c;
      return d; // returns the distance in meter
    }

