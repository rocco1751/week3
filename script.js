const btnSubmit = document.querySelector("button")
const usernameInputField = document.querySelector("#username");
const userAgeInputField =document.querySelector("#age")
const LoginMessage = document.querySelector(".login-message");

btnSubmit.addEventListener("click", () => {
const usernameInput = usernameInputField.value.toLowerCase();
const userAgeInput = userAgeInputField.value;

// if(usernameInput === "harry" && userAgeInput === "11") {
//     console.log("Welcome");
//     LoginMessage.textContent = "welcome, Harry!"
//     LoginMessage.style.color = "green";
// } else {
//     LoginMessage.textContent = "Go away! You are not Harry!"
//     LoginMessage.style.color = "red";
// }

if(usernameInput !== "harry" || userAgeInput !== "11") {
    LoginMessage.textContent ="Go away! You are not Harry!";
    LoginMessage.style.color = "red";
} else {
    LoginMessage.textContent = "Welcome, Harry!";
    LoginMessage.style.color = "green";
}

});