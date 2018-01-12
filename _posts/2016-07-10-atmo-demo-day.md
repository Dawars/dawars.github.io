---
title: 'Atmo &#8211; Interactive bubble for board games'
date: 2016-07-10T18:06:30+00:00
author: dawars
layout: post
---
<div style="width: 2058px" class="wp-caption aligncenter">
  <a href="https://dawars.me/wp-content/uploads/2016/07/atmo_demo_day.jpg"><img src="//dawars.me/wp-content/uploads/2016/07/atmo_demo_day.jpg" alt="Atmo at the Demo Day" width="2048" height="1367" /></a>
  
  <p class="wp-caption-text">
    Atmo at the Demo Day
  </p>
</div>

During the last 6 months I was in the Atmo team to develop a working prototype for an interactive board game extension as part of the Talent program at <a href="http://kibu.hu/en/kibu/about" target="_blank">Kitchen Budapest</a>.

<!--more-->

[<img class="alignright" src="//dawars.me/wp-content/uploads/2016/09/bang_dice_game.jpg" width="293" height="403" />](https://dawars.me/wp-content/uploads/2016/09/bang_dice_game.jpg)The goal was to create a demo for the Bang Dice game. The gameplay is somewhat simplified. In our version there are at most 4 players, who take turns to toss the dice.

The experience consists of 3 different parts.

  1. Projected images and animations on top of the table
  2. Sound effects for the different events in the game
  3.  There is an atmospheric light that illuminates the ceiling and the surroundings to create the appropriate mood

&nbsp;

## Hardware

The harware has many components:

  * A camera with infra filter: for dice recognition
  * A small projector for animations
  * Infra LEDs to illuminate the board for the camera
  * RGB LED strip: for the atmosphere lighting
  * Speaker: for sound effects
  * A Raspberry Pi 3: to control and connect the other components

<div style="width: 810px" class="wp-caption aligncenter">
  <a href="https://dawars.me/wp-content/uploads/2016/07/atmo_poster.jpg"><img src="//dawars.me/wp-content/uploads/2016/07/atmo_poster_crop.jpg" alt="First prototype of Atmo - The board game accessory" width="800" height="1200" /></a>
  
  <p class="wp-caption-text">
    First prototype of Atmo &#8211; The board game accessory
  </p>
</div>

## Development

A critical part of this project is computer vision. We have to recognise the dice (up to 5 pieces) after they are tossed as fast as possible. This is quite a challenge since the dice are very small and we have a down-facing camera ~1m above the table on a white background. This makes it sometimes almost impossible to detect the edges of a die so we have to scan through the whole image.

However, we have already overcome several challenges:

  * Removing the projected picture from the camera image
  * Transforming the input coordinate system to match the projection coordinate system
  * 4 independent parts in atmospheric lighting for each player
  * Die detection for black dice with white symbols on white background:

<div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/l0MYucLKVYoFtmozC" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/l0MYucLKVYoFtmozC">via GIPHY</a></p>

If you want to get up-to-date news about the projects, follow us at: <a href="https://www.facebook.com/projectatmo" target="_blank">https://www.facebook.com/projectatmo</a>