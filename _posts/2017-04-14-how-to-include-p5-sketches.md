---
layout: single
title: "Add resizable p5.js sketch to the blog"
permalink: /p5-website-jekyll/
date: 2017-04-14
tags: coding p5 howto
description: "Another step to a better blog."
p5:
  - p5
sketches:
  - setup_p5
---

I was using Tumblr to host my blog for quite a while but at some point I tried Processing, processing.js and finally p5.js. Embedding sketches was painful.

You have to adjust the blog settings and look for a hack to make the code work. Then you realize that the code is working on a desktop but totally fails on a mobile device. And you spend the whole day setting things up to get the web page loading in more than 5 seconds. Lame!

That's why I decided to switch to static Jekyll website hosted on Github.

In this post I'll show you how to add resizable p5.js sketches to your blog in a clean way.

I use p5-files that are stored [remotely](https://cdnjs.com/libraries/p5.js){:target="\_blank"}. Choose the version you prefer (I am using 0.5.8). Depending on how fancy you want to go with your sketches you either need only main p5.js file or all files:

{% highlight html %}

https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.8/p5.min.js
https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.8/addons/p5.dom.min.js
https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.8/addons/p5.sound.min.js

{% endhighlight %}

Find the header file of your blog. Most probably that is `_includes/header.html` file. Copy this code there

{% highlight liquid linenos %}

{% raw %}{% assign p5_version = '0.5.8' %}
{% if page.p5 %}
  {% for lib in page.p5 %}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/{{ p5_version }}/{{ lib }}.min.js"></script>
  {% endfor %}
{% endif %}

{% if page.sketches %}
  {% for sketch in page.sketches %}
    <script src='/assets/sketches/{{ sketch }}.js' type="text/javascript"></script>
  {% endfor %}
{% endif %}{% endraw %}

{% endhighlight %}

Here is the explanation of the code above:  
  - line 1: define the version of p5.js;
  - line 2: load p5.js library only on the pages where the sketches are shown;
  - line 3-5: load specified p5-libraries: p5.js, p5.dom.js or p5.sound.js
  - line 8-12: load page-specific sketches.

Now your website can host p5.js sketches.

Let's check that everything is working properly.

As I mentioned sketches will be page-specific. Therefore, we have to modify the YAML front matter of the page where we want to see the sketch. Add the following code at the top of the page

{% highlight YAML linenos %}
p5:
  - p5
  - addons/p5.sound
  - addons/p5.dom
sketches:
  - setup_p5
{% endhighlight %}

  - Lines 1-2 and lines 5-6 are the necessary minimum to see the sketch on the page.
  - Addons in the lines 3-4 are necessary if you plan to have sounds and DOM interactions.

Almost there! Decide where you want to see the sketch and copy this piece of code there

{% highlight html %}

<div id="setup_p5_sketch" style="height: 300px; position:relative;" ></div>

{% endhighlight %}

We will use the `id` later on so put something meaningful there.

Time for the sketch! We have to put the code somewhere, right?

Create `assets/sketches/setup_p5.js` file. Open the file and copy this code there

{% highlight javascript %}

var x = 100,
  y = 100,
  angle1 = 0.0,
  segLength = 50;

function setup() {
  // find the size of the underlying div
  var divWidth = $("#setup_p5_sketch").width();
  var divHeight = $("#setup_p5_sketch").height();
  var myCanvas = createCanvas(divWidth, divHeight);
  myCanvas.parent('setup_p5_sketch');
  strokeWeight(20.0);
  stroke(0, 100);
}

function draw() {
  background(255);
  var dx = mouseX - x;
  var dy = mouseY - y;
  angle1 = atan2(dy, dx);
  x = mouseX - (cos(angle1) * segLength);
  y = mouseY - (sin(angle1) * segLength);
  fill(255);
  segment(x, y, angle1);
  fill(0);
  ellipse(x, y, 20, 20);
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}

// when the window is resized the canvas is resized accordingly
function windowResized(){
  var divWidth = $("#setup_p5_sketch").width();
  var divHeight = $("#setup_p5_sketch").height();
  resizeCanvas(divWidth, divHeight);
}

{% endhighlight %}

Important tricks are hidden in the first lines of the `setup()` function.
We set the size of the sketch canvas to the size of the underlying `div`. After that we set where we want to show the sketch (in the `div` with the `id="setup_p5_sketch"`).

The `windowResized()` function will trigger when the window size is changed adjusting the size of the sketch to the underlying `div`.

And here is the sketch that you should see!

<div id="setup_p5_sketch" style="height: 300px; position:relative;" ></div>

Overall, I find this approach more elegant than any from the p5.js [wiki](https://github.com/processing/p5.js/wiki/Embedding-p5.js) since it makes you portfolio/website look more professional and mobile-friendly.

Enjoy hacking!

Useful links:  
  - [Using Custom Javascript In Jekyll Blogs](http://blog.emmatosch.com/2016/03/09/using-custom-javascript-in-jekyll-blogs.html)
  - [Page-specific assets with Jekyll](http://mattgemmell.com/page-specific-assets-with-jekyll/)
