import { Question } from "./question";
import { isValid } from "./utils";
import "./styles.css";

const form = document.getElementById("form");
const input = form.querySelector("#question__input");
const submitButton = form.querySelector("#submit");

window.addEventListener("load", Question.renderList);
form.addEventListener("submit", submitFormHandler);

input.addEventListener("input", () => {
  submitButton.disabled = !isValid(input.value);
});

function submitFormHandler(event) {
  event.preventDefault();

  if (isValid(input.value)) {
    const question = {
      text: input.value.trim(),
      date: new Date().toJSON(),
    };

    submitButton.disabled = true;
    // Async request to a server to save question
    Question.create(question).then(() => {
      input.value = "";
      input.className = "";
      submitButton.disabled = false;
    });
  }
}
