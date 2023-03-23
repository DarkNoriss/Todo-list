import "./style/main.scss";
import "./style/header.scss";
import "./style/app.scss";
import "./style/footer.scss";
import "./style/modal.scss";
import { createHeader } from "./functions/createHeader";
import { createApp } from "./functions/app";
import { createFooter } from "./functions/createFooter";

window.onload = () => {
  createHeader();
  createApp();
  createFooter();
};
