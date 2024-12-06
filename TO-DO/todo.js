const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const addButton = document.getElementById('add-button');

function onClick() {

    if (inputBox.value !== '')  {
        let listItem = document.createElement('li');
        listItem.innerHTML = inputBox.value; 


        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        deleteButton.style.backgroundColor = 'red'; 
        deleteButton.style.marginLeft = '250px'
        deleteButton.style.marginTop = '-100px'
        deleteButton.style.height = '30px'
        deleteButton.style.width = '60px'


        deleteButton.addEventListener('click', function () {
            listContainer.removeChild(listItem); 
        });

        listItem.appendChild(deleteButton);

        listContainer.appendChild(listItem);

        inputBox.value = '';
    }
}

addButton.addEventListener('click', onClick);
