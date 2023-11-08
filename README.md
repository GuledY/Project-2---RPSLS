# RPSLS (Rock, paper, scissors, lizard, spock)

RPSLS (Rock Paper Scissors Lizard Spock), was built to bring a cool, entertaining game back to life. The ultimate end goal of the site is to introduce multiplayer functionality, making it possible for friends and family to enjoy the game together, and to bring back fond memories for 'The Big Bang Theory' fans who recall Sheldon Cooper's unique twist on the classic game. The website will be targeted to anyone who enjoys simple, yet engaging games. RPSLS is designed to provide hours of entertainment and nostalgia!

![RPSLS](https://github.com/GuledY/Project-2---RPSLS/assets/141145982/32c3c39a-0d10-49a4-b950-2c2eeb956af5)

## Features 

### Existing Features

- __Navigation Bar__

  - Featured on all three pages, the full responsive navigation bar includes links to the Landing page, Main game, Rules and Contact us page and is identical in each page to allow for easy navigation regardless of      device used to access the website.
  - The navigation bar becomes a "burger" navigation menu once the device width goes below 1020px allowing for a more user-friendly navigation experience.

![Navigation bar](https://github.com/GuledY/Project-2---RPSLS/assets/141145982/d1284c30-967e-4cc9-a4e3-e1612dd47fe5)
![Mobile nav menu](https://github.com/GuledY/Project-2---RPSLS/assets/141145982/6e23e9cc-6808-411f-8f82-b5be5be74b54)

- __The landing page image__

  - The landing includes 5 icons representing Rock, paper, scissors, lizard and spock. 
  - The hero makes the websites purpose clear to the user at first glance. 

![Hero](https://github.com/GuledY/Project-2---RPSLS/assets/141145982/609bf51d-996c-4eef-bb72-cdd78d3929bc)

- __The Game__

  - This section allows the user to play RPSLS against the computer. The game provides the player with 5 lives, keeps track of their current score, and records their highest score.
    
![Game](https://github.com/GuledY/Project-2---RPSLS/assets/141145982/fd2d18e9-71b9-43d2-b116-fb92aca17687)

- __Lives functionality__

  - The player begins the game with 5 lives that gradually diminish as they lose rounds to the computer. When the remaining lives reach zero, the game enters a 'Game Over' state.
    
![Lives](https://github.com/GuledY/Project-2---RPSLS/assets/141145982/84b87725-28e2-4e6f-ab47-8ddcc7a2152c)

- __High Score functionality__

  - The highscore is saved even after the user has depleated their lives and resets the game.
    
![Highscore](https://github.com/GuledY/Project-2---RPSLS/assets/141145982/91254d56-f8f9-4f80-8fd1-ada4166b6730)

- __Reset button__
  
  - A reset button has been added to restart the game once the user has depleated their lives, with this feature, the user would not need to reload the page to regain their lives.
    
![Reset button](https://github.com/GuledY/Project-2---RPSLS/assets/141145982/749a25f4-b831-4e39-8085-e108db7caa28)

- __Rules page__

  - The rules page explains the rules of RPSLS to users who may not have seen 'The Big Bang Theory' - The rules are written out in text form and are also explained in video form by "Sheldon Cooper" via YouTube. 

![Rules](https://github.com/GuledY/Project-2---RPSLS/assets/141145982/9cd80bd2-547d-4d5f-8b93-140974d9d348)

- __Contact form__

  - The contact form page allows users to send a message to my email address with any questions/feature requests they may have.

![Contact](https://github.com/GuledY/Project-2---RPSLS/assets/141145982/e476f0d5-824c-46e0-a70e-56eedcf929c0)

### Features Left to Implement

- Multiplayer functionality (PvP)
- User profile
- Highscore leaderboards

## Testing 

- Each page was tested on mobile (Samsung Galaxy S20), a 14 inch laptop screen and a 24 inch monitor to ensure responsiveness. 
- Highscore functionality was tested by playing through the game and verifying that the highscore is saved and is updated once a higher score is reached.
- Contact form allows user to send an email to a specified email address.
- Mobile menu refused to work on index.html, contact.html and rules.html pages - This was fixed by adding the mobile menu Javascript directly into each page using script tags.

![Site on mobile](https://github.com/GuledY/Project-2---RPSLS/assets/141145982/c33b8951-6d14-48f9-b709-76288afae98b)
![Site on laptop screen](https://github.com/GuledY/Project-2---RPSLS/assets/141145982/400a830d-b6ac-4b2a-abeb-d89e7334fb56)

### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fguledy.github.io%2FProject-2---RPSLS%2Findex.html)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fguledy.github.io%2FProject-2---RPSLS%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- JavaScript
  - No significant errors were found when passing through JShint

![image](https://github.com/GuledY/Project-2---RPSLS/assets/141145982/743a9956-247d-4c3b-bace-ef2169e9996c)
    
### Unfixed Bugs

There were no bugs left unfixed.

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - [Main Website](https://guledy.github.io/Project-2---RPSLS/index.html)

## Credits 

### Content 

- Instructions on how to create a "burger menu" was found here: [Burger Menu YouTube Tutorial](https://www.youtube.com/watch?v=OFKBep95lb4)
- Instructions on how to create a highscore function using Javascript was found here [Highscore YouTube Tutorial](https://www.youtube.com/watch?v=LEy0Y9QWG88)
- The YouTube video used to explain the rules of RPSLS was found here [RPSLS Rules YouTube Tutorial](https://www.youtube.com/watch?v=_PUEoDYpUyQ))

### Media

- Original hero image source was found here: [Favpng](https://favpng.com/png_view/scissors-rock-paper-scissors-rock-paper-scissors-lizard-spock-png/JTBrnZxu/)

