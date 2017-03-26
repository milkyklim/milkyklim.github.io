---
layout: single
title: "Extensive guide to Aachen"
date: 2017-03-26
header:
  teaser: https://c1.staticflickr.com/3/2866/32825928304_1ff1402ffe_b.jpg
tags: aachen life advice list todo photo
---

The list includes 12 most inspiring activities you can do in Aachen. Have fun!

<figure>
  <a href="https://c1.staticflickr.com/3/2866/32825928304_1ff1402ffe_b.jpg"><img src="https://c1.staticflickr.com/3/2866/32825928304_1ff1402ffe_b.jpg" alt="Enjoying Aachen boredom."></a>
  <figcaption>Enjoying Aachen boredom.</figcaption>
</figure>

1. Go to a sausage party  
   Girls are rare guests in this town -- high chances you will end up at the party with 2-3 girls and 20 guys.

2. Enjoy traditional music  
   North Rhine-Westphalia is proud of its regional music! Go for traditional Öcher sounds.

3. Taste "Printen" from Nobis  
   "Printen" -- special type of cookies -- is one of the few things you can try _only_ in Aachen.

4. Watch an OV movie *(Twice a week option)*  
   One time it is a sneak preview where you pay half of the price but movie is chosen at random – might be "Guardians of the galaxy" or "Loft".

5. Eat döner at Babylon  
   The cheapest döner in town. The *dairy* shop was being ran in the same building during the WWII (at least that's what the metal plate on the wall says).

6. Visit WG at Stiftstr. 2  
   This place was my island of happiness. When there is nothing to do in town you can explore the mindsets of your flatmates.

7. Get wasted  
   REWE is open until midnight.

8. Chill at Carolus Thermen  
   Restore you life total after a wild night. Visit sauna and swimming pool. You can swim in the warm water when the temperature is around zero outside.

9. ~~Get hipster drinks at Getränkemarkt~~  
   I used to go to this shop to buy hipster drinks like Club Mate and Wostok. Unfortunately, this shop was demolished.

10. Escape Aachen  
   The best option might be Weeze Airport. As a student you pay nothing to get there. The flight to Venice may cost only 10 euros. If you really into Aachen come back to this option after month of staying in town.

11. Go shopping to Vaals *(Sunday option)*  
   This is the best _(only)_ activity you can choose on Sunday since Aachen is completely dead.

12. Get Del Negro ice-cream *(Warm seasons option)*  
   Difficult to understand why people are so happy to get an ice-cream. But you'll get there pretty soon.

{% comment %} better move all these to a separate file and after that import it {% endcomment %}
<div id="aachen_to_go" class="map leaflet-container" style="height: 500px; position:relative;" ></div>

<style>
  .leaflet-control-container .leaflet-routing-container-hide {
    display: none;
    }
</style>

<script>
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
</script>
