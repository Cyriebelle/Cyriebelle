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
for (let i = 0; i < imageArray.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/' +imageArray[i]);
    newImage.setAttribute('alt', imgAlts[i].altText)
    thumbBar.appendChild(newImage)
    
}

thumbBar.addEventListener("click", (event) => {
    displayedImage.setAttribute('src', event.target.getAttribute('src'));
    displayedImage.setAttribute('alt', event.target.getAttribute('alt'));
})

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
    const currentClass = btn.getAttribute("class");
    if (currentClass === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Dark overlay
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0)"; // Transparent overlay
    }
});
