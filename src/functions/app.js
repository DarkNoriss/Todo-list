import { getModal } from "./modal";

const myTasks = loadData() || [];

export const createApp = () => {
  createNavAndList();
  fillNav();
  if (myTasks != false) drawTasks();
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

const drawTasks = () => {
  const listGrid = document.querySelector(".list-div");
  // clear previous list
  listGrid.innerHTML = "";

  myTasks.forEach((task) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    const name = document.createElement("p");
    name.classList.add("task-name");
    name.innerText = `${task.name}`;
    taskDiv.append(name);

    const desc = document.createElement("p");
    desc.classList.add("task-desc");
    desc.innerText = `${task.desc}`;
    taskDiv.append(desc);
    listGrid.append(taskDiv);
  });
};

export const submit = (event) => {
  const taskName = event.target["task-name"].value;
  const taskDesc = event.target["task-desc"].value;

  const task = {
    name: taskName,
    desc: taskDesc,
  };
  // push into tasksarray, update localstorage and draw task grid
  myTasks.push(task);
  updateData();
  drawTasks();
  // reset form
  const form = document.querySelector(".form-task");
  form.reset();
};

function loadData() {
  const tasksArrayStr = localStorage.getItem("tasksArray");
  const tasksArray = JSON.parse(tasksArrayStr);
  return tasksArray;
}
function updateData() {
  localStorage.setItem("tasksArray", JSON.stringify(myTasks));
}
