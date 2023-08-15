function displayUserData() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const website = document.getElementById("website").value;
    const image = document.getElementById("image").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const skills = document.getElementById("skills").value;

    document.getElementById("displayName").textContent = name;
    document.getElementById("displayEmail").textContent = email;
    document.getElementById("displayWebsite").textContent = website;
    document.getElementById("displayImage").textContent = image;
    document.getElementById("displayGender").textContent = gender;
    document.getElementById("displaySkills").textContent = skills;

    document.getElementById("userData").style.display = "block";
}