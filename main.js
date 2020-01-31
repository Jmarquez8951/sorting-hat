const students = [];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const addStudent = () => {
    const newName = new Object();
    newName.name = document.getElementById('user-input').value;
    newName.house = Math.ceil(Math.random() * 4);
    newName.date = Date.now();
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
    // document.getElementById('test').addEventListener('click', removeMe);
    console.log('after building array', students)
}

const buildNameCard = (arr) => {
    let domString = '';
    for (let i = 0; i < arr.length; i++){
        domString += '<div class="card col-4" style="width: 18rem;">'
        domString += '<div class="card-body">'
        domString += `<h5 class="card-title">${arr[i].name}</h5>`
        domString += `<p class="card-text">${arr[i].house}</p>`
        domString += `<a id="test" class="btn btn-light ${arr[i].date}">Expel</a>`
        domString += '</div>'
        domString += '</div>'
    }
    printToDom('sorting-hat', domString);
};



const removeMe = (e) => {
    console.log(e);
    const buttonId = e.target.id.class;
    const newArray = [];
    if (buttonId === students[i].date && students[i].date !== document.getElementsByClassName(students[i].date)){
        
        for (let i = 0; i < students.length; i++){
        
            newArray.push(students[i]);
        }
    }
    buildNameCard(newArray)
    console.log(newArray)
};

const events = () => {
    document.getElementById('addName').addEventListener('click', addStudent);
};

const init = () => {
    buildNameCard(students);
    events();
};

init();