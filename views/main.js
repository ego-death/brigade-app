document.querySelector('#search').addEventListener('click', search);
document.querySelector('#add').addEventListener('click', add);
document.querySelector('#view').addEventListener('click', display);

function search(){
    window.location = 'search.html';
}

function add(){
    window.location = 'add.html';
}

function display(){
    window.location = 'display.html';
}