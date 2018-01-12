---
id: 14
title: Labyrinth Generation
date: 2014-06-07T15:58:20+00:00
author: dawars
layout: post
---
<div style="width: 800px" class="wp-caption aligncenter">
  <a href="https://dawars.me/wp-content/uploads/2014/07/2014-07-07_21.45.00-1024x842.png"><img src="//dawars.me/wp-content/uploads/2014/07/2014-07-07_21.45.00-1024x842.png" alt="Labyrinth" width="790" height="649" /></a>
  
  <p class="wp-caption-text">
    Randomly generated labyrinth in Minecraft
  </p>
</div>

I’ve been making mods for Minecraft for a long time but now I started a bigger project called <a href="http://www.minecraftforum.net/forums/mapping-and-modding/minecraft-mods/2295305-the-elysium-a-greek-themed-dimension-for-heroes" target="_blank">The Elysium</a>. It’s a good opportunity to try out new methods and algorithms.

I came up with the Labyrinth idea recently based on Greek Mythology. A randomly generated Labyrinth System stretching out bellow the whole dimension. This holy dungeon would hold captive the fallen heroes of The Elysium. Sounds cool, huh?<!--more-->

A Minecraft world is made up of chunks (16&#215;16 blocks) so I decided to generate a separate maze for every chunk and connect them together somehow.

After a little bit of research I realized that I have to make Perfect Mazes. It means that any two points are connected by exactly one path (without any loops, and inaccessible areas). Because of these properties two adjacent mazes can be connected anywhere. For the sake of simplicity and design I decided to connect them at the middle. As a result there are more possibilities to move from one point to another making it a _little_ less unsettling.

## The Algorithm

Now I had to find an algorithm suitable for my problem. Fortunately I came across <a href="http://www.astrolog.org/labyrnth/algrithm.htm" target="_blank">this </a>page which described a lot of different algorithms with its properties. Here are some I considered:

<table border="1" width="788" cellspacing="0">
  <tr>
    <td>
      Algorithm
    </td>
    
    <td>
      Dead End %
    </td>
    
    <td>
      Type
    </td>
    
    <td>
      Focus
    </td>
    
    <td>
      Bias Free?
    </td>
    
    <td>
      Memory
    </td>
    
    <td>
      Time
    </td>
    
    <td>
      Solution %
    </td>
  </tr>
  
  <tr>
    <td>
      Binary Tree
    </td>
    
    <td>
      25
    </td>
    
    <td>
      Set
    </td>
    
    <td>
      Either
    </td>
    
    <td>
      no
    </td>
    
    <td>
      0*
    </td>
    
    <td>
      7
    </td>
    
    <td>
      2.0
    </td>
  </tr>
  
  <tr>
    <td>
      Sidewinder
    </td>
    
    <td>
      27
    </td>
    
    <td>
      Set
    </td>
    
    <td>
      Either
    </td>
    
    <td>
      no
    </td>
    
    <td>
      0*
    </td>
    
    <td>
      8
    </td>
    
    <td>
      2.6
    </td>
  </tr>
  
  <tr>
    <td>
      Eller&#8217;s Algorithm
    </td>
    
    <td>
      28
    </td>
    
    <td>
      Set
    </td>
    
    <td>
      Either
    </td>
    
    <td>
      no
    </td>
    
    <td>
      N*
    </td>
    
    <td>
      10
    </td>
    
    <td>
      4.2 (3.2)
    </td>
  </tr>
  
  <tr>
    <td>
      Kruskal&#8217;s Algorithm
    </td>
    
    <td>
      30
    </td>
    
    <td>
      Set
    </td>
    
    <td>
      Either
    </td>
    
    <td>
      Yes
    </td>
    
    <td>
      N^2
    </td>
    
    <td>
      32
    </td>
    
    <td>
      4.1
    </td>
  </tr>
  
  <tr>
    <td>
      Prim&#8217;s Algorithm
    </td>
    
    <td>
      36 (31)
    </td>
    
    <td>
      Tree
    </td>
    
    <td>
      Either
    </td>
    
    <td>
      Yes
    </td>
    
    <td>
      N^2
    </td>
    
    <td>
      21
    </td>
    
    <td>
      2.3
    </td>
  </tr>
</table>

Since I have to generate an &#8220;infinite&#8221; number of small labyrinths, I choose Eller&#8217;s algorithm for this task. It has very minimal memory need and very fast (linear time complexity) which is crucial for worldgen.

I worked based on this page which helped me understand the algorithm: <http://www.neocomputer.org/projects/eller.html>

## The Result

Here are some pictures of the results in Minecraft.

It turned out to make you feel truly lost and mad (so goal accomplished 🙂 ). <span style="line-height: 1.45em;">If you would like to try it yourself you can </span><a style="line-height: 1.45em;" href="http://www.minecraftforum.net/forums/mapping-and-modding/minecraft-mods/2295305-the-elysium-a-greek-themed-dimension-for-heroes" target="_blank">download it here</a><span style="line-height: 1.45em;">.</span>

<div style="width: 800px" class="wp-caption aligncenter">
  <a href="https://dawars.me/wp-content/uploads/2014/07/2014-07-07_18.58.13-1024x542.png"><img src="//dawars.me/wp-content/uploads/2014/07/2014-07-07_18.58.13-1024x542.png" alt="First Person View of the labyrinth" width="790" height="418" /></a>
  
  <p class="wp-caption-text">
    First Person View
  </p>
</div>

<div style="width: 800px" class="wp-caption aligncenter">
  <a href="https://dawars.me/wp-content/uploads/2014/07/2014-07-07_21.45.00-1024x842.png"><img src="//dawars.me/wp-content/uploads/2014/07/2014-07-07_21.45.00-1024x842.png" alt="Top-down view of the labyrinth" width="790" height="649" /></a>
  
  <p class="wp-caption-text">
    Top-down view
  </p>
</div>