//
import { modalDom } from "../view/modal-dom.js";
import { modal } from "../view/modal.js";
import { QuoteDb } from "../model/quote-db.js";

export function ModalController() {
  const modalContent = modalDom.modalContent;

  const init = () => {
    modalContent.addEventListener("click", (e) => {
      const target = e.target;
      if (!target.closest("button")) return;

      const answerBtn = target.closest("button");

      if (answerBtn.id === "yes-btn") {
        console.log("Proceed with trashing");
        // TODO - update in memory and local storage
      } else if (answerBtn.id === "no-btn") {
        modal.close();
      }
    });
  };

  return { init };
}
