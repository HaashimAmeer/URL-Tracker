let myLeads = []; //array of strings that stores all URLs

//references to HTML elements || set to const type since these variables won't be reassigned later in program
const saveBtn = document.getElementById("save-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const saveTabBtn = document.getElementById("saveTab-btn");

//handling any existing keys
//variable stores the array (initially grabbed from localStorage as string and parsed by JSON)
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

//saves & renders an inputted URL
saveBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value); //adds input value to arrray
  inputEl.value = ""; //resets input value
  localStorage.setItem("myLeads", JSON.stringify(myLeads)); //resets existing k/v pair with new string that contains newly added URL
  render(myLeads); //renders new URL on screen
});

//saves & renders current tab's URL
saveTabBtn.addEventListener("click", function () {
  //works with Chrome API to determine current tab URL & adds as new URL
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

//deletes values in localStorage, myLeads[], and clears DOM
deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads.splice(0, myLeads.length);
  render(myLeads);
});

//renders all URLs in array to DOM
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
