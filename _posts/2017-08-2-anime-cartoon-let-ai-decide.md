---
title: "Anime or Cartoon? — Let the AI decide"
date: 2017-08-02
categories: ["Machine Learning"]
tags: ["Anime", "Deep Learning"]
---

![](/wp-content/uploads/2017/08/anime_vs_cartoon_cover.png)

There is an ongoing debate about the definition of Anime.

>The word **anime** (**アニメ**) comes from the abbreviated pronunciation of “animation” in Japanese, referring to all kinds of animation.

Outside of Japan however, it is usually meant as animations exclusively created in Japan.

## Anime as an Art Form

Films cannot be distinguished (and shouldn’t) based on the country of origin. Why couldn’t people outside of Japan produce _anime_ if they wanted to or why couldn’t Japanese make _cartoons_?

I consider anime an art form, and this art form isn’t restricted to one country. Anime (and cartoon) is a certain way that characters are drawn/animated and how stories are portrayed and told.

Sometimes it’s easy to tell, whether we see an anime or a cartoon, e.g. in the following example. Can you guess which one it is?

![Samurai Jack (Cartoon)](/wp-content/uploads/2017/08/samurai_jack.jpg)

![Sword of the Stranger (Anime)](/wp-content/uploads/2017/08/sword_of_the_stranger.png)

So far, so good. But what about this one?

![Afro Samurai (?)](/wp-content/uploads/2017/08/afro_samurai.png)

**Afro Samurai** was made in Japan but the creator (Takashi Okazaki) drew inspiration from _American media_ and their depiction of Japanese culture due to his fondness of hip hop and soul music.

There are some animations, like this one, that cannot be simply put into either of the categories. As anime got popular world-wide, it influenced western animation studios and vice versa, like Disney, Pixar and DreamWorks amongst many others.

And there are even some collaborations between Japanese and non-Japanese studios like The King Kong Show, The Mysterious Cities of Gold, Ulysse 31, etc.

## Difficulties

An animated film has a lot of components that combined make up a whole: visual style, quality of animation, the themes (human bonds, afterlife, etc.), the music, the characters, the plot and so on…

Therefore not a single one of them can be used to describe the whole.

In addition, anime itself has different animation styles, so we cannot talk about one anime style but several.

## Solution

A more inclusive definition could be whether something _looks like_ anime or not. This is problematic, because it’s a highly subjective factor, but by introducing an independent third-party this can be solved as well.

For these borderline cases I’m going to develop an AI that tells from an image, to what extent does it look like anime or cartoon.

I’m utilizing Deep Learning, because it’s very good at recognizing and categorizing images. Using Convolutional Neural Networks (CNN) 98.9% accuracy was achieved in telling apart _dogs_ from _cats_.

I will feed the AI generally acknowledged anime and cartoon images and it will learn the distinct characteristics of each…

![Application Concept](/wp-content/uploads/2017/08/anime_cartoon_mockup.png)

I’m working on this project as part of my Lift residency at [KiBu](http://kibu.hu).

If you are interested in **Beta testing**, subscribe [here](https://goo.gl/forms/m7MqBNc4GfMPYFNf1).