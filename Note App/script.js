const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

/*Code for automatic music playing*/
const iframe = document.querySelector("iframe");
const playButton = document.querySelector("button"); // Adjust the selector to match your button's ID or class
let playedOnce = false; // Flag to track if the video has already played

playButton.addEventListener("click", () => {
  if (!playedOnce) {
    iframe.src += "&autoplay=1"; // Append "&autoplay=1" only if the video hasn't played yet
    playedOnce = true; // Set the flag to prevent further autoplay attempts
  }
});
/*Storage Function*/
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contentEditable", "true");
  img.src = "images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    notes.document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
