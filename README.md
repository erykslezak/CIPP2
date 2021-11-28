# Rock Paper Scissors Lizard Spock - Game

![picture of responsive site from 'am i responsive?'](responsive.png "Responsive sample")

**[Live site](https://erykslezak.github.io/CIPP2/)**

---

<span id="top"></span>

## Index

- <a href="#context">Context</a>
- <a href="#ux">UX</a>
  - <a href="#ux-stories">User stories</a>
  - <a href="#ux-wireframes">Wireframes</a>
  - <a href="#ux-theme">Theme</a>
- <a href="#features">Features</a>
  - <a href="#features-all">Site wide</a>
  - <a href="#features-pages">Pages</a>
  - <a href="#features-forms">Forms</a>
  - <a href="#features-future">Still to implement</a>
- <a href="#technologies">Technologies Used</a>
- <a href="#testing">Testing</a>
  - <a href="#testing-auto">Automated</a>
  - <a href="#testing-manual">Manual</a>
  - <a href="#testing-responsive">Responsiveness</a>
  - <a href="#testing-unresolved">Unresolved issues</a>
  - <a href="#testing-bugs">Known bugs</a>
- <a href="#deployment">Deployment</a>
- <a href="#credits">Credits</a>

---

<span id="context"></span>

## Context

Rock Paper Scissors Lizard Spock is a game based on the Big Bang Theory (TV Show). The game lets users play either an original game or the more complicated one.

<div align="right"><a style="text-align:right" href="#top">Go to index :arrow_double_up:</a></div>
<span id="ux"></span>

## UX

### Overview

The site is presented in a minimalist but effective way, providing all the information the user would ever need. Users can find out more about the game, instructions on how to play, game settings by using different modal buttons depending on the users needs.

<span id="ux-stories"></span>

### User stories

For ease of reference, the means by which a user's expectations have been met are summarised in the tables below:

| As a **User** I want | How this is achieved                                                                                                                                                           
:-|:-
To be able to play classic as well as expansion game which is the 'lizard and spock'. | The game button when pressed pops out a modal which gives the user both 'easy' and 'hard' game options. Which is either classic or expansion.
To be able to see my score. | The score is shown in the game container. It is also showing the computers score and increments every round.
A clean, consistent interface which will not confuse users. | The navbar has 4 buttons and title. All buttons except restart button have modals that pop up on button click. Clean look has been achieved with radius given to each container. An animated stylesheet has also been imported to give the user more experience.
To be able to play the game on any device.                                                                                                   | The game has been designed for any type of device. This was done by using flex boxes and media queries. This is addressed in the <a href="#testing-responsive">Responsiveness</a> section below.

<span id="ux-wireframes"></span>

### Wireframes

The wireframes were successfully converted into a live functioning website across all devices.

The full suite of wireframes for **desktop**, **tablet** and **mobile** devices, plus a **sitemap**, can be accessed [here](wireframes/).