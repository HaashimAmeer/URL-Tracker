//variables for program
let myLeads = [];

//references to HTML element
//set to const since these variables won't be reassigned later in program
const saveBtn = document.getElementById("save-btn"); //refers to save
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

//handling any existing keys
//var stores an array // grabbed from localStorage as string and parsed by JSON

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

//functions/event listeners
saveBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value); //adds values to array which contains each URL
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads)); //since localStorage only handles k/v pairs of strings, need to use JSON.stringify to convert array to string form
  renderLeads();
  console.log(localStorage.getItem("myLeads"));
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
    <li> 
        <a target='_blank' href='${myLeads[i]}'> ${myLeads[i]}</a>
    </li>`;
  }
  ulEl.innerHTML = listItems;
}
