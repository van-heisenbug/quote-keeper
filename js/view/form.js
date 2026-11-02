// # IMPORTS
import { ERROR_CLASS, SUCCESS_CLASS } from "./constants/form-constants.js";

export function Form({ quoteInput, authorInput, sourceInput } = {}) {
  if (!quoteInput || !authorInput || !sourceInput) {
    throw new Error("Form() needs { quoteInput, authorInput, sourceInput }.");
  }

  const LABELS = { quote: "Quote", author: "Author", source: "Source" };
  const inputs = {
    quote: quoteInput,
    author: authorInput,
    source: sourceInput,
  };

  const getFormEntry = () => {
    const entry = {};
    const errors = _validateEntry();

    for (const [key, inputField] of Object.entries(inputs)) {
      if (errors[key]) {
        _onError(inputField, errors[key]);
      } else {
        _onSuccess(inputField);
        entry[key] = inputField.value.trim();
      }
    }

    const hasErrors = Object.keys(errors).length > 0;

    return hasErrors ? null : entry;
  };

  const _validateEntry = () => {
    const errors = {};

    for (const [key, inputField] of Object.entries(inputs)) {
      if (inputField.value.trim() === "") {
        errors[key] = `${LABELS[key]} cannot be empty.`;
      }
    }

    return errors;
  };

  const clearFormEntry = () => {
    const fields = Object.values(inputs);

    fields.forEach((field) => {
      const formControl = field.closest(".quote-form__control");

      field.value = "";
      formControl.classList.remove(ERROR_CLASS, SUCCESS_CLASS);
      formControl.querySelector(".quote-form__control-check").textContent = "";
    });
  };

  const _onError = (element, message) => {
    const formControl = element.closest(".quote-form__control");
    const messageDisplay = formControl.querySelector(
      ".quote-form__control-check",
    );

    formControl.classList.remove(SUCCESS_CLASS);
    formControl.classList.add(ERROR_CLASS);
    messageDisplay.textContent = message;
  };

  const _onSuccess = (element) => {
    const formControl = element.closest(".quote-form__control");
    const messageDisplay = formControl.querySelector(
      ".quote-form__control-check",
    );

    formControl.classList.remove(ERROR_CLASS);
    formControl.classList.add(SUCCESS_CLASS);
    messageDisplay.textContent = "";
  };

  return {
    getFormEntry,
    clearFormEntry,
  };
}
