# The Super Heroes/Villains Website

The purpose of this project is to build a website where you lookup Super Heroes/Villain information. 
While browsing the internet, I could only find Super Heroes/Villain websites that were limited to a single comic book universe, DC-only, Marvel-only, etc. 
This website combines Super Heroes/Villains data from Marvel, DC and more!. The goal of this website is to make it to the number 1 site for all  Super Heroes/Villains information. 


This is a project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Here is the URL for the page: https://master--strong-basbousa-98aece.netlify.app/

## The website is divided into 3 main Sections, HOME, SEARCH, FAVORITES

**HOME**
This page contains a list of all Super Heroes/Villains. Please scroll thru the list. 
Click on the image for more information about the character.
Click on the "Add to Favorites" button to add to your personal list of favorite characters

**SEARCH**
You can search for a specific character on this page.

**FAVORITES**
This page your personal list of favorite characters.
You can delete any characters you no longer want in your favorites

### Technical Setup
This website gathers data from 2 separate APIs. 
`https://www.superheroapi.com/` -- This allows us to search by Character Name and ID and other stats, But doesn't provides a full list of characters all at once. This is suitable for searching. 2 types of Fetch calls are being made to this API -- for SEARCH page & CHARACTER page.

`https://akabab.github.io/superhero-api/api` -- This provides a full list of characters all at once. This is suitable for the Home Page. 1 Fetch call is being made to this API -- for HOME page.

**There are 6 components and 5 pages**

The Favorites page stores the favorite characters in Local Storage of the browser

### Update 1 -- Oct 3rd 2023
- `A Slider has been added to the Home Page`
- `A Search preview has been added to the Search Page`
- `Internal features have also been updated, more CSS, custom hook for fetch calls, etc`


### FUTURE FEATURES 
- `Add more CSS styling`
- `Add a random back ground for each page`
- `Add Filter Search bar for HomePage`
- `Add Filter Button for each comic book universe, Hero and Villains, to help with searching`
- `Upgrade the use of Local Storage to Redux/Context`
