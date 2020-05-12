/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

// In this project I'm aiming for the "Exceeds Expectations" grade

/***
 * `quotes` array
 ***/
quotes = [
  {
    quote:
      "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
    source: "Sirius Black",
    citation: "Harry Potter and the Goblet of Fire",
    year: 2000,
    tags: ["Fiction", "Magic"],
  },
  {
    quote: "Your secret is safe with my indifference",
    source: "Lord Percival Fredrickstein von Musel Klossowski de Rolo III",
    citation: "Critical Role, C1 Episode 45",
    year: 2016,
    tags: ["Fiction", "Dungeons and Dragons"],
  },
  {
    quote: "Whenever people agree with me I feel I must be wrong.",
    source: "Oscar Wilde",
    tags: ["Non-fiction"],
  },
  {
    quote: "I told you I was ill.",
    source: "Spike Milligan",
    citation: "Spike Milligan's gravestone",
    year: 2002,
    tags: ["Non-fiction", "Comedians"],
  },
  {
    quote: "One small step for a man, one giant leap for mankind",
    source: "Neil Armstrong",
    year: 1992,
    tags: ["Historical", "Space-travel", "Non-fiction"],
  },
];

/***
 * `getRandomQuote` function
 ***/

/**
 * This function returns a random quote object from an array of objects in
 * the quotes array
 *
 * @return {object} An object from the quotes array;
 *
 */

function getRandomQuote() {
  let randomNumber = Math.round(Math.random() * (quotes.length - 1)); //generates a random number 0-4;
  return quotes[randomNumber]; //returns the object with the index determined above.
}

/***
 * `changeBackgroundColor` function
 ***/
/**
 * This function generates a random RGB value and changes the body html style to it.
 *
 */

function changeBackgroundColor() {
  //generates a random RGB value and stores it in randomColor variable
  let randomColor = `rgb(${generateRGBValue()},${generateRGBValue()},${generateRGBValue()})`;
  document.body.style.backgroundColor = randomColor; //alters the body's css properties to the random color

  //a sub function which generates random RGB values between 0 and 255
  function generateRGBValue() {
    return Math.round(Math.random() * 255);
  }
}

/***
 * `printQuote` function
 ***/

/**
 * this function takes a randomly generated quote object from the
 * getRandomQuote() function and returns a html string
 * the string is comprised of the quote and the source
 * the function will check if the citation and year properties are
 * present and print them within span tags if they are.
 *
 */

function printQuote() {
  let randomQuoteObj = getRandomQuote();

  let htmlString = `<p class = "quote">${randomQuoteObj.quote}</p>
  <p class = "source">${randomQuoteObj.source}`;

  if (randomQuoteObj.citation) {
    htmlString += `<span class = "citation"> ${randomQuoteObj.citation}</span>`;
  }

  if (randomQuoteObj.year) {
    htmlString += `<span class = "year"> ${randomQuoteObj.year}</span>`;
  }

  //iterates through the object's tag array and adds it to the html string
  //if they are present
  if (randomQuoteObj.tags) {
    for (let i = 0; i < randomQuoteObj.tags.length; i++) {
      htmlString += `<p>#${randomQuoteObj.tags[i]}</p>`;
    }
  }

  htmlString += "</p>";

  document.getElementById("quote-box").innerHTML = htmlString; //alters the quote box to the generated string

  changeBackgroundColor(); //alters background colour after every click
}

setInterval(printQuote, 10000); //This will invoke the printquote fucntion every 10 seconds.

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
