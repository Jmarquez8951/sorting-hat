const students = [];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const addStudent = () => {
    const newName = new Object();
    newName.name = document.getElementById('user-input').value;
    newName.house = Math.ceil(Math.random() * 4);
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
    console.log('after building array',students)
}

const buildNameCard = () => {
    let domString = '';
    for (let i = 0; i < students.length; i++){
        domString += '<div class="card col-4" style="width: 18rem;">'
        domString += '<div class="card-body">'
        domString += `<h5 class="card-title">${students[i].name}</h5>`
        domString += `<p class="card-text">${students[i].house}</p>`
        domString += `<a id="${i}" class="btn btn-light">Expel</a>`
        domString += '</div>'
        domString += '</div>'
    }
    printToDom('sorting-hat', domString);
    
};

const events = () => {
    document.getElementById('addName').addEventListener('click', addStudent);
};

const init = () => {
    buildNameCard(students);
    events();
};

init();