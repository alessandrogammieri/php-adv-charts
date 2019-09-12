# php-adv-charts
Advanced Dashboard Charts

Tecnologie da utilizzare e architettura:
Creiamo una dashboard di grafici, la parte frontend deve utilizzare HTML e Javascript utilizzando la libreria ChartJS.
In questo caso però, i dati riguardanti i grafici saranno salvati in PHP, che dovrà stamparli dentro al file HTML nella posizione corretta.

Step 1
Si vuole creare un grafico a linea che mostri l’andamento mensile delle vendite, ogni numero fornito è il valore totale delle vendite per un mese, partendo da gennaio.

Step 2
Si vogliono creare due grafici utilizzando i dati contenuti dentro al file database.php . Questa volta il file contiene non solo i dati ma anche il tipo di grafico atteso.
Il primo grafico è lo stesso del punto precedente mentre il secondo è un grafico a torta; per questo grafico i dati forniti non sono solo i “valori” ma anche le “label”.

Step 3
Questo file introduce due novità:
● Un nuovo grafico a linea che mostra l’andamento di efficienza dei 3 team mese per mese, una linea per ogni team;
● Una elemento access che definisce il livello minimo di chi può vedere quel grafico, con questo significato: i grafici con acess ‘guest’ possono essere visti da tutti, i grafici con access ‘employee’ possono essere visti da chi è employee e chi è clevel , tutti i grafici con access ‘clevel’ possono essere visti solo da chi è clevel.
