console.log("hola");
import { series } from './data.js';
var dataSeries = series;
/* Asegurar que si existe elemento "!" */
var seriesTable = document.getElementById("series");
function cargarData() {
    //encabezado
    var firstRow = document.createElement("tr");
    var col1 = document.createElement("td");
    var col2 = document.createElement("td");
    var col3 = document.createElement("td");
    var col4 = document.createElement("td");
    firstRow.className = "blancox";
    col1.innerHTML = "#";
    col2.innerHTML = "Nombre";
    col3.innerHTML = "Channel";
    col4.innerHTML = "Seasons";
    firstRow.appendChild(col1);
    firstRow.appendChild(col2);
    firstRow.appendChild(col3);
    firstRow.appendChild(col4);
    seriesTable.appendChild(firstRow);
    //vars para hallar promedio
    var i = 0;
    var promedioTemporadas = 0;
    dataSeries.map(function (serie) {
        var serieRow = document.createElement("tr");
        var colS1 = document.createElement("td");
        var colS2 = document.createElement("td");
        var colS3 = document.createElement("td");
        var colS4 = document.createElement("td");
        colS2.className = "azulejo";
        serieRow.className = "serieRow";
        colS1.innerHTML = "".concat(serie.id);
        colS2.innerHTML = "".concat(serie.name);
        colS3.innerHTML = "".concat(serie.channel);
        colS4.innerHTML = "".concat(serie.seasons);
        serieRow.appendChild(colS1);
        serieRow.appendChild(colS2);
        serieRow.appendChild(colS3);
        serieRow.appendChild(colS4);
        seriesTable.appendChild(serieRow);
        i += 1;
        promedioTemporadas += serie.seasons;
    });
    var promedio = document.createElement("p");
    promedio.innerHTML = "Seasons Average: ".concat(promedioTemporadas / i);
    document.body.appendChild(promedio);
}
cargarData();
