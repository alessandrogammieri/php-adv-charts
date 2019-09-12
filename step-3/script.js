function init() {  
    // Settiamo la località con Italia
    moment.locale("it");
    // Al click stampiamo i grafici
    $(document).on("click", "#aggiorna", printGrafs);
}

// Funzione che richiama l'AJAX e costruisce i grafici
function printGrafs () {
    // Puliamo il container ogni volta che facciamo una chiamata
    $(".container").empty();
    // Assegno ad una variabile l'accesso scelto e salvo nella var query che invio al PHP
    var valquery = $("#venditore").val();
    var query = {"level": valquery};
    // Chiamata AJAX dal PHP api
    $.ajax({
        url: "api.php",
        method: "GET",
        data: query,
        success: function (data) {
            for (i = 0; i < data.length; i++) {
                var element = data[i];
            }
            if (element.access == "guest") {
                guestGraf(data);
            } else if (element.access == "employee") {
                employeeGraf(data);
            } else {
                clevelGraf(data); 
            }    
        },
        error: function () {
            alert("C'è stato un errore in download");
        }
    })
}

// Stampa Line Graf (Guest)
function guestGraf(data) {  
    // Richiamo la funzione che mi ritorna i mesi in una variabile
    var getMonths = getMonth ();
    for (i = 0; i < data.length; i++) {
        var element = data[i];
        // Dichiaro una variabile con i profitti
        var monthProfit = element.data;
    }
    // Richiamo la funzione che stampa il grafico a linee
    line (getMonths, monthProfit);
}

// Stampa Line e Pie Graf (Employee)
function employeeGraf(data) { 
    // Richiamo la funzione che mi ritorna i mesi in una variabile
    var getMonths = getMonth ();
    // Ciclo una sola volta per avere i dati del primo array
    for (i = 0; i <= 0; i++) {
        var element = data[i];
        // Dichiaro una variabile che mi ritorna i relativi profitti
        var profit = Object.values(element.data);
        // Richiamo la funzione che stampa il grafico a linee
        line (getMonths, profit);
    }
    // Ciclo per avere i dati del secondo array
    for (y = 0; y < data.length; y++) {
        var element = data[i];
        // Dichiaro una variabile che mi ritorna i nomi dei Seller
        var seller = Object.keys(element.data);
        // Dichiaro una variabile che mi ritorna i relativi profitti
        var profit = Object.values(element.data);
        // Richiamo la funzione che stampa il grafico a torta
        pie (seller, profit)
    }  
}

// Stampa Line, Pie e Line
function clevelGraf(data) {  
    // Richiamo la funzione che mi ritorna i mesi in una variabile
    var getMonths = getMonth ();
    // Ciclo per avere i dati dell'array
    for (x = 0; x < data.length; x++) {
        var element = data[x];
    }
    // Stampo il primo grafico a linee
    var fatturato = element.fatturato.data;
    line (getMonths, fatturato);
    // Dichiaro una variabile che mi ritorna i nomi dei Seller
    var seller = Object.keys(element.fatturato_by_agent.data);
    // Dichiaro una variabile che mi ritorna i relativi profitti
    var profit = Object.values(element.fatturato_by_agent.data); 
    // Stampo il secondo grafico a torta
    pie (seller, profit);
    // Dichiaro una variabile che mi ritorna i dati dei Team
    var uno = element.team_efficiency.data.Team1;
    var due = element.team_efficiency.data.Team2;
    var tre = element.team_efficiency.data.Team3;
    // Stampo il terzo grafico a linee
    lineTeam (getMonths,uno, due, tre)
}

// Funzione che ci ritorna la lista dei mesi in inglese
function getMonth () {
    var mese = moment.months();
    return mese;
}

// Grafico a Linea
function line (y, z) {  
    // Appendo il Canvas nel DOM
    var tema = '<canvas id="myChartline"></canvas>';
    $(".container").append(tema);
    // Creating a Chart
    var ctx = document.getElementById('myChartline').getContext('2d');
    var myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: y,
            datasets: [{
                label: '# Vendite',
                data: z,
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
}

// Grafico a Torta
function pie (x, y) {  
    // Appendo il Canvas nel DOM
    var tema = '<canvas id="myChartpie"></canvas>';
    $(".container").append(tema);
    // Creating a Chart
    var ctx = document.getElementById('myChartpie').getContext('2d');
    var myChart = new Chart(ctx, {
        type: "pie",
        data: {
            labels: x,
            datasets: [{
                data: y,
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
}

// Grafico a Linea dei Team
function lineTeam (y, uno, due, tre) {  
    // Appendo il Canvas nel DOM
    var tema = '<canvas id="myChartteam"></canvas>';
    $(".container").append(tema);
    // Creating a Chart
    var ctx = document.getElementById('myChartteam').getContext('2d');
    var myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: y,
            datasets: [
                {
                    label: 'Team1',
                    data: uno,
                    backgroundColor: 'rgb(255, 99, 132,0)',
                    borderColor: [
                        'rgba(255, 99, 132,1)'
                    ]
                },
                {
                    label: 'Team2',
                    data: due,
                    backgroundColor: 'rgb(255, 99, 132,0)',
                    borderColor: [
                        'rgba(150, 208, 130, 1)',
                    ]
                },
                {
                    label: 'Team3',
                    data: tre,
                    backgroundColor: 'rgb(255, 99, 132,0)',
                    borderColor: [
                        'rgba(46, 79, 255, 1)'
                    ]
                }
            ]
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
}

$(document).ready(init);