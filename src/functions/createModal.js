export const getModal = () => {
  const modal = document.querySelector("dialog") || createModal();
  return modal;
};

const createModal = () => {
  const body = document.querySelector("body");
  const modal = document.createElement("dialog");
  modal.classList.add("modal");
  const form = document.createElement("form");
  form.classList.add("form-task");
  form.method = "dialog";
  modal.append(form);
  body.append(modal);
  return modal;
};
