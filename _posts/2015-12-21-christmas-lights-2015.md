---
title: Christmas Lights 2015
date: 2015-12-21T08:55:41+00:00
author: dawars
layout: post
---
For this Christmas I came up with a neat little light effect which looks good under the tree.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/tJ3XqHfPGoY?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<!--more-->

The idea was very simple and the implementation as well. I wanted it to transition between randomly generated colours. I choose the Arduino Uno for this project because it&#8217;s very easy to use and I have a few of these at home. And I use a simple RGB LED since it can emit&#8230; coloured light.

Basically I generate random colours and transition between them using Linear Interpolation (<a href="https://youtu.be/mAi2-LTC2CA" target="_blank">https://youtu.be/mAi2-LTC2CA</a>) as time passes.

To illuminate the room more I used a little hack. I put a ping-pong ball on the LED with a hole on it to scatter the photons.

And here is the code using CodeBender so it is very easy to try out. The wiring should be very easy based on the comments. (But make sure your LED is a Common Anode or Cathode one)

```cpp  
#define PIN_RED 9
#define PIN_GREEN 10
#define PIN_BLUE 11
#define TRANSITION 255 //duration of transition

int currRed, currGreen, currBlue;
int prevRed, prevGreen, prevBlue;
int red, green, blue; //temp vars (intermediate values)

void setup()
{
    // put your setup code here, to run once:
    pinMode(PIN_RED, OUTPUT);
    pinMode(PIN_GREEN, OUTPUT);
    pinMode(PIN_BLUE, OUTPUT);

    randomSeed(analogRead(0)); // set random seed from noise from A0

    //initial random color
    prevRed = random(255);
    prevGreen = random(255);
    prevBlue = random(255);
}

void loop()
{
    //new random color
    currRed = random(255);
    currGreen = random(255);
    currBlue = random(255);

    for (int dt = 0; dt < TRANSITION; dt++)
    {
        // calculate color between current and prev color
        red = lerp(prevRed, currRed, dt, TRANSITION);
        green = lerp(prevGreen, currGreen, dt, TRANSITION);
        blue = lerp(prevBlue, currBlue, dt, TRANSITION);

        // display color
        analogWrite(PIN_RED, 255 &#8211; red);
        analogWrite(PIN_GREEN, 255 &#8211; green);
        analogWrite(PIN_BLUE, 255 &#8211; blue);
        delay(8);
    }

    //set the previous color to the current one
    prevRed = currRed;
    prevGreen = currGreen;
    prevBlue = currBlue;
}

//Linear Interpolation: https://youtu.be/mAi2-LTC2CA
int lerp(int a, int b, int dt, int tmax)
{
    return a + (b &#8211; a) * dt / tmax;
}

```
&nbsp;