---
title: Liquid Blobs with Voxelized Marching Cubes in Minecraft
date: 2014-11-05T18:57:34+00:00
author: dawars
layout: post
---
<img class="aligncenter" src="https://dawars.me/wp-content/uploads/2017/11/crafting_tank.png" alt="Crafting Pillar Tank with floating Metaballs" width="828" height="621" />

Nowadays every good tech/magic mod needs a form of liquid storage. As a result they look and behave very similarly. Our mod (<a href="http://www.minecraftforum.net/forums/mapping-and-modding-java-edition/minecraft-mods/1292336-crafting-pillars-mod-multiplayer-fix" target="_blank" rel="noopener">Crafting Pillars</a>) is visually driven, hence I wanted to re-invent the way a Liquid Tank looks in-game while retaining the same functionality.

<!--more-->

## The Idea

Inspiration came from Portal 2 which I was playing at the time. The gels floating in the air form blobs which connect and get separated as they move relative to each other. This fitted the theme perfectly: an ancient, science fiction mod, building from stone but with technology that can compress even liquids.

<div style="width: 1930px" class="wp-caption aligncenter">
  <a href="https://dawars.me/wp-content/uploads/2017/11/portal2_gel.jpg"><img src="https://dawars.me/wp-content/uploads/2017/11/portal2_gel.jpg" alt="Metaballs from Portal 2" width="1920" height="1080" /></a>
  
  <p class="wp-caption-text">
    Gel from Portal 2
  </p>
</div>

To fit this into the world of Minecraft however, I had to make some changes. Minecraft is made up of Cubes and round objects are usually not welcomed.

## Theory

<div style="width: 304px" class="wp-caption alignright">
  <a href="https://dawars.me/wp-content/uploads/2017/11/metaballs.png"><img src="https://dawars.me/wp-content/uploads/2017/11/metaballs.png" alt="The blobs are merging as they get closer" width="294" height="377" /></a>
  
  <p class="wp-caption-text">
    [1] Metaballs
  </p>
</div>These liquid blobs are called 

<a href="https://en.wikipedia.org/wiki/Metaballs" target="_blank" rel="noopener">metaballs</a> and I will explain how they work.

We usually use an analogy from physics so that&#8217;s what I&#8217;m going to do. (Don&#8217;t worry, learn physics instead😉)

Imagine placing _electrical_ _charges_ into space. They will be at the center of our blobs. Now we have to compute the _electric field strength_ at every point in our space.

To get the surface of the metaballs, we must choose a threshold value. We want our surface to contain every point in space where the _field strength_ is equal to our threshold. (this is called an isosurface).

Mathematically speaking

$latex \sum\_{i=0}^m metaball\_{i}(x, y, z)\leq threshold &s=3$

where _m_ is the number of charges/blobs, $latex metaball_{i}(x, y, z)$ computes the strength of the i-th charge at the location (x, y, z) and _threshold_ is an arbitrary value we choose.

The strength of a charge is inversely proportional to the square of the distance. In other words it decreases as we move further away. ($latex metaball\_{i}(x, y, z)=\frac{1}{(x\_{i}-x)^2+(y\_{i}-y)^2+(z\_{i}-z)^2}$ where $latex (x\_{i}, y\_{i}, z_{i})$ is the position of the i-th charge)

Hint: It might be interesting to play around with this function and see how the surface changes. Also try out a few different threshold values and see what works best.

Notice, that as the charges get closer together they start to connect and then completely merge as shown in image [1].

## Marching Cubes Algorithm

Now that we have the _equation_ for our surface we have to somehow display it.

In computer graphics we usually don&#8217;t render every point of a surface, but rather approximate it with triangles. Furthermore we don&#8217;t render the inside of objects, only the surface.

We divide our space into cubes along a grid and only calculate the field strengths at the grid points. We then search for the surface the following way.

For each grid cell we check if the surface is going through it. The idea is to check the corner vertices whether they are on the opposite side of the surface. For example if one vertex is inside the surface and an adjacent vertex is outside, we know that the surface must cut the edge between these two vertices so we put some triangles there.

The <a href="http://paulbourke.net/geometry/polygonise/" target="_blank" rel="noopener">original algorithm</a> is using a look up table for each way the surface can intersect with our grid cell.

<div style="width: 860px" class="wp-caption aligncenter">
  <a href="https://dawars.me/wp-content/uploads/2017/11/marching_cubes.png"><img src="https://dawars.me/wp-content/uploads/2017/11/marching_cubes.png" alt="The 15 original configurations" width="850" height="615" /></a>
  
  <p class="wp-caption-text">
    Look Up Table for Marching Cubes
  </p>
</div>

Our case is much simpler though so I won&#8217;t go into more details. There is a very good explanation <a href="http://www.cs.carleton.edu/cs_comps/0405/shape/marching_cubes.html" target="_blank" rel="noopener">here</a> with visual illustrations.

## Voxelized Algorithm

We want the surface to always align to the grid (Axis Aligned), making a nice minecraft-y look.

I created a <a href="https://github.com/Dawars/CraftingPillars/blob/1.10.2/src/main/java/me/dawars/craftingpillars/client/render/Blobs.java" target="_blank" rel="noopener">Blobs</a> class to store the location, strength and velocity of the _charges_ and functions to calculate the field strength.

<pre><code class="java">public static float[][][] fieldStrength(List blobs)
{
    float result[][][] = new float[16][16][16];

    for(int x = 0; x &lt; 16; x++)
    {
        for(int y = 0; y &lt; 16; y++)
        {
            for(int z = 0; z &lt; 16; z++)
            {
                for(int i = 0; i &lt; blobs.size(); i++)
                {
                    float xDist = blobs.get(i).x - x;
                    float yDist = blobs.get(i).y - y;
                    float zDist = blobs.get(i).z - z;
                    float r = xDist*xDist + yDist*yDist + zDist*zDist; //distance square
                    result[x][y][z] += metaball(r);
                }
            }
        }
    }

    return result;
}
</code></pre>

This functions computes the field strength in a 16 \* 16 \* 16 grid according to the equation.

Next comes rendering.

First we iterate through each grid point and check if it is inside a blob. If it is we _may_ have to render the side of the blob. Imagine being at the centre of the blob, the neighbouring cells are still inside so we don&#8217;t need sides there. If we need to render a side we simply render a quad from 2 triangles.

Here is the simplified code from the <a href="https://github.com/Dawars/CraftingPillars/blob/1.10.2/src/main/java/me/dawars/craftingpillars/client/render/TESRTankPillar.java" target="_blank" rel="noopener">TileEntityRenderer</a>:

<pre><code class="java">Tessellator tess = Tessellator.getInstance();
VertexBuffer buffer = tess.getBuffer();

buffer.setTranslation(x, y, z);
buffer.begin(GL11.GL_QUADS, DefaultVertexFormats.POSITION_TEX);

final float THRESHOLD = 1;

float[][][] field = Blobs.fieldStrength(te.getBlobs());

for (int i = 0; i &lt; 16; i++)
    for (int j = 0; j &lt; 16; j++)
        for (int k = 0; k &lt; 16; k++) if (field[i][j][k] &gt;= THRESHOLD) { // Cell is in the blob
                if (j == 15 || field[i][j + 1][k] &lt; THRESHOLD) { // neighbour is outside (or at space bound)
                    buffer.pos((i) / 16F, (j + 1) / 16F, (k) / 16F).endVertex();
                    buffer.pos((i) / 16F, (j + 1) / 16F, (k + 1) / 16F).endVertex();
                    buffer.pos((i + 1) / 16F, (j + 1) / 16F, (k + 1) / 16F).endVertex();
                    buffer.pos((i + 1) / 16F, (j + 1) / 16F, (k) / 16F).endVertex();

                }

                if (j == 0 || (int) field[i][j - 1][k] &lt; THRESHOLD) {
                    buffer.pos((i) / 16F, (j) / 16F, (k + 1) / 16F).endVertex();
                    buffer.pos((i) / 16F, (j) / 16F, (k) / 16F).endVertex();
                    buffer.pos((i + 1) / 16F, (j) / 16F, (k) / 16F).endVertex();
                    buffer.pos((i + 1) / 16F, (j) / 16F, (k + 1) / 16F).endVertex();
                }

                if (k == 15 || (int) field[i][j][k + 1] &lt; THRESHOLD) {
                    buffer.pos((i) / 16F, (j + 1) / 16F, (k + 1) / 16F).endVertex();
                    buffer.pos((i) / 16F, (j) / 16F, (k + 1) / 16F).endVertex();
                    buffer.pos((i + 1) / 16F, (j) / 16F, (k + 1) / 16F).endVertex();
                    buffer.pos((i + 1) / 16F, (j + 1) / 16F, (k + 1) / 16F).endVertex();

                }
                if (k == 0 || (int) field[i][j][k - 1] &lt; THRESHOLD) {
                    buffer.pos((i + 1) / 16F, (j + 1) / 16F, (k) / 16F).endVertex();
                    buffer.pos((i + 1) / 16F, (j) / 16F, (k) / 16F).endVertex();
                    buffer.pos((i) / 16F, (j) / 16F, (k) / 16F).endVertex();
                    buffer.pos((i) / 16F, (j + 1) / 16F, (k) / 16F).endVertex();
                }

                if (i == 15 || (int) field[i + 1][j][k] &lt; THRESHOLD) {
                    buffer.pos((i + 1) / 16F, (j + 1) / 16F, (k + 1) / 16F).endVertex();
                    buffer.pos((i + 1) / 16F, (j) / 16F, (k + 1) / 16F).endVertex();
                    buffer.pos((i + 1) / 16F, (j) / 16F, (k) / 16F).endVertex();
                    buffer.pos((i + 1) / 16F, (j + 1) / 16F, (k) / 16F).endVertex();

                }

                if (i == 0 || (int) field[i - 1][j][k] &lt; THRESHOLD) {
                    buffer.pos((i) / 16F, (j) / 16F, (k + 1) / 16F).endVertex();
                    buffer.pos((i) / 16F, (j + 1) / 16F, (k + 1) / 16F).endVertex();
                    buffer.pos((i) / 16F, (j + 1) / 16F, (k) / 16F).endVertex();
                    buffer.pos((i) / 16F, (j) / 16F, (k) / 16F).endVertex();
                }
            }


tess.draw();
buffer.setTranslation(0, 0, 0);
</code></pre>

## Animation

As a last step we need to animate the blobs. I store a list of blobs in the TileEntity class of the Tank.

In every tick/update I call the update function in the Blobs class for every charge:

<pre><code class="java">public void update(float speed)
{
    if(this.x &gt; maxX || this.x &lt; minX)
        this.velX *= -1F;
    if(this.y &gt; maxY || this.y &lt; minY) 
        this.velY *= -1F; 
    if(this.z &gt; maxZ || this.z &lt; minZ)
        this.velZ *= -1F;

    this.x += speed * this.velX;
    this.y += speed * this.velY;
    this.z += speed * this.velZ;
}
</code></pre>

This checks if a charge (centre of a blob) is colliding with the sides of our space. We will simulate perfectly elastic collisions, so we just need to multiply the respective velocity coordinate with -1.

After that we update the position of the charge with its speed.

## Final Words

That&#8217;s it, you&#8217;ve made it through!

I hope you found this useful and learnt something.