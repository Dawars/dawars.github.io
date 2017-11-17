---
id: 367
title: Crowdsourcing Image Labeling for Anime and Cartoon Dataset
date: 2017-09-01T20:54:23+00:00
author: dawars
layout: post
guid: http://dawars.me/?p=367
permalink: /index.php/2017/09/01/crowdsourcing-image-labeling/
---
<img class="aligncenter size-medium" src="//dawars.me/wp-content/uploads/2017/07/fma_ed_text.png" width="1277" height="716" />

This post is the continuation of <a href="http://dawars.me/anime-cartoon-let-ai-decide/" target="_blank" rel="noopener">Anime or Cartoon? &#8211; Let the AI decide</a>. In it I describe the project I&#8217;m collecting the data for.

In Deep Learning we often work with huge datasets and this project is no exception. I collected around 300.000 images from both anime and cartoons. Processing this many images is not an easy task though. After downloading the images from various sources, I quickly looked into them and found a few potential issues&#8230;

<!--more-->

## Crowdsourcing

I designed this simple web app to crowdsouce the labeling of these images. I was heavily inspired by <a href="https://www.galaxyzoo.org/#/classify" target="_blank" rel="noopener">GalaxyZoo</a> which  is made for classifying different kinds of galaxies.

You can check out the latest version at: <http://dawars.me/anime>

<div id="attachment_408" style="width: 350px" class="wp-caption aligncenter">
  <a href="http://dawars.me/wp-content/uploads/2017/07/image_labeling_app.png"><img class="wp-image-408 size-full" src="//dawars.me/wp-content/uploads/2017/07/image_labeling_app.png" alt="Labeling an image in the app" width="340" height="503" /></a>
  
  <p class="wp-caption-text">
    Labeling an image in the app
  </p>
</div>

## The Problem

Now let&#8217;s talk about the problem. I wanted to go through every image so that I can filter out the problematic ones but it would have been impossible to do so manually. I found 4 main features that I wanted to assign to each image:

  * Some images contain **text**. This is bad, because I especially don’t want the network to associate Japanese with anime and English with cartoon.
  * Again, some images contain the **logo of the TV channel**. This is similar to the previous case, I don&#8217;t want specific TV channels to be associated with either category.
  * Some images contain one or more **Characters**. This is good because it is easier to classify based on the style of the characters (the backgrounds can be more similar between the two categories)
  * Sometimes the images are completely** black or unrecognizable**. In this case I don’t want the Neural Network to learn them.

For the &#8220;empty&#8221; images with minimal detail (only one color) I ended up checking the file size and deleting everything below ~1 kB (JPEG compression). This was a quick and pretty effective method.

I made a tutorial to teach users what to look for in the images.

<div style="width: 357px" class="wp-caption aligncenter">
  <a href="https://github.com/Dawars/Anime-Image-Labeling/blob/master/img/tutorial.png?raw=true" target="_blank" rel="noopener"><img title="Tutorial" src="https://github.com/Dawars/Anime-Image-Labeling/raw/master/img/tutorial.png?raw=true" alt="Tutorial" width="347" height="504" /></a>
  
  <p class="wp-caption-text">
    Character tutorial
  </p>
</div>

[<img class="alignleft" src="https://github.com/Dawars/Anime-Image-Labeling/raw/master/img/correct.png?raw=true" alt="Correct answer" width="344" height="472" />](https://github.com/Dawars/Anime-Image-Labeling/raw/master/img/correct.png?raw=true)

[<img class="aligncenter" src="https://github.com/Dawars/Anime-Image-Labeling/raw/master/img/wrong.png?raw=true" alt="Wrong answer with explanation" width="344" height="472" />](https://github.com/Dawars/Anime-Image-Labeling/raw/master/img/wrong.png?raw=true)

<h2 id="used-technologies" style="text-align: left;">
  Used Technologies
</h2>

### Backend

On the backend I used **NodeJS** along with the Express framework since I had heard a lot about it and I wanted to learn something new. It was good refresher on JavaScript because I had to use it on the frontend anyways.

For the database I chose** MySql** since I was already familiar with it and I didn&#8217;t have THAT much data.

Partly from what I had learned at university I designed the Database Scheme. The simplified version can be seen below:

**images **(<span style="text-decoration: underline;">images_id</span>, series_id, filename)
  
**ratings** (<span style="text-decoration: underline;">ratings_id</span>, image_id, text, person, logo, empty)
  
**series **(<span style="text-decoration: underline;">series_id</span>, folder, is_anime)

I add a row for every **series** with its _title_,  _directory name_ and whether it&#8217;s _anime or not_. I store the images on the server every series having their own directory. For every image I insert a row in the **images **table and link back to the series through a foreign key.

Each submission is  a row in the **ratings** table where I store the 4 options explained above and the _image_id_, _time_, etc.

Every time someone presses the next button I need to send out a new image to the user. This needs to be very fast or the app would look very slow. My first thought was to sort the entries by the number of &#8220;votes&#8221; and then select the one with the fewest. This had a couple of disadvantages.

  * The query went through the images in order, because non of the images had any votes at first.
  * It didn&#8217;t scale well. With 100.000 images it took 1 second on my machine and I was going to add a lot more of them.

After a little bit of experimentation and profiling I settled at randomly selecting the images. This solved the problems but I&#8217;m not sure if every image will be selected over time. And here is the final Query:

[code lang=&#8221;sql&#8221;]
  
SELECT image_id,filename,series.title,series.folder
  
FROM images AS r1
  
JOIN series USING(series_id)
  
JOIN (SELECT CEIL(RAND() * (SELECT MAX(image_id) FROM images)) AS id) AS r2
  
WHERE r1.image_id >= r2.id
  
ORDER BY r1.image_id ASC
  
LIMIT 1
  
[/code]

### Frontend

As a starting point I used the <a href="https://getmdl.io/" target="_blank" rel="noopener">Material Design Light</a> library, which as the name suggests provides Material Design themed elements. With this I coded the design. I choose this card form to make it easy to use on mobile devices.

Then I added the functionality with the help of the good old **jQuery**. I assumed that almost every device supports JavaScript and CSS3. I made it so that the page wouldn&#8217;t reload, only the new image, which makes it more mobile friendly and faster. I achieved it by requesting the image in the background using AJAX.

But of course if the page doesn&#8217;t load the next page I cannot go back, right? Wrong. This feature was new to me but I experienced it on other pages so I knew where to look. We can <a href="https://developer.mozilla.org/en/docs/Web/API/History_API" target="_blank" rel="noopener">manipulate the browser history</a> with JS by pushing to the _window.history_ stack and we can even store data in it. In my case the image url and the title of the series.

<div style="width: 484px" class="wp-caption aligncenter">
  <a href="https://github.com/Dawars/Anime-Image-Labeling/raw/master/img/tooltip.png?raw=true"><img class="Showing the title of the series" title="Tutorial" src="https://github.com/Dawars/Anime-Image-Labeling/raw/master/img/tooltip.png?raw=true" alt="Showing the title of the series" width="474" height="593" /></a>
  
  <p class="wp-caption-text">
    The title of the series
  </p>
</div>

## Final words

I&#8217;m very proud of myself to finish a project at this scale from backend to frontend all by myself. I was very excited for <a href="https://developer.android.com/topic/instant-apps/overview.html" target="_blank" rel="noopener">Instant Android apps</a> which became public just recently. But unfortunately its support is very limited and even restricted to Nexus devices at this time so I gave upon it. It would have given a native feel to mobile users.

The project is on GitHub, if you want to check it out: <a href="https://github.com/Dawars/Anime-Image-Labeling" target="_blank" rel="noopener">https://github.com/Dawars/Anime-Image-Labeling</a>

<div class="postArticle-content js-postField js-notesSource js-trackedPost" data-post-id="3a5192c64fb8" data-source="post_page" data-tracking-context="postPage" data-scroll="native">
  <section class="section section--body section--last"> 
  
  <div class="section-content">
    <div class="section-inner sectionLayout--insetColumn">
      <p id="94d5" class="graf graf--p graf--leading graf--trailing">
        If you want to get notified for new posts, follow me <a class="markup--anchor markup--p-anchor" href="https://medium.com/@Dawars" target="_blank" rel="noopener" data-href="https://medium.com/@Dawars">here on Medium</a> or on <a class="markup--anchor markup--p-anchor" href="https://medium.com/r/?url=https%3A%2F%2Ftwitter.com%2Fintent%2Ffollow%3Fscreen_name%3DDawars00" target="_blank" rel="noopener nofollow" data-href="https://medium.com/r/?url=https%3A%2F%2Ftwitter.com%2Fintent%2Ffollow%3Fscreen_name%3DDawars00">Twitter</a>.
      </p>
    </div>
  </div></section>
</div><footer class="u-paddingTop10"></footer> 

&nbsp;