---
title: 'BeeSmarter #2 (2014)'
date: 2014-06-03T15:34:15+00:00
author: dawars
layout: post
---
<div id="attachment_45" style="width: 1034px" class="wp-caption aligncenter">
  <a style="line-height: 1.45em;" href="https://dawars.me/wp-content/uploads/2014/03/team.jpg"><img class="wp-image-45" style="font-size: 1rem; line-height: 1.5;" src="//dawars.me/wp-content/uploads/2014/03/team.jpg" alt="The Team at BeeSmarter" width="1024" height="683" /></a>
  
  <p class="wp-caption-text">
    The Team
  </p>
</div>

<a title="BeeSmarter" href="http://beesmarter.org/" target="_blank">BeeSmarter</a> is a competition for developing apps for the mobile platform. We participated in the CodeCamp category for High School students.

<!--more-->

We made a lot of thoughts about our team name because it was our first competition together (FBalazs, Tamastom and me). After a lot of debate we settled at <i>new Team();</i> and <i>Team.getInstance();</i> for every competition to follow. (Following the singleton design pattern)

The competition consists of two parts: the qualifier and the final.

## The qualifier

In the first one we had to make a laser-simulation game with predefined objects. In the given one week we accomplished the predefined objects and we could even add extra features. For example the objects only needed to be rotated in 45 degrees but we did it for every angle. This way we successfully got into the next round of the competition.

## The Final

As it turned out in the final round, we had to develop our app further. We had 12 hours to figure out how Multiplayer works on the phones and add it to the app. It wasn’t an easy task.

<div id="attachment_54" style="width: 310px" class="wp-caption aligncenter">
  <a style="font-size: 1rem; line-height: 1.5; color: #2997ab; outline-color: #000000;" href="https://dawars.me/wp-content/uploads/2014/03/testing-1024x768.jpg"><img class="wp-image-54" src="//dawars.me/wp-content/uploads/2014/03/testing-1024x768.jpg" alt="Testing the app" width="300" height="768" /></a>
  
  <p class="wp-caption-text">
    Testing the app
  </p>
</div>
<p>
We started with limited knowledge about networking and with no experience.
We settled early on using UDP for low latency (this was a bad choice in retrospect).
</p>
<p>Alternatives were Bluetooth and Wifi P2P and of course TCP.
We didn't choose Bluetooth because in the future we wouldn't have been able to extend to other platforms easily. Wifi P2P required a high Android API which wasn't widely adopted at that time.
</p>
<p>Since the game didn't have a game loop - it only updated when something changed, user event - we sent over the network the map state every time a change had occurred.
</p>
<p>
In spite of the starting difficulties we managed to implement the networking and even a map creator. It helped a lot that we had a stable starting point. In the remaining time we made some UI changes. With this we got 950 out of 1000 points and got 1st place in competition. Not bad at all!
</p>
<div id="attachment_40" style="width: 710px" class="wp-caption aligncenter">
  <a style="font-size: 1rem; line-height: 1.5;" href="https://dawars.me/wp-content/uploads/2014/03/victory.jpg"><img class="wp-image-40" style="font-size: 1rem; line-height: 1.5;" src="//dawars.me/wp-content/uploads/2014/03/victory.jpg" alt="The victory cup" width="700" height="683" /></a>
  
  <p class="wp-caption-text">
    The victory cup
  </p>
</div>

What went good:

  * We had time for everything
  * We could design a user friendly UI

What didn’t go well:

  * We couldn’t share the tasks between us equally and didn't use version control.
  * We didn’t have enough time to create the optional objects

<a style="line-height: 1.45em;" href="https://dawars.me/wp-content/uploads/2014/03/2014-03-14-20.28.47-180x300.png"><img class="alignnone wp-image-57 size-medium" title="Multiplayer" src="//dawars.me/wp-content/uploads/2014/03/2014-03-14-20.28.47-180x300.png" alt="Multiplayer" width="180" height="300" /></a>
<a style="line-height: 1.45em;" href="https://dawars.me/wp-content/uploads/2014/03/2014-03-14-20.37.47-225x300.png"><img class="alignnone wp-image-58 size-medium" title="Map editor" src="//dawars.me/wp-content/uploads/2014/03/2014-03-14-20.37.47-225x300.png" alt="Map editor" width="225" height="300" /></a>

<div class="entry-content">
  <p>
    We really enjoyed the competition we are going next year too!
  </p>
</div>