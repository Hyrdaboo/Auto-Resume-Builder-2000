window.onload = () => {
    document.getElementById("avatar-input").addEventListener('change', () => {
        saveLoadedImageData();
    });
}

function submitForm() {
    let validated = true;
    validated = setData("name-input", (v) => resumeData.fullName = v);
    validated = setData("job-title-input", (v) => resumeData.jobTitle = v);
    validated = setData("about-input", (v) => resumeData.description = v);

    validated = setData("email-input", (v) => resumeData.email = v) |
                setData("number-input", (v) => resumeData.phoneNumber = v) |
                setData("linkedin-input", (v) => resumeData.linkedinAddress = v);

    if (!validated) {
        alert("Some required forms are missing!");
        return;
    }

    setData("work-input", (v) => resumeData.workExperienceData = v);
    setData("edu-input", (v) => resumeData.educationData = v);
    setData("certificate-input", (v) => resumeData.certificatesData = v);
    
    saveData();
    window.open('./resume.html', '_blank');
}

function saveLoadedImageData() {
    let imageFile = document.getElementById("avatar-input").files[0];

    if (imageFile) {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            resumeData.avatarImage = reader.result;
        });
        reader.readAsDataURL(imageFile);
    }
}

function setData(elementId, dataSetCallback) {
    let element = document.getElementById(elementId);
    if (!element) return false;
    element.style.border = "2px solid green";
    
    if (element.hasAttribute('required') && element.checkValidity() == false) {
        element.style.border = "2px solid red";
        element.scrollIntoView();
        return false;
    }

    dataSetCallback(element.value);
    return true;
}

function addSkill(caller) {
    addListElement(caller, resumeData.skills);
}

function addLanguage(caller) {
    addListElement(caller, resumeData.languages);
}

function addInterest(caller) {
    addListElement(caller, resumeData.interests);
}

function addListElement(caller, list) {
    var inputField = caller.previousElementSibling;
    var listContainer = caller.nextElementSibling;

    if (!inputField.value) return;
    
    var newItem = document.createElement('button');
    newItem.name = inputField.value;
    newItem.onclick = () => {
        removeListElement(newItem.name, list, newItem);
    };
    newItem.onmouseover = () => {
        newItem.textContent = "remove?";
    }
    newItem.onmouseleave = () => {
        newItem.textContent = newItem.name;
    }
    newItem.innerText = inputField.value;
    
    listContainer.appendChild(newItem);
    list.push(inputField.value);

    inputField.value = "";
}


function removeListElement(element, list, caller) {
    let indexToRemove = list.indexOf(element);
    list.splice(indexToRemove, 1);
    caller.remove();
}