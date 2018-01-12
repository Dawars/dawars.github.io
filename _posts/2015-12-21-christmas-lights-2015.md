---
title: Christmas Lights 2015
date: 2015-12-21T08:55:41+00:00
author: dawars
layout: post
---
For this Christmas I came up with a neat little light effect which looks good under the tree.

<div class="video-container">
<iframe width="645" height="315" src="https://www.youtube-nocookie.com/embed/tJ3XqHfPGoY?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<!--more-->

The idea was very simple and the implementation as well. I wanted it to transition between randomly generated colours. I choose the Arduino Uno for this project because it&#8217;s very easy to use and I have a few of these at home. And I use a simple RGB LED since it can emit&#8230; coloured light.

Basically I generate random colours and transition between them using Linear Interpolation (<a href="https://youtu.be/mAi2-LTC2CA" target="_blank">https://youtu.be/mAi2-LTC2CA</a>) as time passes.

To illuminate the room more I used a little hack. I put a ping-pong ball on the LED with a hole on it to scatter the photons.

And here is the code using CodeBender so it is very easy to try out. The wiring should be very easy based on the comments. (But make sure your LED is a Common Anode or Cathode one)

<div class="video-container">
<iframe style="height: 645px; width: 100%; margin: 10px 0 10px;" allowTransparency="true" src="https://codebender.cc/embed/sketch:209950" frameborder="0"></iframe>
</div>