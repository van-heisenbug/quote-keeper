//
import { modalDom } from "../view/modal-dom.js";
import { modal } from "../view/modal.js";

export function ModalController() {
  const modalContent = modalDom.modalContent;

  const init = () => {
    modalContent.addEventListener("click", (e) => {
      const target = e.target;
      if (!target.closest("button")) return;

      const answerBtn = target.closest("button");

      if (answerBtn.id === "yes-btn") {
        console.log("Proceed with trashing");
      } else if (answerBtn.id === "no-btn") {
        modal.close();
      }
    });
  };

  return { init };
}
