// Pseudo code the function

// idea -> Whenever I click on any of the cards, all the cards and its
// subelements should turn into a color that is different than the one
// they already have

// This transition should happen with certain ease

// Requirements

// - The box-shadow of all card elements should change colors
// - The img within all cards should change colors
// - The card-bottom div within all cards should change colors
// - all shadows, img and card bottom should always have the same color
// - two different cards cannot have the same color
// - valid colors are the 4 variables declared in scss config file

// So if I deconstruct this

// Select all cards with query selector -> cards
// Add a click event listener to cards
// prevent default
// iterate through all card classes
// if the card has the CSS class blue, remove it and add class pink
// if the card has the CSS class green, remove it and add class blue
// if the card has the CSS class blue, remove it and add class green
// if the card has the CSS class green, remove it and add class pink
// if the card has the CSS class pink, remove it and add class green
// Same goes for the rest of the subelements


$(document).ready(function(){

  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
  card.addEventListener('click', (e) => {
    e.preventDefault();
    rotateColor(cards);
  })
})
});


const rotateColor = (cards) => {
  cards.forEach((card) => {
    if (card.classList.find('.turq-shadow') === true ) {
      console.log('turq shadow found');
    }
    else {
      console.log('turq shadow not found');
    }
  });
}







