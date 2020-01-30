const namesArray = [];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const addNameToArray = () => {
    const newName = new Object();
    newName.name = document.getElementById('user-input').value;
    console.log(newName);
    namesArray.push(newName);
    buildNameCard(namesArray);
    console.log(namesArray);
}

const buildNameCard = () => {
    let domString = '';
    for (let i = 0; i < namesArray.length; i++){
        domString += '<div class="card col-4" style="width: 18rem;">'
        domString += '<div class="card-body">'
        domString += `<h5 class="card-title">${namesArray[i].name}</h5>`
        domString += '<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>'
        domString += '<a class="btn btn-primary">Go somewhere</a>'
        domString += '</div>'
        domString += '</div>'
    }
    printToDom('sorting-hat', domString);
    
};

const events = () => {
    document.getElementById('addName').addEventListener('click', addNameToArray);
    buildNameCard(namesArray);
};

const init = () => {
    events();
};

init();