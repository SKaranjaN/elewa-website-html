// defining the interface objects for the projectItems
// JSDoc comment

/**
 * Interface for classes that represent a project.
 */
interface ProjectItem {
  title: string;
  description: string;
  tag: string;
  imgSrc: string;
}

// This is the data contained in the project one as displayed on the html

// project one
const projectOne: ProjectItem = {
  title: "Introducing conversational learning",
  description: "Eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam dolorem ipsum quia",
  tag: "Education",
  imgSrc: "/src/images/Education.jpg"
};
console.log(projectOne)

// project two
const projectTwo: ProjectItem = {
  title: "Content Development for a sustainable future",
  description: "Eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam dolorem ipsum quia",
  tag: "Environment",
  imgSrc: "/src/images/Environment.jpg"
};
console.log(projectTwo)

// project three
const projectThree: ProjectItem = {
  title: "Largescale training for healthcare professionals",
  description: "Eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam dolorem ipsum quia",
  tag: "Healthcare",
  imgSrc: "/src/images/Healthcare.jpg"
};
console.log(projectThree)

// project four
const projectFour: ProjectItem = {
  title: "Introducing conversational learning",
  description: "Eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam dolorem ipsum quia",
  tag: "Education",
  imgSrc: "/src/images/Learning.jpg"
};
console.log(projectFour)

// linking the data interface to the html
// project one
const imageOne = document.getElementById("project-one")
const h3One = document.getElementById("h3-text-one");
const tagOne = document.getElementById("tag-one");
const description = document.getElementById("description")

imageOne.innerHTML = `<img src=${projectOne.imgSrc} />`;
h3One.innerText = (projectOne.title);
tagOne.innerHTML = `<p>${projectOne.tag}</p>`;
description.innerText = (projectOne.description);
console.log(description)

// project two
const imageTwo = document.getElementById("project-two")
const h3Two = document.getElementById("h3-text-two");
const tagTwo = document.getElementById("tag-two");
const descriptionTwo = document.getElementById("description-two")

imageTwo.innerHTML = `<img src=${projectTwo.imgSrc} />`;
h3Two.innerText = (projectTwo.title);
tagTwo.innerHTML = `<p>${projectTwo.tag}</p>`;
descriptionTwo.innerText = (projectTwo.description);

// function that allows the carousel to respond
const leftBtn = document.getElementById("left"); // targeting the buttons
const rightBtn = document.getElementById("right");
const projectsContainer = document.querySelector(".projects") as HTMLElement; // targeting the projects container. The HTMLElements helps in making the style a property of the container.

leftBtn?.addEventListener("click", function handleClick (event) {
  console.log("clicked")
  projectsContainer.style.transition = "transform 0.5s";
  projectsContainer.style.transform = "translateX(-200px)";
});

rightBtn?.addEventListener("click", function handleClick (event) {
  console.log("clicked")
  projectsContainer.style.transition = "transform 0.5s";
  projectsContainer.style.transform = "translateX(200px)";
});

const arr = ["1", "2", "3"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}
