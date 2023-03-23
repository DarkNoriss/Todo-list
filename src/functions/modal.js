export const getModal = () => {
  const modal = document.querySelector("dialog") || createModal();
  return modal;
};

const createModal = () => {
  const modal = document.createElement("dialog");
  modal.classList.add("modal");

  const form = document.createElement("form");
  form.classList.add("form-task");
  form.method = "dialog";

  const header = document.createElement("h2");
  header.innerText = "Creating task";
  form.append(header);

  const inputName = document.createElement("input");
  inputName.placeholder = "Name";
  inputName.type = "text";
  inputName.name = "task-name";
  form.append(inputName);

  const inputDesc = document.createElement("textarea");
  inputDesc.placeholder = "Description";
  inputDesc.name = "task-desc";
  inputDesc.rows = 4;
  inputDesc.cols = 50;
  form.append(inputDesc);

  const btnSub = document.createElement("button");
  btnSub.innerText = "Create";
  form.append(btnSub);

  modal.append(form);

  const body = document.querySelector("body");
  body.append(modal);

  return modal;
};
