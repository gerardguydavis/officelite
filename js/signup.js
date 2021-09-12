//FORM VALIDATION

const signupForm = document.getElementById("signup-form");
const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const phoneInput = document.getElementById("phone-input");
const companyInput = document.getElementById("company-input");
const planSelector = document.getElementById("plan-select");
const planSelection = document.getElementById("plan-selection");
const dropButton = document.getElementById("form-drop-button");
const plans = document.getElementById("plans");
const basic = document.getElementById("basic-option");
const pro = document.getElementById("pro-option");
const ultimate = document.getElementById("ultimate-option");
const basicPrice = document.getElementById("basic-price");
const proPrice = document.getElementById("pro-price");
const ultimatePrice = document.getElementById("ultimate-price");
const submit = document.getElementById("form-submit");
const requiredInputs = [nameInput, emailInput, phoneInput];


signupForm.addEventListener('submit', validate);

function validate() {
    for (let input of requiredInputs) {
        if (input.value = "") {
            input.classList.add("invalid");
            console.log("OOPS");
        }
    }
};

function closeDrop() {
    plans.classList.add("hide");
    dropButton.classList.remove("open");
    dropButton.classList.add("close");
}

planSelector.addEventListener("click", function () {
    if (plans.classList.contains("hide")) {
        plans.classList.remove("hide")
        dropButton.classList.remove("close");
        dropButton.classList.add("open");
    } else {
        closeDrop();
    }
});

basic.addEventListener("click", function () {
    planSelection.innerHTML = basicPrice.innerHTML;
    if (pro.classList.contains("selected")) {
        pro.classList.remove("selected");
    } if (ultimate.classList.contains("selected")) {
        ultimate.classList.remove("selected");
    }
    basic.classList.add("selected");
    closeDrop();
});

pro.addEventListener("click", function () {
    planSelection.innerHTML = proPrice.innerHTML;
    if (basic.classList.contains("selected")) {
        basic.classList.remove("selected")
    } if (ultimate.classList.contains("selected")) {
        ultimate.classList.remove("selected");
    }
    pro.classList.add("selected");
    closeDrop();
});

ultimate.addEventListener("click", function () {
    planSelection.innerHTML = ultimatePrice.innerHTML;
    if (basic.classList.contains("selected")) {
        basic.classList.remove("selected")
    } if (pro.classList.contains("selected")) {
        pro.classList.remove("selected");
    }
    ultimate.classList.add("selected");
    closeDrop();
});

document.addEventListener("keydown", function (e) {
    if (e.key == "Escape") {
        closeDrop();
    }
})