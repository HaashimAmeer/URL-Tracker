//variables for program
let myLeads = [];

//references to HTML element
//set to const since these variables won't be reassigned later in program
const saveBtn = document.getElementById("save-btn"); //refers to save
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const saveTabBtn = document.getElementById("saveTab-btn");

//handling any existing keys
//var stores an array // grabbed from localStorage as string and parsed by JSON
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
    <li> 
        <a target='_blank' href='${leads[i]}'> ${leads[i]}</a>
    </li>`;
  }
  ulEl.innerHTML = listItems;
}

//functions/event listeners
saveBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value); //adds values to array which contains each URL
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads)); //since localStorage only handles k/v pairs of strings, need to use JSON.stringify to convert array to string form
  render(myLeads);
});

saveTabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

//takes care of deleting values in localStorage, array within program, and clearing DOM
deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads.splice(0, myLeads.length);
  render(myLeads);
});
