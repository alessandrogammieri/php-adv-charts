<!DOCTYPE html>
<html lang="" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- FONT: LATO -->
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet">
    <!-- FONT: FONTAWESOME -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">
    <!-- CSS: MY STYLE -->
    <link rel="stylesheet" href="style.css">
    <!-- IMG: ICON -->
    <link rel="shortcut icon" href="">
    <title>Advanced Dashboard Charts</title>
  </head>
  <body>
    <div class="form">
      <p>Scegli il tuo livello: </p>
      <select id="venditore">
        <option value="guest">Guest</option>
        <option value="employee">Employee</option>
        <option value="clevel">Clevel</option>
      </select>
      <button id="aggiorna">Accedi</button>
    </div>

    <div class="container">
      
    </div>
    
    <!-- JS: CHART JS -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0/dist/Chart.min.js"></script>
    <!-- JS: JQUERY -->
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <!-- JS: MOMENT -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js"></script>
    <!-- JS: HANDLEBARS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.1.0/handlebars.min.js" charset="utf-8"></script>
    <!-- JS: MY SCRIPT -->
    <script src="script.js" charset="utf-8"></script>
  </body>
</html>
