// # IMPORTS
import { modalDom } from "./modal-dom.js";

/**
 * SINGLETON IIFE
 */
export const modal = (() => {
  const htmlBody = document.body;
  const modalBackdrop = modalDom.modalBackdrop;
  const modalContent = modalDom.modalContent;

  let _isOpen = false;

  // Expects an Object
  function open({ purpose, payload } = {}) {
    if (_isOpen) {
      close();
    }

    document.body.classList.add("modal--open"); // Locks scrolling
    _isOpen = true;

    switch (purpose) {
      case "toEdit":
        // modalContent.append();
        break;

      case "toTrash":
        modalContent.append(createTrashUI(payload));
        break;

      case "toViewTrash":
        // modalContent.append();
        break;
    }

    modalBackdrop.style.display = "flex";
  }

  // Ensures modalContent has no old data
  function close() {
    if (!_isOpen) {
      return;
    }

    modalBackdrop.style.display = "none";
    modalContent.replaceChildren(); // As per AI, the new modern way
    htmlBody.classList.remove("modal--open"); // Removes scroll lock

    if (htmlBody.classList.length === 0) {
      htmlBody.removeAttribute("class");
    }

    _isOpen = false;
  }

  // Confirmation UI - return Fragment
  function createTrashUI({ quote } = {}) {
    const fragment = document.createDocumentFragment();

    const modalHeader = document.createElement("div");
    const modalBody = document.createElement("div");
    const modalFooter = document.createElement("div");

    const question = document.createElement("h3");
    const quoteToTrash = document.createElement("p");
    const yesBtn = document.createElement("button");
    const noBtn = document.createElement("button");

    modalHeader.classList.add("modal_header", "trash_header");
    modalBody.classList.add("modal_body", "trash_body");
    modalFooter.classList.add("modal_footer", "trash_footer");

    question.classList.add("trash_question");
    question.textContent =
      "Are you sure you want to move this Quote to your Trash?";

    quoteToTrash.classList.add("quote_to_trash");
    quoteToTrash.textContent = quote;

    yesBtn.classList.add("yes-btn");
    yesBtn.id = "yes-btn";
    yesBtn.type = "button";
    yesBtn.textContent = "Yes";

    noBtn.classList.add("no-btn");
    noBtn.id = "no-btn";
    noBtn.type = "button";
    noBtn.textContent = "No";

    modalHeader.appendChild(question);
    modalBody.appendChild(quoteToTrash);
    modalFooter.append(yesBtn, noBtn);

    fragment.append(modalHeader, modalBody, modalFooter);

    return fragment;
  }

  // Form UI - return Fragment
  function createEditUI() {}

  // UI for list of Trashed Quotes
  function createTrashFolderUI() {}

  return { open, close };
})();
