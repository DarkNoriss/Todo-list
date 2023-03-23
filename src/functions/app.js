import { getModal } from "./modal";

export const createApp = () => {
  createNavAndList();
  fillNav();
};

const createNavAndList = () => {
  const navDiv = document.createElement("nav");
  navDiv.classList.add("nav-bar");
  const listDiv = document.createElement("div");
  listDiv.classList.add("list-div");

  const mainDiv = document.querySelector(".main");
  mainDiv.append(navDiv);
  mainDiv.append(listDiv);
};

const fillNav = () => {
  const navDiv = document.querySelector(".nav-bar");

  const createTaskBtn = document.createElement("button");
  createTaskBtn.innerText = "Create Task";
  createTaskBtn.addEventListener("click", addTask);

  navDiv.append(createTaskBtn);
};

const addTask = () => {
  const modal = getModal();
  modal.showModal();
};
