const storyText = "It was 94 [fahrenheit] outside, so [:insertx:] went for a walk. When they got to [:inserty:], they stared in horror for a few moments, then [:insertz:]. [Bob] saw the whole thing, but was not surprised — [:insertx:] weighs 300 [pounds], and it was a hot day.";
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

const customName = "Dr.Seuss";

const ukChecked = true;

function result() {
  let newStory = storyText

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory
              .replaceAll(":insertx:", xItem)
              .replace("inserty:", yItem)
              .replace("insertz:", zItem);

    if(ukChecked === true) {
      const weight = `${Math.round(300 / 14)} stone`;
      const temperature =  `${Math.round((94 -32) * (5/9))} centigrade`;
      newStory = newStory
                  .replace("300 pounds", weight)
                  .replace("94 fahrenheit", temperature)
    }


  return `New story:
              ${newStory}`;
  }

  console.log(result());

