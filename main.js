const students = [];
const newStudentArray = [];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const addStudent = () => {
    const newName = new Object();
    newName.name = document.getElementById('user-input').value;
    newName.house = Math.ceil(Math.random() * 4);
    newName.id = Date.now();
    if (newName.house === 4 ){
        newName.house = 'Gryffindor';
    } else if (newName.house === 3){
        newName.house = 'Hufflepuff';
    } else if (newName.house === 2){
        newName.house = 'Ravenclaw';
    } else {
        newName.house = 'Slytherin';
    }
    students.push(newName);
    buildNameCard(students);
    for (let i = 0; i < students.length; i++){
        document.getElementById(`${students[i].id}`).addEventListener('click', removeMe);
    }
    console.log('after building array', students)
}

const removeMe = (e) =>{
    const buttonId = e.target.id;
    
    for (let i = 0; i < students.length; i++){
        if (buttonId === students[i].id.toString()){
        students.splice(i, 1)
        console.log(students)
        newStudentArray.push(students)
        console.log('in here', students)
        }
    }
    buildNameCard(students)
}

const buildNameCard = (arr) => {
    let domString = '';
    for (let i = 0; i < arr.length; i++){
        domString += '<div class="m-4 border border-dark rounded card row align-content-center align-self-start" style="width: 18rem;">'
        domString += '<div class="card-body">'
        domString += `<h3 class="card-title p-2">${arr[i].name}</h3>`
        domString += `<h5 class="card-text align-self-center">${arr[i].house}</h5>`
        domString += `<a id="${arr[i].id}" class="expel btn btn-light border border-dark">Expel</a>`
        domString += '</div>'
        domString += '</div>'
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