window.onload = main;

function main() {
    loadData();

    let avatar = document.getElementById("pfp");
    if (!resumeData.avatarImage) {
        avatar.style.display = "none";
    }
    avatar.src = resumeData.avatarImage;
    document.getElementById("full-name").innerText = resumeData.fullName;
    document.getElementById("job-title").innerText = resumeData.jobTitle;
    document.getElementById("description").innerText = resumeData.description;

    setSectionData("email", resumeData.email);
    setSectionData("number", resumeData.phoneNumber);
    setSectionData("linkedin", resumeData.linkedinAddress);
    setSectionData("work-experience", resumeData.workExperienceData);
    setSectionData("education", resumeData.educationData);
    setSectionData("certificates", resumeData.certificatesData);

    setListSectionData("skills-list", resumeData.skills);
    setListSectionData("languages-list", resumeData.languages);
    setListSectionData("interests-list", resumeData.interests);
}

function setListSectionData(sectionId, list) {
    let container = document.getElementById(sectionId);

    if (list.length == 0) {
        container.parentElement.style.display = "none";
        return;
    }
    list.forEach(element => {
        let item = document.createElement("span");
        item.innerText = element;
        container.appendChild(item);
    });
}

function setSectionData(sectionId, data) {
    let section = document.getElementById(sectionId);
    if (!section) return;
    if (!data) {
        section.parentElement.style.display = "none";
        return;
    }
    
    section.innerText = data;
}