// //keyboard events are so called global events because they do not happen on one specific element
// //and for global events we listen on whole document(document is a big object which contains bunch of methods for all kinds of stuff)
// //when keydown like event occurs javascript generates an object and that object contains all the
// //information about the event and we can then acces that object in the evnethandler function
// //to access that object we need to give function a parameter(e) which stands for event so when event
// //occurs javascript will call eventhandler function with event(e) object as an argument

// document.addEventListener("keydown", function (e) {
//   // console.log(e.key); //'Escape'

//   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
//     closeModal();
//   }
// });

"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
const btnContainer = document.querySelector(".btn-container");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("show-modal")) {
    openModal();
  }
});

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
