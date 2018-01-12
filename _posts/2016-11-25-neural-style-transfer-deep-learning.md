---
title: Neural Style transfer with Deep Learning
date: 2016-11-25T14:36:07+00:00
author: dawars
layout: post
---
Deep learning is currently a hot topic in Machine learning. The best way to illustrate this is probably through Neural Style Transfer. To get a better understanding of how this technique works I created a couple of images with the original code:

<div style="width: 522px" class="wp-caption aligncenter">
  <a href="https://dawars.me/wp-content/uploads/2016/11/golden_gate-kara-no-kyoukai-the-garden-of-sinners-epilogue.jpg"><img class="size-medium" src="//dawars.me/wp-content/uploads/2016/11/golden_gate-kara-no-kyoukai-the-garden-of-sinners-epilogue.jpg" alt="Golden bridge with the style of a snowy scene from Kara no Kyoukai - The Garden of Sinner" width="512" height="383" /></a>
  
  <p class="wp-caption-text">
    Golden bridge with the style of a snowy scene from Kara no Kyoukai &#8211; The Garden of Sinner
  </p>
</div>

<div style="width: 522px" class="wp-caption aligncenter">
  <a href="https://dawars.me/wp-content/uploads/2016/11/golden_gate-kara-no-kyoukai-the-garden-of-sinners-paradox-spiral.jpg"><img src="//dawars.me/wp-content/uploads/2016/11/golden_gate-kara-no-kyoukai-the-garden-of-sinners-paradox-spiral.jpg" alt="Golden bridge with the style of an apocalyptic scene from the same anime" width="512" height="383" /></a>
  
  <p class="wp-caption-text">
    Golden bridge with the style of an apocalyptic scene from the same anime
  </p>
</div>

<!--more-->

After working on computer vision problems for [Atmo](https://dawars.me/atmo-demo-day/) I came across Deep Learning, especially Convolutional Neural Networks (CNN). Since I purchased a GTX 970 graphics card for my VR project I had everything needed to start in the world of Deep Learning. After finishing the <a href="https://www.udacity.com/course/deep-learning--ud730" target="_blank">Deep Learning</a> course at Udacity I decided to take the optional class named _Practical Deep Learning in Python and Lua_ at BME.

There I joined a team that were looking into Neural Style Transfer. We started out with a <a href="https://github.com/cysmith/neural-style-tf" target="_blank">Tensorflow implementation</a> of the research <a href="https://arxiv.org/abs/1508.06576v2" target="_blank">A Neural Algorithm of Artistic Style</a>. The goal was to get a deep understanding of how neural networks work so we decided to add deep dream and replace the underlying network.

## Style Transfer

A very basic explanation of how this works:

The idea is that different layers of the convolutional layers have learned different features in an image. (We don&#8217;t use the fully connected layers which are for classification.)

The lower layers close to the input image can only recognize different lines and edges in them while the upper layers have more advanced shapes such as circles, triangles.

The algorithm extracts the style from the lower layers (edges, curves) and the content from the upper layers (shapes). Then it compares them to the input style image and content image and minimizes the differences until it is close enough.

## Deep Dream

Deep Dream is achieved by maximizing activations in a specific layer or neuron, for example if an activation represents how likely is it that the image contains a dog, maximizing it will start to form dogs on the picture. Of course the effect can be so little that humans can&#8217;t recognise the dogs, only the network can. Octaves solves this problem but the existing network is so different that it would be really hard to implement and it would slow down the process even more.

What we do however is find layers or neurons which are not used in the style and content transfer and maximize the activations there. This way the optimizer will not &#8220;fix&#8221; deep dream by making style or content more accurate.

With this method we achieved the followings:

<div style="width: 522px" class="wp-caption aligncenter">
  <a href="https://dawars.me/wp-content/uploads/2016/11/golden_bridge-deep_dream.png"><img class="size-medium" src="//dawars.me/wp-content/uploads/2016/11/golden_bridge-deep_dream.png" alt="Maximizing activations in one layer after 1000 epochs" width="512" height="383" /></a>
  
  <p class="wp-caption-text">
    Maximizing activations in one layer after 1000 epochs
  </p>
</div>

<div style="width: 522px" class="wp-caption aligncenter">
  <a href="https://dawars.me/wp-content/uploads/2016/11/starry_night-golden_bridge-deep_dream.png"><img class="size-medium" src="//dawars.me/wp-content/uploads/2016/11/starry_night-golden_bridge-deep_dream.png" alt="Deep dream causes to change the brush strokes but not the whole style or content" width="512" height="383" /></a>
  
  <p class="wp-caption-text">
    Deep dream causes to change the brush strokes but not the whole style or content
  </p>
</div>

## Replacing the network model

We had two networks in mind originally: ResNet and InceptionV3

They have top-5 errors of 5.7% and 5.6% respectively as opposed to the 9.0% of VGG-19. The biggest problem with ResNet is probably its size and thus the backprop time gets even worse. The Inception model is very promising because of the increased accuracy and the required time to run an epoch is about 4 times lower. (These values are based on the **<a href="https://github.com/jcjohnson/cnn-benchmarks" target="_blank">CNN-Benchmark</a>** and aren&#8217;t tested at the time of the writing of this article) .

This _might_ increase the quality a little bit but it is a good way to learn in which layers what kinds of features are represented in the network .

### SqueezeNet

My idea was to use SqueezeNet since it has a very small size (4.8MB) compared to the original VGG-19 (510MB) which the default implementation uses. This means a significantly lower number of operations per epoch.

<div style="width: 619px" class="wp-caption aligncenter">
  <a href="https://dawars.me/wp-content/uploads/2016/11/squeezenet_arch.png"><img class="size-medium" src="//dawars.me/wp-content/uploads/2016/11/squeezenet_arch.png" alt="Architecture of SquezeNet" width="609" height="427" /></a>
  
  <p class="wp-caption-text">
    Architecture of SquezeNet
  </p>
</div>

My expectation is that it would fit on mobile phones and run in reasonable time  without sacrificing quality too much, and getting better results than the <a href="https://github.com/jcjohnson/fast-neural-style" target="_blank">Fast Neural Style</a>. My estimation is that it would run a little faster than ~5/500 => 1% of the time on the GPU. Which for the GTX 970 is about 4 seconds. Of course the GPU is very good at running these operations in parallel and the reduction in the number of neurons wouldn&#8217;t utilize this but on a mobile phone this can makes the program runnable in the first place.

I managed to <a href="https://github.com/Dawars/SqueezeNet-tf" target="_blank">implement the architecture</a> of the network but unfortunately I couldn&#8217;t use the pretrained weigths in Tensorflow because it is given in a coffee model. Training a convolutional network this big from scratch is no easy task. It would require hundreds of hours with my resources and there are a lot of ways I can mess up. I&#8217;m leaving this to after my exam period when I have more spare time.

## Future plans

During the next semester break when I have enough time for the task I&#8217;m going to training SqueezeNet with ImageNet and publishing it.

After this project I&#8217;m planning to implement kanji learning using CNN for Language Locker. With this feature the users could practice drawing the given kanjis on the lockscreen.

I&#8217;ve already found promising data sets: <a href="http://www.nlpr.ia.ac.cn/databases/handwriting/Download.html" target="_blank">http://www.nlpr.ia.ac.cn/databases/handwriting/Download.html</a> and <a href="https://github.com/skishore/makemeahanzi" target="_blank">https://github.com/skishore/makemeahanzi</a>

By combining these two I hope to train an LSTM Neural Network which can recognize even the order of the strokes.
