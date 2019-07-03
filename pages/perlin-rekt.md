---
layout: null
permalink: /perlin-rekt
title: "Reeeeeekt"
description: "Meditative animation in case you get rekt."
---

<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{% if page.title %}{{ page.title }}{% else %}{{ site.title }}{% endif %}</title>
  <style>
    body {
      padding: 0;
      margin: 0;
    }
  </style>
  <script src="https://cdn.jsdelivr.net/npm/opentype.js@latest/dist/opentype.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/p5.js"></script>
  {% seo %}
</head>

<body>
  <div id="rekt" style="height: 100%; position:relative;"></div>
</body>
<script defer src="assets/scripts/rekt-sketch/sketch.js"></script>

</html>