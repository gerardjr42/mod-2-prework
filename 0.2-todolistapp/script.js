const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if(inputBox.value === '') {
    alert("Please write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; //crossout line icon
    li.appendChild(span);
  }
  inputBox.value ='';
  saveData();
}


//js for the x button and crossout
listContainer.addEventListener("click", function(e) {
  if(e.target.tagName === 'LI') {
    e.target.classList.toggle("checked"); //checks if clicked
    saveData();
  } else if(e.target.tagName === "SPAN") {
    e.target.parentElement.remove(); //removes element if spanned
    saveData();
  }
}, false);

//Adds by not just clicking on add icon but with "enter"
inputBox.addEventListener("keypress", function(e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

//above code is good but deletes our entries if refreshing page
//we need to save our data on it

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

//It saves data now we want app to display that Data upon reopening

function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
