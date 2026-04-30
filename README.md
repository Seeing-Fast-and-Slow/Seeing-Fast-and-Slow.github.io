# Seeing Fast and Slow: Learning the Flow of Time in Videos

<p align="center">
  <a href="https://arxiv.org/abs/2604.21931"><b>Paper</b></a> &nbsp;|&nbsp;
  <a href="https://Seeing-Fast-and-Slow.github.io"><b>Project Page</b></a> &nbsp;|&nbsp;
  <a href="https://huggingface.co/datasets/james020619/SloMo-44K/tree/main"><b>Dataset</b></a>
</p>

## Overview

<p align="center">
  <img src="assets/teaser.gif" width="80%">
</p>

This project explores how to **perceive and manipulate the flow of time** in videos through four complementary tasks:

- **Speed-change detection** locates the exact moments when playback speed shifts.
- **Video speed estimation** infers how much a video has been sped up or slowed down.
- **Extreme Temporal super-resolution** converts low-FPS, blurry videos into high-FPS, clear counterparts.
- **Speed-conditioned video generation** synthesizes the same event at user-specified temporal speeds.

Together, these capabilities highlight fine-grained temporal perception alongside controllable video generation.

We also introduce **SloMo-44K**, the largest generic slow-motion video dataset to date. It consists of **44,632** slow-motion clips sourced from YouTube, Vimeo, and Flickr, covering a wide variety of scenarios and motions recorded with high-speed cameras.

## 📋 TODO

- [x] Release SloMo-44K
- [ ] Speed-change Detection Code
- [ ] Video Speed Estimation Code
- [ ] Extreme Temporal Super-resolution Code
- [ ] Speed-conditioned Video Generation Code

## 🌏 Citation

```
@article{wu2026seeingfastslowlearning,
  title={Seeing Fast and Slow: Learning the Flow of Time in Videos}, 
  author={Wu, Yen-Siang and Luo, Rundong and Zhu, Jingsen and Tu, Tao and Farhadi, Ali and Wallingford, Matthew and Wang, Yu-Chiang Frank and Marschner, Steve and Ma, Wei-Chiu},
  journal={arXiv:2604.21931},
  year={2026},
  url={https://arxiv.org/abs/2604.21931}
}
```