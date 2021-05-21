const fav = document.querySelector('#fav');
const button = document.querySelector('button');
const output = document.querySelector('.list');

button.addEventListener('click',() => {
    if(fav.value != '' ) {
        let li = document.createElement('li');
        let deletebutton = document.createElement('button');
        li.textContent = fav.value;
        deletebutton.textContent = '❌';
        li.append(deletebutton);
        output.append(li);
    }
}

);