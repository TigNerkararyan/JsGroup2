const form = document.getElementById('form');

function retrieveFormValue(event) {
    event.preventDefault();

    const name = form.querySelector('[name="name"]'),
        surname = form.querySelector('[name="surname"]'),
        age = form.querySelector('[name="age"]');
        

    const values = [
        {
        name: name.value,
        surname: surname.value,
        age: age.value,
        
    }
];

    console.log('v1', values);
}

form.addEventListener('submit',retrieveFormValue);