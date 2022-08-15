// Work button add function
document.getElementById("weAddButton").addEventListener("click", addNewWEField);

function addNewWEField(){
    let newNode = document.createElement("textarea");

    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-3");
    newNode.setAttribute("placeholder", "Enter here");
    newNode.setAttribute("rows", 1);
    let WorkE = document.getElementById("workE");
    let weAddButtonOB = document.getElementById("weAddButton");

    WorkE.insertBefore(newNode, weAddButtonOB);

}

// project button add function

document.getElementById("pjAddButton").addEventListener("click", addNewWEFieldP);

function addNewWEFieldP(){
    let newNode = document.createElement("textarea");

    newNode.classList.add("form-control");
    newNode.classList.add("pjField");
    newNode.classList.add("mt-3");
    newNode.setAttribute("placeholder", "Enter here");
    newNode.setAttribute("rows", 1);
    let projectE = document.getElementById("projectE");
    let pjAddButtonOB = document.getElementById("pjAddButton");

    projectE.insertBefore(newNode, pjAddButtonOB);
}

// Education button add function

document.getElementById("eqAddButton").addEventListener("click", addNewWEFieldEd);

function addNewWEFieldEd(){
    let newNode = document.createElement("textarea");

    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-3");
    newNode.setAttribute("placeholder", "Enter here");
    newNode.setAttribute("rows", 1);
    let eduE = document.getElementById("eduE");
    let eqAddButtonOB = document.getElementById("eqAddButton");

    eduE.insertBefore(newNode, eqAddButtonOB);
}



// targetting genrate resume button 

document.getElementById("buit-resume").addEventListener("click", genrateCV);

function genrateCV(){
    // name changing
    let firstname = document.getElementById("firstNameField").value;
    let lastname = document.getElementById("lastNameField").value;
    let nameField = `${firstname} ${lastname}`;
    let nameT = document.getElementById("nameT");
    nameT.innerHTML = nameField;

    // address and country changing 

    let addressField = document.getElementById("addressField").value;
    let countryField = document.getElementById("countryField").value;
    let fullAddress = `${addressField}, ${countryField}`;
    let addressT = document.getElementById("addressT");
    addressT.innerHTML = fullAddress;

    // Contact Changing

    let phoneField = document.getElementById("phoneField").value;
    let phoneT = document.getElementById("phoneT");
    phoneT.innerHTML = phoneField;

    // email changing

    document.getElementById("emailT").innerHTML = document.getElementById("emailField").value;

    // all social links changing

    document.getElementById("githubT").innerHTML = document.getElementById("githubField").value;
    document.getElementById("linkedinT").innerHTML = document.getElementById("linkedinField").value;
    document.getElementById("twitterT").innerHTML = document.getElementById("twitterField").value;
    document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;

    // objective changing

    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

    // work experences changing

    let wes = document.getElementsByClassName("weField");

    let str = "";

    for(let e of wes){
        str = str + `<li> ${e.value} </li>`
    }

    document.getElementById("weT").innerHTML = str;

    // educational qualification changing

    let eqs = document.getElementsByClassName("eqField");

    let str2 = "";

    for(let e of eqs){
        str2 = str2 + `<li> ${e.value} </li>`;
    }

    document.getElementById("eqT").innerHTML = str2;



    // projects qualification changing

    let pjs = document.getElementsByClassName("pjField");

    let str3 = "";

    for (let e of pjs){
        str3 += `<li> ${e.value} </li>`;
    }

    document.getElementById("pjT").innerHTML = str3;

    // code for setting images

    let file = document.getElementById("imgField").files[0];

    console.log(file);

    let reader = new FileReader();
    
    reader.readAsDataURL(file);

    // setting
    reader.onloadend = () => {
        document.getElementById("img-pro").src = reader.result;
    }
    

    document.getElementById("cvForm").style.display = "none";
    document.getElementById("cvTemplate").style.display = "block";
}



// targetting printing resume button

document.getElementById("print-resume").addEventListener("click", printCV);

function printCV(){
    window.print();
}