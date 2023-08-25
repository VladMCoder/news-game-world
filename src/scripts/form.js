import Notiflix from 'notiflix';

const ngwFormSubscription = document.querySelector(".ngw-footer-form");
const ngwFormSubscriptionInput = document.querySelector(".ngw-footer-form-input");

function subscribeForm(e) {
    e.preventDefault();

    const messageForUserFirst = "Please enter your email";
    const messageForUserSecond = "You are successfully subscribed";

    const emptyInput = ngwFormSubscriptionInput.value;
    const fulledInput = !ngwFormSubscription.value;

    if (emptyInput === "") {
        Notiflix.Notify.warning(messageForUserFirst);
    } else if (fulledInput) {
        Notiflix.Notify.success(messageForUserSecond);
    }

    ngwFormSubscription.reset();
}

ngwFormSubscription.addEventListener("submit", subscribeForm);