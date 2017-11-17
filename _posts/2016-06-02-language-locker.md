---
title: 'Language Locker &#8211; Learn languages on the lockscreen'
date: 2016-06-02T18:25:20+00:00
author: dawars
layout: post
---
<div style="width: 1089px" class="wp-caption aligncenter">
  <a href="http://dawars.me/wp-content/uploads/2016/11/language_locker.png"><img class="size-medium" src="//dawars.me/wp-content/uploads/2016/11/language_locker.png" alt="Language learning on the lockscreen" width="1079" height="720" /></a>
  
  <p class="wp-caption-text">
    Language learning on the lockscreen
  </p>
</div>

Learning foreign languages is increasingly important in out globalised world. We often don&#8217;t have the neccessary time for it however. Language Locker addresses this exact problem!

<!--more-->

One day I came up with the idea of practising words every time someone unlocks their smart phone thus improving one&#8217;s vocubulary. Language Locker is based on this very idea. I started developing tha app on Android because it was the only platform capable of &#8220;replacing&#8221; the lockscreen. After a rough prototype I asked my friends and they were interested so we applied for the Talen program at Kibu (<a href="http://kibu.hu/en/talents/about" target="_blank">Kitchen Budapest</a>). During the 6 month program we finished all of the core features, here is an interactive example of the lockscreen:

<p style="text-align: center;">
</p>

## Programming

I programmed the UI and the lockscreen. I am most proud of the lockscreen and the statistics screen which look modern and uses the Material Design principes. My favourite is on the lockscreen when the FAB is pressed. It changes to a tick or a cross based on the given answer and the background card animates to red or green radially outwards from the FAB.

<div style="width: 301px" class="wp-caption aligncenter">
  <a href="http://dawars.me/wp-content/uploads/2016/11/language_locker_statistics.png"><img class="" src="//dawars.me/wp-content/uploads/2016/11/language_locker_statistics.png" alt="Statistics screen of a pack" width="291" height="346" /></a>
  
  <p class="wp-caption-text">
    Statistics screen of a pack
  </p>
</div>

One challenging task was getting the lockscreen to appear on top  of the lock screen. I saw with Google Maps that it is definitely possible but we needed to open the app the very moment the user unlocks their device (or when they lock it).

I came up with the solution of using a BroadcastReceiver listening for Intent.ACTION\_SCREEN\_OFF. With this the lockscreen works but there is little time when the user locks the screen because the device goes to sleep mode and when they unlock it they want to see the screen instantly. This is a limitation we couldn&#8217;t overcome and probably no-one else could.

## Design

Apart from vocabulory I designed other types of exercises (heavily inspired by Duolingo) especially optimized for the lockscreen.

<div style="width: 1358px" class="wp-caption aligncenter">
  <a href="http://dawars.me/wp-content/uploads/2016/11/language_locker_types.png"><img class="size-medium" src="//dawars.me/wp-content/uploads/2016/11/language_locker_types.png" alt="A variety of possible exercise types." width="1348" height="601" /></a>
  
  <p class="wp-caption-text">
    A variety of possible exercise types.
  </p>
</div>

Another idea was to display images related to the words to make it easier to memorize and later recall. This didn&#8217;t get through the concept stage yet. I experimented with ImageNet to automatically retrieve images but using the API would cost too much for us.

<div style="width: 271px" class="wp-caption aligncenter">
  <a href="http://dawars.me/wp-content/uploads/2016/11/language_locker_image.png"><img class="" src="//dawars.me/wp-content/uploads/2016/11/language_locker_image.png" alt="Related images to the practised word." width="261" height="464" /></a>
  
  <p class="wp-caption-text">
    Related images to the practised word.
  </p>
</div>

Since I got my first Android Wear at that time I thought about adding a feature for it as well. (Duolingo still doesn&#8217;t use its full potential)

The app would learn from the activity of the user (standing, walking, running) and based on this data the user would get notifications from time to time where they could practise pronouncing a given word.

<div style="width: 2750px" class="wp-caption aligncenter">
  <a href="http://dawars.me/wp-content/uploads/2016/11/language_locker_wear.png"><img class="size-medium" src="//dawars.me/wp-content/uploads/2016/11/language_locker_wear.png" alt="Practising pronounciation on the Wear" width="2740" height="1800" /></a>
  
  <p class="wp-caption-text">
    Practising pronunciation on the Wear
  </p>
</div>

## The Future

After the end of the Talent program we didn&#8217;t have a reliable source of language material to work from and we had to find out how to continue on our own. We started university that year so we decided to put the project on hold until we had enough time for it.

Currently Duolingo doesn&#8217;t support eastern languages but there is big demand for it which could be an interesting direction to develop further.