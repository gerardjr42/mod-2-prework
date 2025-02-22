let toastBox = document.getElementById("toastBox");

//Message pop-up depending on variable with icons
let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted!';
let errorMsg= '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again.' 

//Add's the success functionality to buttons, hence the div creatElement("div").
function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast"); 
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if(msg.includes("error")) {
    toast.classList.add("error");
  }
  if(msg.includes("Invalid")) {
    toast.classList.add("invalid");
  }
  //set the timout for the notification
  setTimeout(() => {
    toast.remove();
  }, 4000);
}
