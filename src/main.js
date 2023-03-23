import "./style/main.scss";
import { createHeader } from "./functions/createHeader";
import { createApp } from "./functions/app";
import { createFooter } from "./functions/createFooter";

window.onload = () => {
  createHeader();
  createApp();
  createFooter();
};
