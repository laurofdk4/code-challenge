document.getElementById("registrar").addEventListener('submit',function(e){
    e.preventDefault();

    URL = 'https://jsonplaceholder.typicode.com/users';

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fecha = document.getElementById("fecha").value;

    const data = {
        Nombre: nombre,
        Apellido: apellido,
        Fecha: fecha
    };

    fetch(URL, {
        method : 'POST',
        headers : {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)    
    })

    .then(response => response.json())
    .then(data => {
        document.getElementById('mostrarInfo').innerHTML = JSON.stringify(data)
        alert('Registro exitoso');

    })
    .catch(error => {
        console.error('error:', error);
    })
})