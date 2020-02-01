const students = [];
const removedStudent = [];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const addStudent = () => {
    const newStudent = new Object();
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
    //move this into its own function
    for (let i = 0; i < students.length; i++){
        document.getElementById(`${students[i].id}`).addEventListener('click', removeMe);
    }
    console.log('after building array', students);
}

const removeMe = (e) => {
    const buttonId = e.target.id;  
    for (let i = 0; i < students.length; i++){
        if (buttonId === students[i].id.toString()){
            newVar = students.splice(i, 1);
            removedStudent.push(newVar[0]);
            console.log('students', students);
            console.log('removedStudent', removedStudent);
        }
    }
    buildNameCard(students);
}

const buildNameCard = (arr) => {
    let domString = '';
    for (let i = 0; i < arr.length; i++){
        domString += `<div class="col-3 m-3 pt-3 border border-dark rounded card row align-content-center align-self-start ${arr[i].house}" style="width: 18rem;">`;
        domString += '<div class="card-body">';
        domString += `<h3 class="card-title p-2">${arr[i].name}</h3>`;
        domString += `<h5 class="card-text align-self-center">${arr[i].house}</h5>`;
        domString += `<a id="${arr[i].id}" class="expel btn btn-light border border-dark">Expel</a>`;
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