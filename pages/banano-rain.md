---
layout: null
permalink: /banano-rain
title: Banano Rain
description: "It is soooo rainy in the jungle!"
image: "./assets/images/banano/hng.svg"
---
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{% if page.title %}{{ page.title }}{% else %}{{ site.title }}{% endif %}</title>
    <!-- Favicon -->
    <link rel="shortcut icon" href="{{ site.baseurl }}/assets/images/banano/hng.svg">
    <style> body{ padding:0; margin:0; } </style>  
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/p5.js"></script>
    <script src="assets/scripts/rain-sketch/rainsplash.js"></script>
    <script src="assets/scripts/rain-sketch/raindrop.js"></script>
    {% seo %}
  </head>
  <body>
    <div id="rain" style="height: 100%; position:relative;"></div>
  </body>
  <script defer src="assets/scripts/rain-sketch/rain-sketch.js"></script>
</html>
