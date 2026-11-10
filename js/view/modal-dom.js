//
function ModalDom() {
  const modalBackdrop = document.querySelector(".modal-backdrop");
  const modalContent = document.querySelector(".modal");

  return {
    modalBackdrop,
    modalContent,
  };
}

export const modalDom = ModalDom(); // Singleton using es module's power
