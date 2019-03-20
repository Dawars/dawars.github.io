---
title: 'Personalized Hand Models for VR'
date: 2018-09-19T14:34:15+00:00
author: dawars
categories: ["Machine Learning"]
tags: ["Virtual Reality", "Deep Learning"]
layout: post
---
<h4>For a truly immersive experience</h4>
<div style="width: 1089px" class="wp-caption aligncenter">

<img src="https://dawars.me/wp-content/uploads/2016/08/the_gallery_hands.jpg" alt="General hand model" width="200" />
<img src="https://github.com/Dawars/handvr/raw/master/img/hand_anim.gif" alt="Hand shape space" width="200" />

</div>
<p>
I've always preferred story-driven games to the competitive ones. When diving into a game like this, one experiences a variety of emotions and may also grow as a person at the end. Despite all that I came to the realization that we might control these characters  — our avatars in a way—, but in effect, they have nothing to do with us!
</p>
<p>
When playing a game, you see the body and hands of your playable avatar instead of your own. You can customize your character in some MMORPGs, but it still requires heavy manual tweaking to make them look like you.
</p>
<p>
This is even more relevant in virtual reality, where the control is, literally, in the player's hands. Hand-object interaction is in the center of a great virtual reality experience.
</p>
<!--more-->
<p>
Seeing someone else's hands move instead of your own feels uncanny and causes <i>cognitive dissonance</i>. Although this sounds like a small detail, it can really break the immersion, especially in VR. To work around this, most games apply clever tricks, like covering the player's hands or showing gloves instead.
</p>
<p>
However, hands differ in shapes and sizes, so these workarounds only offer partial solutions to the problem.
</p>
<div style="width: 1089px" class="wp-caption aligncenter">
  <img class="size-medium" src="/wp-content/uploads/2016/08/the_gallery_hands.jpg" alt="Hands with different shapes" />
  <p class="wp-caption-text">Hands in The Gallery - Episode 1: Call of the Starseed  </p>
</div>
<p>
With my project, I aim to change the character's body to resemble the player's physical image in order to make gaming a truly personal experience, thus making it more immersive.
</p>
<blockquote>
I want to transform the character's body to resemble the player's own physical characteristics, making games a truly personal experience.
</blockquote>
<p>
Recent advancements in Artificial Intelligence made it possible to take personalization to the next level, whether <a href="https://ai.googleblog.com/2017/12/tacotron-2-generating-human-like-speech.html" target="_blank">generating voice on the fly</a> (TTS) or <a href="http://cvl-demos.cs.nott.ac.uk/vrn/" target="_blank">modeling the player's face from a single image</a>.
</p>
<p>
<h2>Online Demo</h2>
<p>
  Take a look at my interactive demo <a href="/mano/" target="_blank">here</a>. You can change the shape of the hand by adjusting the sliders on the right.
</p>
<p>
Try finding the right parameters for your hand, let's see if you can.😉<br/>
Leave a comment with your results.
</p>
<div style="width: 1089px" class="wp-caption aligncenter">
  <img class="size-medium" src="/mano/images/banner.png" alt="Deformable hand demo" />
  <p class="wp-caption-text">Deformable Hand <a href="/mano/" target="_blank">Demo</a> </p>
</div>
<h2>The Model</h2>
<p>As a starting point, I'm using the <a href="http://mano.is.tue.mpg.de" target="_blank">Mano model</a>. It is a parametric hand model published by the <a href="http://ps.is.tue.mpg.de" target="_blank">Perceiving Systems Department</a> in Tübingen. 
</p>
<p>I'll get into more details in the following article. If you are interested, make sure you've clicked the <i>Follow</i> button next to my name.
</p>
<p>Researchers from PSD published all the data accompanying their high-quality paper which is still very rare these days. 
<br/>There is a catch, however. They still use Python 2 and therefore the data is in a Pickle format incompatible for Python 3, that I'm currently using. Furthermore, the structure of the files was "documented" only by an example code. I had to figure out the purpose of each matrix by their dimensions and arbitrary names.
</p>
<p>All in all, I came to the conclusion that I needed to export the values as JSON files to maintain cross-compatibility between various programming languages.
</p>
<div class="wp-caption alignright">
<img src="/wp-content/uploads/2018/09/hand_skeleton.gif" width="500" alt="Skeleton with Blend Weights"/>
<p class="wp-caption-text">
Skeleton with Blend Weights</p>
</div>
<p>Based on the published files I've rebuilt the whole model in Maya to be able to export to different game engines.
</p>
<p>
I managed to set up the blend shapes by hand but that was not an option for the rig. I would have had to manually set blend weights for every one of the 778 vertices for every 16 joints.
</p>
<br/>
<br/>
<br/>
<p>
Fortunately, I found a better way, scripting! Maya supports two languages for scripting: MEL and Python. (That means Python)
</p>
<p>
  There is a <a href="https://plugins.jetbrains.com/plugin/8218-mayacharm" target="_blank">plugin</a> for my favorite IDE, PyCharm, which connects to the Python interpreter run by Maya and executes code on it. Now I can use those matrices I saved earlier. This made the whole process a very pleasant experience.
</p>
<div class="wp-caption">
<img src="/wp-content/uploads/2018/09/maya_python_ide.png" alt="Executing Python code in Maya"/>
<p class="wp-caption-text">Executing Python code in Maya</p>
</div>

<h2>Leap Motion</h2>
<p>
To see if everything worked correctly I imported the model in Unity and paired it up with <a href="https://www.leapmotion.com/" target="_blank">Leap Motion</a>. Leap Motion is a small device that can track your hand movements in real-time.
</p>
<p>
Unfortunately, it is not precise enough to be able to track arbitrary hand poses, but a fun toy nevertheless. This is due to the model Leap Motion uses which prefers more common gestures. At the end of the video, I touch each of my fingertips with my thumb, but they don't move separately and don't make contact.
</p>
<div class="wp-caption alignleft">
<img src="/wp-content/uploads/2018/09/leap_motion_skeleton.png" width="500" alt="Leap Motion joint orientations"/>
  <p class="wp-caption-text">Leap Motion joint orientations (<a href="http://blog.leapmotion.com/hands-module-2-0-bring-your-hand-designs-to-life-in-two-minutes-or-less/" target="_blank">Source</a>)</p>
</div>
<p>
However, the setup was not as easy as it sounds. Leap Motion requires the joints of the skeleton to be oriented in a certain way.
</p>
<p>
One axis along the bone, another through the axis of rotation and the third one to complete an orthonormal base.
</p>
<p>
  Luckily Maya has the <i>Orient Joint</i> feature that does just that. It was a great time saver and I could even call it from code.
</p>
<p>
After that, it was easy pairing the rig with the Leap Motion controller using their <a href="http://blog.leapmotion.com/hands-module-2-0-bring-your-hand-designs-to-life-in-two-minutes-or-less/" target="_blank">auto rig tool</a>.
</p>
<h2>Goal</h2>
<p>
The end result of this project will be a mobile app that can transform hand photos into a textured 3D mesh consisting of 10 shape parameters and the different texture files (albedo, normal, etc). These will be extracted with Convolutional Neural Networks (CNN), which is the state of the art method for image processing tasks. These will then be transferred to a supported game of choice. The model can be animated with conventional methods thanks to the MANO model we use as a base.
</p>
<div class="wp-caption">
<img src="/wp-content/uploads/2018/09/handvr_app_concept.png" alt="Mobile app concept"/>
  <p class="wp-caption-text">Mobile app concept</p>
</div>
<p>
Whether the computations run on the device or in the cloud will depend on the computational need of the network. On-device inference would be beneficial for privacy reasons because hand data can be used for biometric identification, therefore, it should be treated with extra care. Not to mention the data policy imposed by GDPR for European users. This way the data never leaves the phone complying with the new regulations.
</p>
<p>
<h2>What's next?</h2>
<p>
Currently, I'm finishing up cleaning the training data and starting to train a neural network. In the next post, I'll write about the results of the first prototype which will estimate the shape parameters and what I've learned along the way. In the meantime follow me to get notified when it comes out.
</p>
<div class="wp-caption">
<img src="/wp-content/uploads/2018/09/handvr_network.png" alt="Neural network architecture"/>
</div>
<hr/>
If you liked this article, follow me on medium and follow me on social media.<br/>
Never miss anything! I write about the intersection of <i>Machine Learning</i> and <i>Computer Graphics</i>.
<div>
  <a href="https://facebook.com/dawars00" target="_blank">
     <img width="350" src="/wp-content/uploads/2018/09/facebook_follow.png">
  </a>
   <a href="https://twitter.com/dawars00" target="_blank">
     <img width="350" src="/wp-content/uploads/2018/09/twitter_follow.png">
  </a>
  </div>
