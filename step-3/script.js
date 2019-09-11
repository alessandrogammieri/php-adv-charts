function init() {  
    // Settiamo la località con Italia
    moment.locale("it");
    // Al click stampiamo i grafici
    $(document).on("click", "#aggiorna", printGrafs);
}

// Funzione che ci permette di costruire il grafico Line
function printGrafs () {
    
    var valquery = $("#venditore").val();
    var query = {"level": valquery};
    $.ajax({
        url: "api.php",
        method: "GET",
        data: query,
        success: function (data) {
            for (i = 0; i < data.length; i++) {
                var element = data[i];
            }
            if (element.access == "guest") {
                lineGraf(data);
            } else if (element.access == "employee") {
                linepieGraf(data);
            }  
             
            
        },
        error: function () {
            alert("C'è stato un errore in download");
        }
    })
}

// Stampa Line Graf
function lineGraf(data) {  
    
    for (i = 0; i < data.length; i++) {
        var element = data[i];
    }
    // Dichiaro una variabile che mi ritorna la tipologia di grafico
    var line = element.type;
    console.log(line);
    // Dichiaro una variabile con i profitti
    var monthProfit = element.data;
    console.log(monthProfit);
    // Richiamo la funzione che mi ritorna i mesi in una variabile
    var getMonths = getMonth ();
    console.log(getMonths);

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
    
}

// Stampa Pie Graf
function linepieGraf(data) { 
    
    // Richiamo la funzione che mi ritorna i mesi in una variabile
    var getMonths = getMonth ();
    console.log(getMonths);

    for (i = 0; i <= 0; i++) {
        var element = data[i];
        // Dichiaro una variabile che mi ritorna i relativi profitti
        var profit = Object.values(element.data);
        console.log(profit);
        line (getMonths, profit);
    }

    for (y = 0; y < data.length; y++) {
        var element = data[i];
        // Dichiaro una variabile che mi ritorna i nomi dei Seller
        var seller = Object.keys(element.data);
        console.log(seller);
        // Dichiaro una variabile che mi ritorna i relativi profitti
        var profit = Object.values(element.data);
        console.log(profit);
        pie (seller, profit)
    }  
}


// Funzione che ci ritorna la lista dei mesi in inglese
function getMonth () {
    var mese = moment.months();
    return mese;
}

function line (y, z) {  
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

function pie (x, y) {  
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


$(document).ready(init);