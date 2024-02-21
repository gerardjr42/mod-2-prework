const notesContainer = document.querySelector(".notes-container");

const createBtn = document.querySelector(".btn");

let notes = document.querySelectorAll(".input-box");

//Reopening saved Data
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

// Saving Data
function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

//Creating our inputbox
createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/trash-bin.gif";
  notesContainer.appendChild(inputBox).appendChild(img);
});

//Adding delete functionality
notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach(nt => {
      nt.onkeyup = function() {
        updateStorage();
      };
    });
  }
});
