import Throttle from "lodash.throttle";
// // import form from "../css/03-feedback.css"

const form = document.querySelector("feedback-form");
const formData = {"email":"","message":""};

// const form = {
//     input: document.querySelector("input"),
//     textarea: document.querySelector("textarea"),
// }

// refs.form.addEventListener('input', throttle(onTextAreaInput, 500));

// function onTextAreaInput() {
//     formData[e.target.name] = e.target.value;
//     localStorage.getItem()
// }

form.addEventListener("input", Throttle((event) => {
        if (event.target.nodeName==="INPUT") {
            formData.email = event.target.value;
        } else if (event.target.nodeName==="TEXTAREA") {
            formData.message = event.target.value;
        }
        if (formData) {
            localStorage.setItem("feedback-form-state", JSON.stringify(formData));
        }
    }, 500));
if (localStorage.getItem("feedback-form-state")) { 
        data = JSON.parse(localStorage.getItem("feedback-form-state"));
    }
    email.value = formData.email;
message.value = formData.message;
