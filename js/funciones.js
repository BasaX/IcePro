let ctx = document.getElementById('votosHelados');
let nuevaCantidad;
let saboresHelados = ["Frutos del Bosque","Mascarpone","Banana"];
let votosSabores = [4,3,1];
let totalVotos=0;
let mayorVoto = 0;
let votado;
let posicion;
let bloqueoEncuesta=0;





maximoVoto();

graficarEncuesta();

recopilarVotos();

//PruebaArchivo

// const fs = require('fs');
// fs.readFile('C:\Users\EXO\Documents\PROGRAMACION\Paginas\IcePro\data\DatosVotacion.txt','utf8',(err,data)=>{
//     if(err){
//         console.error(err)
//         return
//     }
//     console.log(data)
//     });




function graficarEncuesta(){
    let votosHeladosChart = new Chart (ctx, {
        type: 'bar',
        data: {
            labels: saboresHelados,
            datasets: [{
                label: '# of Votos',
                data: votosSabores,
                backgroundColor: [
                    'rgba(239, 118, 122, 1)',
                    'rgba(75, 166, 223, 1)',
                    'rgba(238, 204, 104, 1)',
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive:true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        stepSize: 1,
                        min: 0,
                        max: mayorVoto,
                    }
                }]
            }
        }
    });
}



function maximoVoto(){
    for (let i of votosSabores) {
        if (mayorVoto < i)
            mayorVoto = i;
    }
}


function recopilarVotos(){
    totalVotos=0;
    for (let i = 0; i<votosSabores.length;i++){
        totalVotos=totalVotos+votosSabores[i];
    }
    document.getElementById('etiquetaTotal').innerHTML = totalVotos;
}




function addVoto(){
    let arrayHelados = document.getElementsByName('radio');
    let heladoSeleccionado;
   
    if (bloqueoEncuesta==0){
        for (let i = 0; i < arrayHelados.length; i++) {

            if (arrayHelados[i].checked === true) {
                heladoSeleccionado = arrayHelados[i].value;
                votado = saboresHelados.find(helado => helado == heladoSeleccionado);
                posicion = saboresHelados.findIndex(helado => helado == heladoSeleccionado);
                votosSabores[posicion]+=1;
                maximoVoto();
                graficarEncuesta();
                bloqueoEncuesta=1;
            }
        }
    }
    else{
        alert("Ya votaste por "+votado);
        return;
    }

    recopilarVotos();
    }

//Funciones PopUps

function lecturaPopUpProte() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

function lecturaPopUpGrasa() {
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle("show");
}