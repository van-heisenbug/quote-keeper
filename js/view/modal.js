// # IMPORTS
const modalBackdrop = document.querySelector(".modal-backdrop");
const modalContent = document.querySelector(".modal");

export function Modal({ headerFragment, bodyFragment, footerFragment }) {
  if (
    !(headerFragment instanceof Node) ||
    !(bodyFragment instanceof Node) ||
    !(footerFragment instanceof Node)
  ) {
    throw new TypeError("Modal expects Node (DocumentFragment) arguments.");
  }

  let _isOpen = false;

  function isOpen() {
    return _isOpen;
  }

  function openModal() {
    // closeModal();

    createModalContent();
    modalBackdrop.style.display = "flex";
    document.body.classList.add("modal--open");
    _isOpen = true;
  }

  function closeModal() {
    removeModalContent();
    modalBackdrop.style.display = "none";
    document.body.classList.remove("modal--open");
    _isOpen = false;
  }

  function createModalContent() {
    modalContent.append(headerFragment, bodyFragment, footerFragment);
  }

  function removeModalContent() {
    modalContent.removeChild(headerFragment);
    modalContent.removeChild(bodyFragment);
    modalContent.removeChild(footerFragment);
  }

  return {
    openModal,
    closeModal,
    isOpen,
    createModalContent,
    removeModalContent,
  };
}
