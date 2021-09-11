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
    planSelection.innerHTML = "Basic Pack <span>Free</span>";
    closeDrop();
});

pro.addEventListener("click", function () {
    planSelection.innerHTML = "Pro Pack <span>$9.99</span>";
    closeDrop();
});

ultimate.addEventListener("click", function () {
    planSelection.innerHTML = "Ultimate Pack <span>$19.99</span>";
    closeDrop();
});

document.addEventListener("keydown", function (e) {
    if (e.key == "Escape") {
        closeDrop();
    }
})

/*for (let input of requiredInputs) {
    input.addEventListener('click', function() {
        if ()
    })
}*/