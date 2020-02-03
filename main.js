const students = [];
const removedStudent = [];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const addStudent = () => {
    const newStudent = new Object();
    if (document.getElementById('user-input').value === ''){
        alert('Please fill out the name of the student in the input box.')
    } else {
    newStudent.name = document.getElementById('user-input').value;
    newStudent.house = Math.ceil(Math.random() * 4);
    newStudent.id = Date.now();
    if (newStudent.house === 4 ){
        newStudent.house = 'Gryffindor';
    } else if (newStudent.house === 3){
        newStudent.house = 'Hufflepuff';
    } else if (newStudent.house === 2){
        newStudent.house = 'Ravenclaw';
    } else {
        newStudent.house = 'Slytherin';
    }
    students.push(newStudent);
    buildNameCard(students);
    buttonMaker(students);
    console.log('after building array', students);
    }
}

const buttonMaker = (arr) => {
    for (let i = 0; i < arr.length; i++){
        document.getElementById(`${arr[i].id}`).addEventListener('click', removeMe);
    }
}

const removeMe = (i) => {
    removedStudentFromOriginalArray = students.splice(i, 1);
    removedStudent.push(removedStudentFromOriginalArray);
    console.log(removedStudent)
    buildNameCard(students);
}

const buildNameCard = (arr) => {
    let domString = '';
    for (let i = 0; i < arr.length; i++){
        domString += `<div class="col-3 m-3 pt-3 border border-dark rounded card row align-content-center align-self-start ${arr[i].house}" style="width: 18rem;">`;
        domString += '<div class="card-body">';
        domString += `<h3 class="card-title p-2">${arr[i].name}</h3>`;
        domString += `<h5 class="card-text align-self-center">${arr[i].house}</h5>`;
        domString += `<a onClick="removeMe(${i})" id="${arr[i].id}" class="expel btn btn-light border border-dark">Expel</a>`;
        domString += '</div>';
        domString += '</div>';
    }
    printToDom('sorting-hat', domString);
};

const events = () => {
    document.getElementById('addName').addEventListener('click', addStudent);
};

const init = () => {
    events();
};

init();