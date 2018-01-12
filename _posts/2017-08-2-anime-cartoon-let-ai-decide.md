---
title: "Anime or Cartoon? — Let the AI decide"
date: 2017-08-02
categories: ["Machine Learning"]
tags: ["Anime", "Deep Learning"]
author: dawars
---
<img class="aligncenter size-medium" src="//dawars.me/wp-content/uploads/2017/08/anime_vs_cartoon_cover.png" alt="Anime or Cartoon? Edward from Fullmetal Alchemist and Aang from Avatar" width="1920" height="1080" /></p>

<p id="ca5b" class="graf graf--p graf-after--figure">
  There is an ongoing debate about the definition of Anime.
</p>

<blockquote id="9d4f" class="graf graf--blockquote graf-after--p">
  <p>
    <em class="markup--em markup--blockquote-em">The word </em><strong class="markup--strong markup--blockquote-strong"><em class="markup--em markup--blockquote-em">anime</em></strong><em class="markup--em markup--blockquote-em"> (アニメ) comes from the abbreviated pronunciation of “animation” in Japanese, referring to all kinds of animation.</em>
  </p>
</blockquote>

Outside of Japan however, it is usually meant as animations exclusively created in Japan.

<!--more-->

## Anime as an Art Form

<p id="1fa6" class="graf graf--p graf-after--h3">
  Films cannot be distinguished (and shouldn’t) based on the country of origin. Why couldn’t people outside of Japan produce <em class="markup--em markup--p-em">anime</em> if they wanted to or why couldn’t Japanese make <em class="markup--em markup--p-em">cartoons</em>?
</p>

<p id="2d44" class="graf graf--p graf-after--p">
  I consider anime an art form, and this art form isn’t restricted to one country. Anime (and cartoon) is a certain way that characters are drawn/animated and how stories are portrayed and told.
</p>

<p id="79f8" class="graf graf--p graf-after--p">
  Sometimes it’s easy to tell, whether we see an anime or a cartoon, e.g. in the following example. Can you guess which one it is?
</p>

<div style="width: 680px" class="wp-caption aligncenter">
  <a href="//dawars.me/wp-content/uploads/2017/08/samurai_jack.jpg"><img src="//dawars.me/wp-content/uploads/2017/08/samurai_jack.jpg" alt="Samurai Jack (Cartoon)" width="670" height="455" /></a>

  <p class="wp-caption-text">
    Samurai Jack (Cartoon)
  </p>
</div>

<div style="width: 1270px" class="wp-caption aligncenter">
  <a href="//dawars.me/wp-content/uploads/2017/08/sword_of_the_stranger.png"><img class="size-medium" src="//dawars.me/wp-content/uploads/2017/08/sword_of_the_stranger.png" alt="Sword of the Stranger (Anime)" width="1260" height="1080" /></a>

  <p class="wp-caption-text">
    Sword of the Stranger (Anime)
  </p>
</div>

So far, so good. But what about this one?

<div style="width: 610px" class="wp-caption aligncenter">
  <a href="//dawars.me/wp-content/uploads/2017/08/afro_samurai.png"><img src="//dawars.me/wp-content/uploads/2017/08/afro_samurai.png" alt="Afro Samurai (?)" width="600" height="237" /></a>

  <p class="wp-caption-text">
    Afro Samurai (?)
  </p>
</div>

<p id="f10b" class="graf graf--p graf-after--figure">
  <strong class="markup--strong markup--p-strong">Afro Samurai</strong> was made in Japan but the creator (Takashi Okazaki) drew inspiration from <em class="markup--em markup--p-em">American media</em> and their depiction of Japanese culture due to his fondness of hip hop and soul music.
</p>

<p id="8c16" class="graf graf--p graf-after--p">
  There are some animations, like this one, that cannot be simply put into either of the categories. As anime got popular world-wide, it influenced western animation studios and vice versa, like Disney, Pixar and DreamWorks amongst many others.
</p>

<p id="7a5b" class="graf graf--p graf-after--p">
  And there are even some collaborations between Japanese and non-Japanese studios like The King Kong Show, The Mysterious Cities of Gold, Ulysse 31, etc.
</p>

### Difficulties {#e168.graf.graf--h3.graf-after--p}

<p id="ddb0" class="graf graf--p graf-after--h3">
  An animated film has a lot of components that combined make up a whole: visual style, quality of animation, the themes (human bonds, afterlife, etc.), the music, the characters, the plot and so on…
</p>

<p id="ae60" class="graf graf--p graf-after--p">
  Therefore not a single one of them can be used to describe the whole.
</p>

<p id="ccc7" class="graf graf--p graf-after--p">
  In addition, anime itself has different animation styles, so we cannot talk about one anime style but several.
</p>

### Solution {#363b.graf.graf--h3.graf-after--p}

<p id="b5b7" class="graf graf--p graf-after--h3">
  A more inclusive definition could be whether something <em class="markup--em markup--p-em">looks like</em> anime or not. This is problematic, because it’s a highly subjective factor, but by introducing an independent third-party this can be solved as well.
</p>

<p id="0a0c" class="graf graf--p graf-after--p">
  For these borderline cases I’m going to develop an AI that tells from an image, to what extent does it look like anime or cartoon.
</p>

<p id="36dd" class="graf graf--p graf-after--p">
  I’m utilizing Deep Learning, because it’s very good at recognizing and categorizing images. Using Convolutional Neural Networks (CNN) 98.9% accuracy was achieved in telling apart <em class="markup--em markup--p-em">dogs</em> from <em class="markup--em markup--p-em">cats</em>.
</p>

<p id="0bc5" class="graf graf--p graf-after--p">
  I will feed the AI generally acknowledged anime and cartoon images and it will learn the distinct characteristics of each…
</p>

<div style="width: 1582px" class="wp-caption aligncenter">
  <a href="https://dawars.me/wp-content/uploads/2017/08/anime_cartoon_mockup.png"><img src="//dawars.me/wp-content/uploads/2017/08/anime_cartoon_mockup.png" alt="Application Concept" width="1572" height="1080" /></a>

  <p class="wp-caption-text">
    Application Concept
  </p>
</div>

<p id="204e" class="graf graf--p graf-after--figure">
  I’m working on this project as part of my <em class="markup--em markup--p-em">Lift residency </em>at <a class="markup--anchor markup--p-anchor" href="http://kibu.hu/" target="_blank" rel="noopener nofollow" data-href="http://kibu.hu">KiBu</a>.
</p>

<div class="postArticle-content js-postField js-notesSource js-trackedPost" data-post-id="3a5192c64fb8" data-source="post_page" data-tracking-context="postPage" data-scroll="native">
  <section class="section section--body section--last">

  <div class="section-content">
    <div class="section-inner sectionLayout--insetColumn">
      <p id="94d5" class="graf graf--p graf--leading graf--trailing">
        If you want to get notified for new posts, follow me <a class="markup--anchor markup--p-anchor" href="https://medium.com/@Dawars" target="_blank" rel="noopener" data-href="https://medium.com/@Dawars">here on Medium</a> or on <a class="markup--anchor markup--p-anchor" href="https://medium.com/r/?url=https%3A%2F%2Ftwitter.com%2Fintent%2Ffollow%3Fscreen_name%3DDawars00" target="_blank" rel="noopener nofollow" data-href="https://medium.com/r/?url=https%3A%2F%2Ftwitter.com%2Fintent%2Ffollow%3Fscreen_name%3DDawars00">Twitter</a>.
      </p>
    </div>
  </div></section>
</div>

<p id="55e0" class="graf graf--p graf-after--p graf--trailing">
  If you are interested in <strong class="markup--strong markup--p-strong">Beta testing, </strong><a class="markup--anchor markup--p-anchor" href="https://goo.gl/forms/m7MqBNc4GfMPYFNf1" target="_blank" rel="nofollow noopener" data-href="https://goo.gl/forms/m7MqBNc4GfMPYFNf1">subscribe here</a>.
</p>