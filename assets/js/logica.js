fetch("https://digimon-api.vercel.app/api/digimon")
    .then(response => response.json())
    .then(resp => {
        crearLista(resp)

    });

//aca se coloca la función

function crearLista(resp) {


    for (let temporal of resp) {


        list_digimon.innerHTML +=
            `
        <td>${temporal.name}</td>
        <td><img src="${temporal.img}" width="15%" height="15%"></td>
        <td>${temporal.level}</td>
        
        
        `
    }
}
// funcion para buscar digimon en el navbar
var buscar = null;

function buscarNombre() {
    var buscar = document.querySelector("input").value;

    fetch("https://digimon-api.vercel.app/api/digimon/name/" + buscar)
        .then((response) => response.json())
        .then(resp => {
            pintarNombre(resp)
        });
}

function pintarNombre(resp){
    var contenido = document.getElementById("contenido");

        contenido.innerHTML +=
            `
            
            <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${resp[0].img}" alt="sakdhajksdahsd">
            <div class="card-body">
            <h3>Nombre: ${resp[0].name}</h3>
            <h4>Nivel: ${resp[0].level}</h4>
            </div>
        </div>
            `
}


