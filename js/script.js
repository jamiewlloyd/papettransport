const pet = document.getElementById("anotherpet");
const footerIcon = document.querySelector(".icon");
const formLogo = document.querySelector(".logo2");

pet.addEventListener("click", anotherPet);
footerIcon.addEventListener("click", goHome);
formLogo.addEventListener("click", goHome);

// fucntion to check if pet details fields are compelted. Then will add more fields on click if requirements are met 
function anotherPet(event) {
    event.preventDefault();
    let parent = event.target.previousElementSibling;
    let lastEntry = parent.lastElementChild;
    let type = lastEntry.children[0].value.length;
    let name = lastEntry.children[1].value.length;
    let breed = lastEntry.children[2].value.length;
    let age = lastEntry.children[3].value.length;
    let sex = lastEntry.children[4].value;
    let weight = lastEntry.children[5].value.length;
    // validating that required fields are filled
    if (type != 0 && name != 0 && breed != 0 && age != 0 && sex != "pleaseselect" && weight != 0) {
        // creates and inserts the new set of input fields
        let newPet = document.createElement('div');
        newPet.className = 'petdetails';
        newPet.innerHTML = `<input type="text" id="pettype" name="pet_type" placeholder="Type (eg. dog cat)" required>
        <input type="text" id="petname" name="pet_name" placeholder="Name" required>
        <input type="text" id="petbreed" name="pet_breed" placeholder="Breed" required>
        <input type="number" id="petage" name="pet_age" placeholder="Age" required>
        <select id="petsex" name="pet_sex" required>
            <option value="pleaseselect" disabled selected>Select Sex</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
        <input type="number" id="petweight" name="pet_weight" placeholder="Pet weight (kg)" required>
        <input type="text" id="medical" name="medical" placeholder="Please note any medical conditions">
        <hr>`;
        parent.appendChild(newPet);
        // sets focus on the first input of the new div
        parent.lastElementChild.children[0].focus();
    }
}

// function to allow logo and icon on form page link back to home page 
function goHome() {
    window.location = 'index.html'
}

// Code from formspree edited to include class for status bar and remove button styling 
window.addEventListener("DOMContentLoaded", function () {

    var form = document.getElementById("form");
    var status = document.getElementById("formstatus");

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();
        status.innerHTML = "Thank You! You will hear back from us soon.";
        status.classList.add('success');
    }

    function error() {
        status.innerHTML = "Oops! There was a problem.";
        status.classList.add('error');
    }

    // handle the form submission event

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}