# Checkin it Twice

## Topics
___
## Getting Started


**NOTES:** 
        
## learn
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
**NOTES:**


  <!-- # React/Next.js Template

[See Live Demo of this Template](https://drt-next-js-template.netlify.app/)

## Topics
- [Get Started](#get-started)
- [Starting the Project](#starting-the-project)
- [Using axios](#using-axios)
- [Deploying on Netlify](#deploying-on-netlify)
___
## Getting Started
### Use Template
#### 1. To get started, click the GREEN "Use this Template" button at the top of the repo
<img width="915" alt="Screen Shot 2022-07-06 at 12 54 01 PM" src="https://user-images.githubusercontent.com/29741570/177612998-4aac9237-5a1e-4f13-8ae0-468587521564.png">

#### 2. Make sure YOUR github account is selected in the dropdown and name your project
<img width="763" alt="Screen Shot 2022-07-06 at 12 54 48 PM" src="https://user-images.githubusercontent.com/29741570/177613126-dd38f678-7553-4f27-8a4a-75680f14d71e.png">

#### 3. Clone your new repo to your local machine
#### 4. Go to the **NEXT** section

## Starting the Project
1. Create a Firebase project and set up authentication. Use [these videos](https://vimeo.com/showcase/codetracker-firebase) as a refresher if needed.
1. Create a `.env` file at the root of the project
1. Copy/Paste the contents of the `.env.sample` file to your newly created `.env` file.
1. Copy over all of your Firebase values into the `.env` file.
1. Open the `package.json` file and change the `name` property to the name of your application, and `author` to  your name.
1. From your command line, be in the root directory and run `npm install` OR `npm i` for short.
1. Next, run `npm run prepare`. This command sets up husky to track eslint errors on commit that will make your deploy fail on Netlify.
1. To start your application, run `npm run dev`. THIS IS THE COMMAND YOU WILL USE TO RUN YOUR DEVELOPMENT SERVER FROM NOW ON.
1. Open [http://localhost:3000](http://localhost:3000) with your browser.

### If you see this, you are set to go!
<img width="450" alt="Screen Shot 2022-07-06 at 1 07 27 PM" src="https://user-images.githubusercontent.com/29741570/177615077-9b6a75bc-0260-4d29-bb88-bd95a3140687.png">


You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

**NOTES:** 
- If you see the following error, you did not follow all the setup steps correctly and failed to add your Firebase creds. Go back and do that NOW.

<img width="1043" alt="Screen Shot 2022-07-06 at 11 18 45 AM" src="https://user-images.githubusercontent.com/29741570/177612501-c2628f18-4bbd-4de9-aae6-27ffba1172d6.png">

### Deploying on Netlify
Netlify will automatically detect your project and prepopulate the settings, but should something go wrong and it does not, here are the commands:

- Build Command: `npm run build`
- Publish directory: `.next`

#### Additional Steps to Take on Netlify
- Add Environmental Variables
    - Any Enviromental variables you are using in your `.env` file should be added to Netlify. 
        - Go to Site settings > Build & deploy > Environment > Environment variables and the keys and values there.

- Update Firebase URL Settings
    - In Firebase under Authentication select sign in methods, scroll to Authorized domains. Add your Netlify URL.
        
## Learn More about Next.js
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial. -->


# GameRsvp NSS Front-end Capstone - Cameron Dorris  [![Netlify Status](https://api.netlify.com/api/v1/badges/f3a1b9d7-f222-4e90-9e80-be524c560fcd/deploy-status)](https://app.netlify.com/sites/fabulous-clafoutis-c889b5/deploys)

The GameRsvp Front-end Capstone project was designed to help avid gamers and their close knit community schedule gaming sessions together through the hectic day to day activities of each gamer's busy everyday life. The app allows a user to create a "game session" and make a post for all other users to see. The post will contain general information about that session including what game will be played, what day the game will be played, and an approximate time of day. Other users will be able to RSVP to the session with a click of a button (will attend, won't attend, might attend options). An RSVP list will be created from the users who have made an RSVP click to that post and the RSVP list will display that user's username under one of the RSVP sections (Attending, Not Attending, Might Attend). Users will be able to see when their friends or other gaming aquaintances are gaming and what games they will be playing and the app will hopefully allow for a greater frequency of sessions where friends can game together. 

fabulous-clafoutis-c889b5.netlify.app

## About the User <!-- This is a scaled down user persona -->
- The ideal user for this application is any avid video gamer with a busy everyday  life.
- They have a busy day to day life and unpredictable schedule so coordinating gaming sessions and online play with friends is often difficult and leads to less and less online play with close friends.
- The problem this app solves for them is it allows users to schedule online gaming session for a game they intend to play and provide, in advance, a general day and time for their friends and other users to see in hopes that an advanced posting of a session will lead to greater ease in coordinating busy schedules so that gaming friends can increasingly play together even during busy day to day lives.

## Features <!-- List your app features using bullets! Do NOT use a paragraph. No one will read that! -->
- When a gaming session is created a post is rendered to the DOM. Other users can see the post and the post details. The post is able to be edited or deleted by the post creator.
- Other app users can see each post and the post details and choose to RSVP to the post with a click of a button that will increment and record the username on the click event. The username and RSVP counts are stored in the post object and used to create and RSVP list that will be rendered to the DOM with the click of a button.
- For game inspiration: External API game database was used to generate additional games that users can view details of, including screenshots, in case they are on the search for a new video game to sample.
- Game session posts can also be filtered on day of week and approximate time of day as well as searched in the search bar.

## Video Walkthrough of APP NAME <!-- A loom link is sufficient -->


## Relevant Links <!-- Link to all the things that are required outside of the ones that have their own section -->

- [Check out the deployed site](#https://app.netlify.com/sites/fabulous-clafoutis-c889b5/configuration/general)

## Project Screenshots <!-- These can be inside of your project. Look at the repos from class and see how the images are included in the readme -->
<img width="1148" alt="Your Alt" src="your-link.png">

## Contributors
- [Cameron Dorris](https://github.com/scdorr86)
        
