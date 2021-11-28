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

### Site theme

A clean, clear and simple aesthetic has been implemented.

The [Coolors](https://coolors.co/) website has been use to generate the palette. There were 4 colors used mainly across the website and they are as follows:

- Black Shadows #D3C1C3
- Almond #E2D0BE
- Cerulean Crayola #00A7E1
- Rich Black #00171F

Only one font has been used, that is [Montserrat](https://fonts.google.com/specimen/Montserrat). It has been used across all site and it suits the color pallete well.

<div align="right"><a style="text-align:right" href="#top">Go to index :arrow_double_up:</a></div>

<span id="features"></span>

## Features

<span id="features-all"></span>

### Sitewide

**1. Navbar**

- Navbar has 4 buttons which lets user change the game and adjust volume, restart the game, instructions on how to play and what is the game about.
- All buttons except restart have modals to give user better experience.
- It also has hover over color change.

![Topnav](features/topnav.png)

**2. Game Settings**

- It features two game options. 'Easy' for playing the classic rock paper scissors and 'Hard' for playing the expansion version which adds Lizard and Spock.
- It gives user the ability to change the volume of sounds that are being played when one of game buttons have been pressed.
- User is able to close the modal by either pressing the 'x' button or outside of the box.

![Game Settings](features/game-settings.png)

**3. Restart Button**

- Button to restarts the game current on going game or when the game is over.
- Designed for only work when at least on game has been chosen.

**4. How to play**

- Modal button that gives user instructions on how to play and win the game.
- User is able to close the modal by either pressing the 'x' button or outside of the box.

![How to play](features/how-to-play.png)

**5. About**

- Brief description of where the expansion version of the game came from.
- User is able to close the modal by either pressing the 'x' button or outside of the box.

![About](features/about.png)

**6. Select Difficulty**

- A notice for user to select the game difficulty.
- This message hides itself after any difficulty has been chosen.

![Select Difficulty](features/select-difficulty.png)

**7. Easy/Hard Game**

- Both game difficulties contain the same scoring and result messages.
- Scores have been divided into separate for user and computer.
- There are two versions of results depending if it is win/lose or draw.
- Easy game has 3 buttons, Rock, Paper and Scissors while the hard game has another two being Lizard and Spock.

![Easy Game](features/easy-game.png)
![Hard Game](features/hard-game.png)

**8. Easy/Hard Game Guide**

- A container that reminds user of what each option defeats another by text and an image.

![Easy Game Guide](features/easy-game-guide.png)
![Hard Game Guide](features/hard-game-guide.png)

<span id="features-future"></span>

### Features left to implement

- Two player function on one device.

  _The ability to play the game with your friend._

- Online multiplayer with lobbies.

  _The ability to see rooms with players wiating for a match._

<div align="right"><a style="text-align:right" href="#top">Go to index :arrow_double_up:</a></div>