---
title: 'Coloring The Past: Neural Historical Buildings Reconstruction from Archival Photography'
date: 2024-09-09T00:00:00+00:00
author: dawars
categories: ["Computer Vision"]
tags: ["Neural Rendering", "NeRF", "3D Reconstruction", "Cultural Heritage"]
layout: post
---

Historical buildings are a treasure of human cultural heritage, but reconstructing them from archival photos is hard: images are few, quality is poor, scenes have changed over time, and most photos are grayscale.

We introduce an approach to reconstruct the 3D geometry of historical buildings using volumetric rendering. We leverage dense point clouds as a geometric prior and introduce a **color appearance embedding loss** to recover building color from a handful of available color images.

![Teaser](/wp-content/uploads/2024/09/teaser.png)

<a href="http://arxiv.org/abs/2311.17810" target="_blank">Paper</a> | <a href="https://dawars.me/" target="_blank">Code</a> | <a href="/wp-content/uploads/2024/09/historical.mp4" target="_blank">Video</a>

<!--more-->

## Method

Built on top of NeusW, the network has two parts: an SDF net estimating signed distance and geometric features, and a color prediction net. Given a point **x**, viewing direction **v**, and normal **n** = ∇MLP_SDF(**x**), the color net renders the final color.

We use dense point clouds (rather than sparse) as they provide richer geometric prior.

![Point cloud comparison](/wp-content/uploads/2024/09/pointcloud.png)

## Hungarian National Theater Dataset

We release a new historical dataset covering the Hungarian National Theater — a rare case with complete coverage of all four sides of a building that no longer exists.

| Dataset | Total | Color | Train |
|---|---|---|---|
| National Theater | 229 | 16 | 153 |
| Hotel International | 19 | 1 | 18 |
| Observatory | 37 | 3 | 33 |
| St. Michael Church | 17 | 0 | 16 |

Image sources: [Fortepan](https://fortepan.hu/), [Metropolitan Ervin Szabó Library](https://foto.fszek.hu/WebPac_kep/?language=1), [MTVA Archive](https://archivum.mtva.hu/photobank)

## Citation

```bibtex
@inproceedings{komorowicz2023coloring,
  title = {Coloring the Past: Neural Historical Buildings Reconstruction from Archival Photography},
  author = {D. Komorowicz and L. Sang and F. Maiwald and D. Cremers},
  booktitle = {ECCVW},
  year = {2024},
}
```