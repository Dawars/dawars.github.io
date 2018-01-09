---
title: Anime or Cartoon? — Mobile app
date: 2018-01-01
categories: ["Machine Learning"]
tags: ["Anime", "Deep Learning"]
author: dawars
---
![](/wp-content/uploads/2018/01/anime_app_cover.jpg)

Since last summer I have been working on establishing a new definition for [Anime and Cartoon using Artificial Intelligence](https://medium.com/@Dawars/kibu-lift-anime-or-cartoon-a1d2310b4659).

During this time I took part in the KiBu Lift Program and the Hungarian National Talent Program.

<!--more-->

![](/wp-content/uploads/2018/01/anime_app_presentation.png)

At KiBu, Demo Day is a biannual event showcasing the output of the KiBu Talent & Lift programs.

Along with a quick talk  I released the first public beta of the app which you can try out here: [dawars.me/anime/](https://dawars.me/anime/)

## The UI
![](/wp-content/uploads/2018/01/anime_app_closeup.jpg)

The app works much like a traditional camera application. One has to point the camera at the analysed image and at the top of the screen the app displays the anime or cartoon likeness in percents.

## How does it work

The app takes advantage of the superhuman capabilities of neural networks in computer vision, especially CNNs (convolutional neural network).

The network is fed with hundreds of thousands of images from both anime and cartoon images. Here I would like to stress that only universally accepted animations go into training, e.g. Avatar: The Last Airbender is excluded.
During this phase the networks creates an internal representation of "anime likeness" and "cartoon likeness". We don't really what these are but the network distills these from the shown images. Usually these features can be related to outlines, color usage or bigger shapes like eyes, hair.

The current beta utilizes the Mobilenet architecture, which is a great tradeoff between speed and accuracy.

## Future work

Currently the app does a good job at recognising and distinguishing between anime and cartoon images. A current limitation is that it can only say something is either or anime or a cartoon but not both or neither.

I'm planning to teach an even bigger Neural Network (VGG-16) with this dataset. VGG-16 is well known for its great performance in Style Transfer.

Using a slightly modified version of [Neural Style Transfer](https://github.com/jcjohnson/neural-style) we could get a glimpse of the inner workings of the network.

My hyphothesis is that if we tell the network to make a cartoon image more anime looking, certain features will appear that the network associates with anime and vice versa.
