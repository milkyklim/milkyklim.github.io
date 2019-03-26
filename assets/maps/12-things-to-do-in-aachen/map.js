window.onload = function() {
    var map = L.map('aachen_to_go').setView([50.7753, 6.0839], 14);
    L.tileLayer('http://{s}.tiles.mapbox.com/v3/jamesg87.goac2bf1/{z}/{x}/{y}.png', {attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>', maxZoom: 18}).addTo(map);
  
    var weeze_route = L.Routing.control({
      waypoints: [
        L.latLng(50.767744, 6.091415),
        L.latLng(51.599736, 6.150577)
      ],
      addWaypoints: false,
      draggableWaypoints: false
    }).addTo(map);
  
    weeze_route.hide();
  
    var vaals_route = L.Routing.control({
      waypoints: [
        L.latLng(50.767744, 6.091415),
        L.latLng(50.772569, 6.021055)
      ],
      addWaypoints: false,
      draggableWaypoints: false,
      lineOptions: {
        styles: [{color: 'orange'}]
      }
    }).addTo(map);
  
    vaals_route.hide();
  
    var weeze = L.marker([51.599736, 6.150577]).addTo(map).bindPopup('Weeze Airport');
    var babylon = L.marker([50.775345, 6.075250]).addTo(map).bindPopup('Babylon');
    var albert_heijn = L.marker([50.772569, 6.021055]).addTo(map).bindPopup('Albert Heijn');
    var wg = L.marker([50.775494, 6.092676]).addTo(map).bindPopup('WG');
    var getrankemarkt = L.marker([50.769710, 6.081985]).addTo(map).bindPopup('Durstlöscher');
    var thermen = L.marker([50.783031, 6.096977]).addTo(map).bindPopup('Carolus Thermen');
    var del_negro = L.marker([50.772430, 6.077392]).addTo(map).bindPopup('Del Negro');
    var nobis_1 = L.marker([50.775620, 6.084301]).addTo(map).bindPopup('Nobis Printen');
    var nobis_2 = L.marker([50.774554, 6.084918]).addTo(map).bindPopup('Nobis Printen');
    var cinema = L.marker([50.770677, 6.085180]).addTo(map).bindPopup('Eden Palast');
    var music = L.marker([50.775490, 6.09202]).addTo(map).bindPopup('Traditional Music');
    var hbf = L.marker([50.767744, 6.091415]).addTo(map).bindPopup('Main Train Station');
    var rewe = L.marker([50.771499, 6.085892]).addTo(map).bindPopup('REWE');
  }