/*
Name: Mariah Jurao
File: main.js
Date: March 18, 2025
Description: This is the javascript code for the silly story generator. */


const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// Function to choose a random value from the array. 
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// These are the possible value that you can get from the array. 
const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

// Event Listener for the randomize button. 
randomize.addEventListener('click', result);

// This is the function to generate a display the customized story. 
function result() {
  let newStory =  storyText;
  
  // This randomly select value from the placeholder. 
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  // Replace the placeholder in the story template with chosen values.
  newStory = newStory.replaceAll(":insertx:", xItem);
  newStory = newStory.replaceAll(":inserty:", yItem);
  newStory = newStory.replaceAll(":insertz:", zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }
  
  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300 / 14)} stone`;
    const temperature =  `${Math.round((94 -32) * (5/9))} centigrade`;
    newStory = newStory.replaceAll("300 pounds", weight);
    newStory = newStory.replaceAll("94 fahrenheit", temperature);
    
  }
  
  // Displays the customized story
  story.textContent = newStory;
  story.style.visibility = 'visible';
  }