const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArr = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"]

/* Declaring the alternative text for each image file */
const imgAlts = [
    {altText: "Photo 1- Mountain Trail Path"},
    {altText: "Photo 2 - Mountain Peak and Trail"},
    {altText: "Photo 3 - Orange Flowers"},
    {altText: "Photo 4 - Desert Mountain View"},
    {altText: "Photo 5 - Sunrise in Dessert"}

]
/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
