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
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += "<li>" + myLeads[i] + "</li>";
  }

  ulEl.innerHTML = listItems;
}
