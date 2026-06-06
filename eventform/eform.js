const form = document.querySelector("#ticketForm");
const typeSelect = document.querySelector("#type");
const extraField = document.querySelector("#extraField");
const extraLabel = document.querySelector("#extraLabel");
const extraInput = document.querySelector("#extraInput");
const errors = document.querySelector("#errors");
const ticketOutput = document.querySelector("#ticketOutput");

typeSelect.addEventListener("change", () => {
    ticketOutput.innerHTML = "";
    errors.textContent = "";

    switch (typeSelect.value) {
        case "student":
            extraField.classList.remove("hidden");
            extraLabel.textContent = "Student I#";
            extraInput.value = "";
            extraInput.required = true;
            break;
        
        case "guest":
            extraField.classList.remove("hidden");
            extraLabel.textContent = "Access Code";
            extraInput.value = "";
            extraInput.required = true;
            break;
        
        default:
            extraField.classList.add("hidden");
            extraInput.required = false;
            break;
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    errors.innerHTML = "";
    ticketOutput.innerHTML = "";


    const firstName = document.querySelector("#firstName").value.trim();
    const lastName = document.querySelector("#lastName").value.trim();
    const email = document.querySelector("#email").value.trim();
    const type = typeSelect.value;
    const eventDate = document.querySelector("#eventDate").value;
    const extraValue = extraInput.value.trim();

    let errorMessages = [];

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const selectedDate = new Date(eventDate + "T00:00:00");

    if (!firstName || !lastName || !email || !type || !eventDate) {
        errorMessages.push("All fields are required");
    }

    if (eventDate && selectedDate <= today) {
        errorMessages.push("Event date must be later than today");
    }

    switch (type) {
        case "student":
            if(!/^\d{9}$/.test(extraValue)) {
                errorMessages.push("Student I# must be 9 digits");
            }
            break;
        
        case "guest":
            if (extraValue !== "EVENT131") {
                errorMessages.push("Access code must be EVENT131");
            }
            break;
        
        default:
            break;
    }

    if (errorMessages.length > 0) {
        errors.innerHTML = errorMessages.join("<br>");
        return;
    }

    ticketOutput.innerHTML = `
    <h2>Ticket Created</h2>
    <p>${firstName} ${lastName}</p>
    <p>${type}</p>
    <p>${eventDate}</p>
    `;

    form.reset();
    extraField.classList.add("hidden");
    extraInput.required = false;

});
