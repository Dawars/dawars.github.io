---
title: 'Coloring The Past: Neural Historical Buildings Reconstruction from Archival Photography'
date: 2024-09-09T00:00:00+00:00
author: dawars
categories: ["Computer Vision"]
tags: ["Neural Rendering", "NeRF", "3D Reconstruction", "Cultural Heritage"]
layout: post
---

<script type="text/javascript" async
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>

Historical buildings are a treasure of human cultural heritage, but reconstructing them from archival photos is hard: images are few, quality is poor, scenes have changed over time, and most photos are grayscale.

We introduce an approach to reconstruct the 3D geometry of historical buildings using volumetric rendering. We leverage dense point clouds as a geometric prior and introduce a **color appearance embedding loss** to recover building color from a handful of available color images.

![Teaser](/wp-content/uploads/2024/09/teaser.png)

<a href="http://arxiv.org/abs/2311.17810" target="_blank">Paper</a> <!--| <a href="https://dawars.me/" target="_blank">Code</a> --> | <a href="https://sangluisme.github.io/assets/img/historcial/historical.mp4" target="_blank">Video</a>

<iframe src="https://benaco.com/embed/6c7ecafc-3db4-409e-8afa-3d79f12eb4b1" scrolling="no" frameborder="0" allowfullscreen style="width: 100%; height: 60vh; display: block;"></iframe>

Drag to look around, click on floor markers to select camera view and press , or . to step through cameras.

Image sources: [Fortepan](https://fortepan.hu/), [Metropolitan Ervin Szabó Library](https://foto.fszek.hu/WebPac_kep/?language=1), [MTVA Archive](https://archivum.mtva.hu/photobank)

<!--more-->

## Abstract

Historical buildings are a treasure and milestone of human cultural heritage. The rapid development of neural rendering methods makes it possible to recover 3D shape from archival photographs alone. However, this task presents considerable challenges: photos are limited in number, scenes may have altered over time, and radiometric quality is often sub-optimal. We leverage dense point clouds as a geometric prior and introduce a color appearance embedding loss to recover building color from limited available color images. We also introduce a new historical dataset of the Hungarian National Theater as a new benchmark.

## Overview

- Reconstruct satisfactory 3D geometry of historical buildings from sparse and low-quality images
- Color appearance embedding loss to obtain colorized synthetic views when most photos are grayscale
- New historical dataset of the Hungarian National Theater

## Historical Dataset

![Dataset examples](/wp-content/uploads/2024/09/datasets.png)

Reconstructing historical buildings from archival photography has significant value for cultural heritage preservation. However, historical images are often scattered across multiple archives with unresolved copyrights. We introduce the **Hungarian National Theater dataset** — a rare case with complete photo coverage of all four sides of a building that no longer exists.

| Dataset | Total | Color | Train |
|---|---|---|---|
| National Theater | 229 | 16 | 153 |
| Hotel International | 19 | 1 | 18 |
| Observatory | 37 | 3 | 33 |
| St. Michael Church | 17 | 0 | 16 |

## Backbones and Geometry Loss

![Point cloud comparison](/wp-content/uploads/2024/09/pointcloud.png)

*Sparse (left) and dense (right) point cloud. We use dense point clouds as they provide complementary geometric information.*

Built on top of NeusW, the network has two parts: an SDF net estimating signed distance $d \in \mathbb{R}$ and geometric features $\boldsymbol{f} \in \mathbb{R}^{f_n}$, and a color prediction net. Given point $\boldsymbol{x} \in \mathbb{R}^3$, viewing direction $\boldsymbol{v} \in \mathbb{S}^2$, and normal $\boldsymbol{n} = \nabla \text{MLP}_{\text{SDF}}(\boldsymbol{x})$, the color net renders the final color $\boldsymbol{c}$.

## Citation

```bibtex
@inproceedings{komorowicz2023coloring,
  title = {Coloring the Past: Neural Historical Buildings Reconstruction from Archival Photography},
  author = {D. Komorowicz and L. Sang and F. Maiwald and D. Cremers},
  booktitle = {ECCVW},
  year = {2024},
}
```