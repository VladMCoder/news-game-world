const ngwOpenModalBtn = document.querySelector(".ngw-header-mobile-menu-container");
const ngwModal = document.querySelector(".ngw-header-container-overlay");
const ngwCloseModalBtn = document.querySelector(".ngw-header-mobile-menu-close-button-container");

ngwOpenModalBtn.addEventListener("click", ngwToggleModal);
ngwCloseModalBtn.addEventListener("click", ngwToggleModal);

function ngwToggleModal() {
    ngwModal.classList.toggle("ngw-hidden");
}