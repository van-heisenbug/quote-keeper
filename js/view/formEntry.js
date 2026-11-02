// # IMPORTS
import { formDom } from "./dom.js";

export function getFormEntry(e) {
  e.preventDefault();

  const form = formDom();
  const quoteInput = form.quoteInput;
  const authorInput = form.authorInput;
  const sourceInput = form.sourceInput;

  const hasError = [];

  const entries = [quoteInput, authorInput, sourceInput];

  entries.forEach((element) => {
    if (element.value === "") {
      const inputName =
        element.id.trim().charAt(0).toUpperCase() + element.id.trim().slice(1);

      onError(element, `${inputName} cannot be empty.`);
      hasError.push(element);
    } else {
      onSuccess(element);
    }
  });

  if (hasError.length > 0) {
    return;
  }

  const cleanEntry = {
    quote: quoteInput.value.trim(),
    author: authorInput.value.trim(),
    source: sourceInput.value.trim(),
  };

  quoteInput.value = "";
  authorInput.value = "";
  sourceInput.value = "";

  return cleanEntry;
}

function onError(element, message) {
  const formControl = element.parentElement;
  const messageDisplay = formControl.querySelector(
    "#quote-form__control-check",
  );

  formControl.classList.remove("success");
  formControl.classList.add("error");
  messageDisplay.textContent = message;
}

function onSuccess(element) {
  const formControl = element.parentElement;

  formControl.classList.remove("error");
  formControl.classList.add("success");
}

export function clearFormEntry() {
  const form = formDom();

  const quoteInput = form.quoteInput;
  const authoInput = form.authorInput;
  const sourceInput = form.sourceInput;

  const fields = [quoteInput, authoInput, sourceInput];

  fields.forEach((e) => {
    e.value = "";
    e.parentElement.classList.remove("error");
    e.parentElement.classList.remove("success");
  });
}
