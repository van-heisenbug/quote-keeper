// # IMPORTS
const modalBackdrop = document.querySelector(".modal-backdrop");
const modalContent = document.querySelector(".modal");

export function Modal() {
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

  function editModalData() {
    // header
    const headerFragment = document.createDocumentFragment();
    const headerMessage = document.createElement("p");

    headerMessage.textContent = `Are you sure want to move this Quote to your Trash?`;
    headerFragment.appendChild(headerMessage);

    // body
    const bodyFragment = document.createDocumentFragment();
    const trashMessage = document.createElement("p");

    trashMessage.textContent = `You are about to Trash quote_id: ${""}`;
    bodyFragment.appendChild(trashMessage);

    // footer
    const footerFragment = document.createDocumentFragment();
    const trashBtn = document.createElement("button");

    trashBtn.type = "button";
    trashBtn.classList.add("confirm-delete");
    footerFragment.appendChild(trashBtn);
  }

  return {
    openModal,
    closeModal,
    isOpen,
    createModalContent,
    removeModalContent,
  };
}
