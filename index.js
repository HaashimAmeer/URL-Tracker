//variables for program
let myLeads = [];

//references to HTML element
//set to const since these variables won't be reassigned later in program
const saveBtn = document.getElementById("save-btn"); //refers to save
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

//functions/event listeners
saveBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
});

//render function needed (implementation below)
for (let i = 0; i < myLeads.length; i++) {
  ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
}
