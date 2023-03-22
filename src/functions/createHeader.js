export const createHeader = () => {
  const headerDiv = document.querySelector(".header");
  const headerText = document.createElement("h1");
  headerText.innerText = "Todo list";
  headerDiv.append(headerText);
};
