let resumeData = {
    avatarImage: "",
    fullName: "",
    jobTitle: "",
    description: "",

    email: "",
    phoneNumber: "",
    linkedinAddress: "",

    workExperienceData: "",
    educationData: "",
    certificatesData: "",

    skills: [],
    languages: [],
    interests: []
}

function saveData() {
    const data = JSON.stringify(resumeData);
    console.log(data);
    localStorage.setItem('resumeData', data);
    
}

function loadData() {
    const savedData = JSON.parse(localStorage.getItem('resumeData'));
    if (!savedData) return;
    resumeData = savedData;
}