/*
addEventListener is a method on DOM elements that attaches an event handler to the element.It listens for 
a specific type of event (e.g., click, mouseover, keydown, submit) and runs the provided callback function when 
the event occurs.
querySelector is a method provided by the Document Object Model (DOM).
*/

// for the first button element
const button_1 = document.querySelector("button");
button.addEventListener("click", () => {
console. log("The button was clicked!");
});

// select with id
<button id="my-button-id">Click here</button>
const button_2 = document.querySelector("#my-button-id");

// select with class
<button class="my-button-class">Click Here</button>
const button_3 = document.querySelector(".my-button-class");

//select with attribute
<button data-action="submit">Submit</button>
const button_4 = document.querySelector("[data-action='submit']");

// select with button type
<button type="submit">Submit</button>
const button_5 = document.querySelector("button[type='submit']");

//select with position (structure in DOM)
<div>
  <button>First Button</button>
  <button>Second Button</button>
</div>
const button_6 = document.querySelector("div button:nth-of-type(2)");

// select all
const buttons = document.querySelectorAll("button");
