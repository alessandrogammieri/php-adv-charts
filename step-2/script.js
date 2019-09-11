function init() {  
    // Settiamo la località con Italia
    moment.locale("it");
    // Richiamiamo la funzione che stampa il Grafico in linea
    printGrafline ();
    // Richiamiamo la funzione che stampa il Grafico a torta
    printGrafpie ();
}

// Funzione che ci permette di costruire il grafico Line
function printGrafline () {
    $.ajax({
        url: "api.php",
        method: "GET",
        success: function (data) {
            // Dichiaro una variabile con i dati del tipo di grafico
            var line = data.fatturato.type;
            // Dichiaro una variabile con i dati della chiamata AJAX
            var monthProfit = data.fatturato.data;
            // Richiamo la funzione che mi ritorna i mesi in una variabile
            var getMonths = getMonth ();
            // Creating a Chart
            var ctx = document.getElementById('myChartline').getContext('2d');
            var myChart = new Chart(ctx, {
            type: line,
            data: {
                labels: getMonths,
                datasets: [{
                label: '# Vendite',
                data: monthProfit,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
                }]
            },
            options: {
                scales: {
                yAxes: [{
                    ticks: {
                    beginAtZero: true
                    }
                }]
                }
            }
            });
        },
        error: function () {
            alert("C'è stato un errore in download");
        }
    })
}

// Funzione che ci permette di costruire il grafico Pie
function printGrafpie () {
    $.ajax({
        url: "api.php",
        method: "GET",
        success: function (data) {
            // Dichiaro una variabile con i dati del tipo di grafico
            var pie = data.fatturato_by_agent.type;
            // Dichiaro una variabile che mi ritorna i nomi dei Seller
            var seller = Object.keys(data.fatturato_by_agent.data);
            console.log(seller);
            
            // Dichiaro una variabile che mi ritorna i relativi profitti
            var profit = Object.values(data.fatturato_by_agent.data);
            console.log(profit);
            
            // Creating a Chart
            var ctx = document.getElementById('myChartpie').getContext('2d');
            var myChart = new Chart(ctx, {
            type: pie,
            data: {
                labels: seller,
                datasets: [{
                data: profit,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
                }]
            },
            options: {
                scales: {
                yAxes: [{
                    ticks: {
                    beginAtZero: true
                    }
                }]
                }
            }
            });
        },
        error: function () {
            alert("C'è stato un errore in download");
        }
    })
}

// Funzione che ci ritorna la lista dei mesi in inglese
function getMonth () {
    var mese = moment.months();
    return mese;
}

$(document).ready(init);