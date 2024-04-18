// variables Sub-container First one
let buttonContainer = document.getElementById('buttonContainer');
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let typeBusiness = document.getElementById('typeBusiness');
let gender = document.getElementById('gender');
let userDate = document.getElementById('date');
let selectElementCity = document.getElementById("selectCity");
let selectElementEducation = document.getElementById('education');
let phoneNumber = document.getElementById('phoneNumber');
let labelPhone = document.getElementById('labelPhone');
let userEmail = document.getElementById('userEmail');
let labelEmail = document.getElementById('labelEmail');
let address = document.getElementById('address');
let hasBeenCreated = document.getElementById('hasBeenCreated');
let backLeft = document.getElementById('backLeft')

// variables From card Elements
let cardFirstName = document.getElementById('cardFirstName');
let cardAge = document.getElementById('cardAge');
let cardCity = document.getElementById('cardCity');
let cardBackSideName = document.getElementById('cardBackSideName');
let cardEducationLevels = document.getElementById('cardEducationLevel');
let cardNumber = document.getElementById('cardNumber');
let cardEmail = document.getElementById('cardEmail');
let cardAddress = document.getElementById('cardAddress');
let cardBusinessName = document.getElementById('cardBusinessName');
let createCard = document.getElementById('createCard');
let slideCard = document.getElementById('slideCard');

//variable RightSide and LeftSide
let rightSide = document.getElementById('rightSide');
let leftSide = document.getElementById('leftSide');
let frontSide = document.getElementById('frontSide');
let backSide = document.getElementById('backSide');

// Variables colors 
let colors = Array.from(document.getElementsByClassName('colors'));
let coverColor = document.getElementById('coverColor');
coverColor.style.backgroundColor = '#071927';
let headerFrontRight = document.getElementById('headerFrontRight');

// Variable Logos
let logos = Array.from(document.getElementsByClassName('logos'));
let imageLogo = Array.from(document.getElementsByClassName('image-logo'));
let imageLogoApply = document.getElementById('imageLogoApply');

// Variable Edit Icon
let editPart = document.getElementById('editPart');

// Variable Icon part
let iconCard = document.getElementById('iconCard');
let iconTheme = document.getElementById('iconTheme');
let iconLogo = document.getElementById('iconLogo');

// Variables of main-sub-container
let card = document.getElementById('card');
let mainSubContainer = document.getElementById('mainSubContainer2');
let fileTheme = document.getElementById('fileTheme');
let fileColor = document.getElementById('fileColor');
let fileLogo = document.getElementById('fileLogo');

// another varaibles of main-sub-container3
let mainSubContainer3 = document.getElementById('mainSubContainer3');

function onchangetransition(){
  this.style.transition = '0.4s';
  this.style.color = 'red';
  this.style.fontSize = '1000px';
  this.style.backgroundColor = 'red';
}

var frenchCities = ["Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", 
"Strasbourg", "Montpellier", "Bordeaux", "Lille"];

var educationLevels = ["High School", "Bachelor's Degree", "Master's Degree", "Ph.D.", "Professional Certification",
 "no education background"];

function addOptions(selectElement, options) {
  for (let i = 0; i < options.length; i++) {
      let option = document.createElement("option");
      option.text = options[i];
      option.value = options[i];
      selectElement.appendChild(option);
  }
}
addOptions(selectElementCity, frenchCities);
addOptions(selectElementEducation, educationLevels);

// checking inputs for validation

phoneNumber.addEventListener('input', (e) => {
  let inputValue = e.target.value;
  let isNumeric = /^\d+$/.test(inputValue);
  
  if (!isNumeric) {
      phoneNumber.style.border = '1px solid red';
      labelPhone.style.color = 'red';
      phoneNumber.classList.add('shake-animation');
      setTimeout(() => {
        phoneNumber.classList.remove('shake-animation');
    }, 400);
  } else {
      phoneNumber.style.border = '';
      labelPhone.style.color = '';
  }
});

userEmail.addEventListener('input', (e) => {
  let inputValue = e.target.value;
  let valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue);
  
  if (!valid) {
      userEmail.style.border = '2px solid red';
      labelEmail.style.color = 'red';
      console.log('Invalid email format');
  } else{
    userEmail.style.border = '';
    labelEmail.style.color = '';
  }
});


// Sub container Button Event Listener
buttonContainer.addEventListener('click' , () =>{
  let lastNameUpper = lastName.value.toUpperCase();
  cardFirstName.innerHTML = firstName.value + ' ' + lastNameUpper;
  cardBackSideName.innerHTML = firstName.value + ' ' + lastNameUpper;
  cardCity.innerHTML = selectElementCity.value;
  cardNumber.innerHTML = phoneNumber.value;
  cardEmail.innerHTML = userEmail.value;
  cardBusinessName.innerHTML = typeBusiness.value;
  cardAddress.innerHTML = address.value;
  ageCalculator(userDate.value , cardAge);
  buttonContainer.style.backgroundColor = 'green';
  buttonContainer.style.color = 'white';
  hasBeenCreated.style.display = 'block';
  setTimeout(() => {
    buttonContainer.style.backgroundColor = '';
    buttonContainer.style.color = '';
  },400);
  setTimeout(() => {
    hasBeenCreated.style.display = '';
  }, 3000);
});

buttonContainer.addEventListener('mouseover', () => {
  slideCard.style.display = 'none';
  createCard.style.display = 'block';
});

buttonContainer.addEventListener('mouseout', () => {
  slideCard.style.display = '';
  createCard.style.display = ''; 
});

// age calculator 
function ageCalculator(userDate , divName){
  let date = new Date();
  let split = userDate.split('-');
  userBirthYear = parseInt(split[0]);
  currentYear = date.getFullYear();
  let age =  currentYear - userBirthYear;
  divName.innerText = age + ' Years Old';
}
console.log(ageCalculator(userDate.value, cardAge));
// Colors Random 
const colorNumber = ["#277979", "#F2D49A", "#FFFF00", "#363943", "#D90E18", "#4B0082", "#EE82EE", "#FB9204", "#FFC0CB", "#800080", "#00FFFF", "#FFD700", "#008080", "#FF6347", "#9400D3"];
const divs = document.querySelectorAll('.colors');

for (let i = 0; i < divs.length; i++) {
  const randomIndex = Math.floor(Math.random() * colorNumber.length);
  divs[i].style.backgroundColor = colorNumber[randomIndex];
  colorNumber.splice(randomIndex, 1); 
  divs[i].addEventListener('click' , () => {
    divs[i].style.border = '2px solid black';
    coverColor.style.background = divs[i].style.backgroundColor;
    headerFrontRight.style.backgroundColor = divs[i].style.backgroundColor;
    frontSide.style.backgroundColor = divs[i].style.backgroundColor;
    backSide.style.backgroundColor = divs[i].style.backgroundColor;
    backLeft.style.backgroundColor = divs[i].style.backgroundColor;
    setTimeout(() => {
      divs[i].style.border = '';
    }, 200);
  });
}

// icons 
iconCard.addEventListener('click' ,() => {
  mainSubContainer.style.display = '';
  fileTheme.style.display = 'none';
  fileColor.style.display = 'none';
  fileLogo.style.display = 'none';
});
iconTheme.addEventListener('click' ,() => {
  mainSubContainer.style.display = 'none';
  fileTheme.style.display = 'block';
  fileTheme.style.display = 'flex';
  fileColor.style.display = 'none';
  fileLogo.style.display = 'none';
});
iconColor.addEventListener('click' ,() => {
  mainSubContainer.style.display = 'none';
  fileTheme.style.display = 'none';
  fileColor.style.display = 'block';
  fileColor.style.display = 'flex';
  fileLogo.style.display = 'none';
});
iconLogo.addEventListener('click' ,() => {
  mainSubContainer.style.display = 'none';
  fileTheme.style.display = 'none';
  fileColor.style.display = 'none';
  fileLogo.style.display = 'block';
  fileLogo.style.display = 'flex';
});

// Right and Left Side
leftSide.addEventListener('click' , () => {
  frontSide.style.display = 'none';
  backSide.style.display = 'block';
  backSide.style.display = 'flex';
  leftSide.style.backgroundColor = coverColor.style.backgroundColor;
  leftSide.style.color = 'white';
  rightSide.style.backgroundColor = '#e4ecec';
  rightSide.style.color = 'black';
});
rightSide.addEventListener('click' , () => {
  frontSide.style.display = 'block';
  frontSide.style.display = 'flex';
  backSide.style.display = '';
  leftSide.style.backgroundColor = '#e4ecec';
  leftSide.style.color = '';
  rightSide.style.backgroundColor = coverColor.style.backgroundColor;
  rightSide.style.color = '';
});

// Logo function

for (let i = 0; i < imageLogo.length; i++) {
  imageLogo[i].addEventListener('click', () => {
    imageLogoApply.src = imageLogo[i].src;
    imageLogo[i].style.padding = '2px';
    imageLogo[i].style.border = '2px solid var(--blue)';
    setTimeout(() => {
      imageLogo[i].style.padding = '';
      imageLogo[i].style.border = '';
    }, 200)
  });
}

// Function for the image upload

document.getElementById('photoInput').addEventListener('change', function(event) {
  var file = event.target.files[0];
  var reader = new FileReader();

  reader.onload = function() {
      let preview = document.getElementById('preview');
      let image = new Image();
      image.src = reader.result;
      preview.innerHTML = '';
      preview.appendChild(image);
  };
  reader.readAsDataURL(file);
});

// Form Post
document.getElementById('businessCardForm').addEventListener('submit', function(event) {
  event.preventDefault();
});
