const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const addButton = document.getElementById('add-button');

function onClick() {
    // Check if the input value is empty or contains only whitespace
    if (inputBox.value === '') {
        alert("You must add an item.");
    } else {
        let listItem = document.createElement('li');
        listItem.innerHTML = inputBox.value; // Add the input value as the list item

        // Create a delete button for each item
        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        deleteButton.style.backgroundColor = 'red'; // Add a class for styling if needed
        deleteButton.style.marginLeft = '250px'
        deleteButton.style.marginTop = '-100px'
        deleteButton.style.height = '30px'
        deleteButton.style.width = '60px'



        // Add an event listener to the delete button to remove the list item
        deleteButton.addEventListener('click', function () {
            listContainer.removeChild(listItem); // Remove the list item when the delete button is clicked
        });

        // Append the delete button to the list item
        listItem.appendChild(deleteButton);

        // Append the list item to the container
        listContainer.appendChild(listItem);

        // Clear the input box after adding the item
        inputBox.value = '';
    }
}

// Add the event listener to the button
addButton.addEventListener('click', onClick);
