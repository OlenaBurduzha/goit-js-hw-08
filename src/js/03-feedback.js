import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector(".feedback-form"),
    input: document.querySelector("input"),
    textarea: document.querySelector("textarea"),
};
const STORAGE_KEY = "feedback-form-state";
const formData = {};
const getformData = localStorage.getItem(STORAGE_KEY);

refs.form.addEventListener("input", throttle(onTextAreaInput, 500));
refs.form.addEventListener("submit", throttle(onFormSudmit, 500))

function onTextAreaInput(event) {
    formData[event.target.name] = event.target.value;
    const valueFormData = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, valueFormData);
};

function onFormSudmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

if (getformData) {
    const getValue = JSON.parse(getformData);
    refs.input.value = getValue.email;
    refs.textarea.value = getValue.message;
}


