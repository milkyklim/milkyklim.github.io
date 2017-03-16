---
layout: single
title: "Extensive guide to Aachen"
tags: aachen life advice list todo
---

This list includes 15 most inspiring activities you can do in Aachen. Enjoy!

1. Go to a sausage party  
   Girls are rare -- guys are not.

2. Eat Doner at Babylon  
   The cheapest doner in the town. The *dairy* shop was being ran in the same building during the WWII.

4. Visit WG at Stiftstr. 2  
   This place was my island of happiness. Apparently, when you have nothing to do you should be glad that you live with cool people.

5. ~~Get hipster drinks from Getrankemarkt~~  
   I used to go to this shop to buy some hipster drinks like Club Mate and Wostok. Unfortunately, this shop was demolished.

6. Get wasted (address of the REWE, Munster platz)  
   Hint: There is REWE that is open until midnight.

7. Chill at Carolus Thermen  
   There is one thing you can do for your health while in Aachen. Visit saunas and baths. Cool thing to swim in the warm water when it is around zero outside.

8. Escape Aachen  
   The best option might be Weeze Airport. As a student you pay nothing to get there. At the same time you can buy ticket that costs only 10 euro to flight to Venice. Literally leaving Aachen might sound odd but come back to this option after month of staying in Aachen.

11. Enjoy traditional music  
   North-Rhein Westfalia is proud of its regional music! Enjoy traditional Oecher sounds.

12. Taste printen from Nobis  
   Apparently, one of the few things that you can try _only_ in Aachen is printen – special type of cookies.

13. Watch a OV movie  
   Available only twice a week. One time it is a sneak preview where you pay have of the price. Movies are chosen at random – might be "Guardians of the galaxy" or "Loft".

3. (Sunday Feature) Go shopping to Vaals  
   This is the best and only activity you can choose on Sunday. Aachen looks dead on Sunday.

9. Get Del Negro ice-cream  
   *Unfortunately, option is not available during winter.* I didn't understand why people whee so happy to get the ice-cream. But now it starts making sense.

<div id="aachen_to_go" class="map leaflet-container" style="height: 500px; position:relative;" ></div>

{% comment %} move this script to the separate .js file {% endcomment%}
<script>
window.onload = function() {
  var map = L.map('aachen_to_go').setView([50.7753, 6.0839], 10);
  L.tileLayer('http://{s}.tiles.mapbox.com/v3/jamesg87.goac2bf1/{z}/{x}/{y}.png', {attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>', maxZoom: 18}).addTo(map);

  var weeze = L.marker([51.599736, 6.150577]).addTo(map).bindPopup('Weeze Airport').openPopup();
  var babylon = L.marker([50.775345, 6.075250]).addTo(map).bindPopup('Babylon').openPopup();
  var albert_heijn = L.marker([50.772569, 6.021055]).addTo(map).bindPopup('Albert Heijn').openPopup();
  var wg = L.marker([50.775494, 6.092676]).addTo(map).bindPopup('WG').openPopup();
  var getrankemarkt = L.marker([50.769710, 6.081985]).addTo(map).bindPopup('Durstloescher').openPopup();
  var thermen = L.marker([50.783031, 6.096977]).addTo(map).bindPopup('Carolus Thermen').openPopup();
  var del_negro = L.marker([50.772430, 6.077392]).addTo(map).bindPopup('Del Negro').openPopup();
  var nobis_1 = L.marker([50.775620, 6.084301]).addTo(map).bindPopup('Nobis Printen').openPopup();
  var nobis_2 = L.marker([50.774554, 6.084918]).addTo(map).bindPopup('Nobis Printen').openPopup();
  var cinema = L.marker([50.770677, 6.085180]).addTo(map).bindPopup('Eden Palast').openPopup();
  var music = L.marker([50.775490, 6.09202]).addTo(map).bindPopup('Traditional Music').openPopup();
  var hbf = L.marker([50.767744, 6.091415]).addTo(map).bindPopup('Traditional Music').openPopup();

  var route = L.Routing.control({
  waypoints: [
    L.latLng(50.767744, 6.091415),
    L.latLng(51.599736, 6.150577)
  ],
  addWaypoints: false,
  draggableWaypoints: false
}).addTo(map);

  route.hide();
  }
</script>
