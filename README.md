# The Super Heroes/Villains Website

The purpose of this project is to build a website where you lookup Super Heroes/Villain information. 
While browsing the internet, I could only find Super Heroes/Villain websites that were limited to a single comic book universe, DC-only, Marvel-only, etc. 
This website combines Super Heroes/Villains data from Marvel, DC and more!. The goal of this website is to make it to the number 1 site for all  Super Heroes/Villains information. 


This is a project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Here is the URL for the page: https://master--strong-basbousa-98aece.netlify.app/

## The website is divided into 3 main Sections, HOME, SEARCH, FAVORITES, Character Details

**HOME**
- `This page contains a list of all Super Heroes/Villains. Please scroll thru the list.` 
- `Click on the image for more information about the character.`
- `Click on the "Add to Favorites" button to add to your personal list of favorite characters`
- `View Characters by categories (Comic Universe: Marvel, DC, Other, more to come)`

![super1](https://github.com/mrfritzg/herovillainapi/assets/25967991/7b00fc15-a96f-42c9-ba1b-c53cf62c6cfa)

**SEARCH**
- `You can search for a specific character on this page.`
- `You can select a character from the search preview or hit ENTER/SEARCH to see all results of your search`
![super2](https://github.com/mrfritzg/herovillainapi/assets/25967991/de155b88-ebc9-49e3-9424-58d4d8152004)

![super3](https://github.com/mrfritzg/herovillainapi/assets/25967991/3771eabb-fe91-423b-808b-2f22a04e1fba)

**FAVORITES**
- `This page your personal list of favorite characters.`
- `You can delete any characters you no longer want in your favorites`
![super4](https://github.com/mrfritzg/herovillainapi/assets/25967991/6fb2bcf9-c977-45a5-ae98-f6a3191141e7)

**Character Details**
- `Click on the character to view details such as: Code Name, Full Name, POWER STATS (Combat, Durability, Intelligence, Power, Speed, Strength) Biography, and more`
- ![super5](https://github.com/mrfritzg/herovillainapi/assets/25967991/902141bf-c2a4-4487-a315-22ed8f0a5909)

### Technical Setup
This website gathers data from 2 separate APIs. 
`https://www.superheroapi.com/` -- This allows us to search by Character Name and ID and other stats, But doesn't provides a full list of characters all at once. This is suitable for searching. 2 types of Fetch calls are being made to this API -- for SEARCH page & CHARACTER page.

`https://akabab.github.io/superhero-api/api` -- This provides a full list of characters all at once. This is suitable for the Home Page. 1 Fetch call is being made to this API -- for HOME page.

**There are 6 components and 5 pages**

The Favorites page stores the favorite characters in Local Storage of the browser

### Update 1 -- Oct 3rd 2023
- `A Slider has been added to the Home Page`
- `The Home page has 3 catehgories that lists the characters by Comic Universes - Marvel , DC, Other`
- `A Search preview has been added to the Search Page`
- `Internal features have also been updated, more CSS, custom hook for fetch calls, etc`

### FUTURE FEATURES 
- `Add more CSS styling`
- `Add More Categories/Filters to the Home Page`
- `Add a Footer`
- `Improve Navigation Menu`
- `Add a random back ground for each page`
- `Upgrade the use of Local Storage to Redux/Context`
