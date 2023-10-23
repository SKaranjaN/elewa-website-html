// defining the interface objects for the projectItems
// JSDoc comment
// This is the data contained in the project one as displayed on the html
// project one
var projectOne = {
    title: "Introducing conversational learning",
    description: "Eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam dolorem ipsum quia",
    tag: "Education",
    imgSrc: "/src/images/Education.jpg"
};
console.log(projectOne);
// project two
var projectTwo = {
    title: "Content Development for a sustainable future",
    description: "Eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam dolorem ipsum quia",
    tag: "Environment",
    imgSrc: "/src/images/Environment.jpg"
};
console.log(projectTwo);
// project three
var projectThree = {
    title: "Largescale training for healthcare professionals",
    description: "Eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam dolorem ipsum quia",
    tag: "Healthcare",
    imgSrc: "/src/images/Healthcare.jpg"
};
console.log(projectThree);
// project four
var projectFour = {
    title: "Introducing conversational learning",
    description: "Eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam dolorem ipsum quia",
    tag: "Education",
    imgSrc: "/src/images/Learning.jpg"
};
console.log(projectFour);
// function that allows the carousel to respond
var leftBtn = document.getElementById("left"); // targeting the buttons
var rightBtn = document.getElementById("right");
var projectsContainer = document.querySelector(".projects"); // targeting the projects container. The HTMLElements helps in making the style a property of the container.
leftBtn === null || leftBtn === void 0 ? void 0 : leftBtn.addEventListener("click", function handleClick(event) {
    console.log("clicked");
    projectsContainer.style.transition = "transform 0.5s";
    projectsContainer.style.transform = "translateX(-200px)";
});
rightBtn === null || rightBtn === void 0 ? void 0 : rightBtn.addEventListener("click", function handleClick(event) {
    console.log("clicked");
    projectsContainer.style.transition = "transform 0.5s";
    projectsContainer.style.transform = "translateX(200px)";
});
