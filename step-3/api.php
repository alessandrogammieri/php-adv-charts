<?php 

    header('Content-type: application/json');

    $access = $_GET['level'];

    include "database.php";

    $res = [];
    $fatturato = $data["fatturato"];
    $fattagent = $data["fatturato_by_agent"];

    if ($access == "clevel") {
        $res[] = $data;
    } else if ($access == "employee") {
        $res[] = $fatturato;
        $res[] = $fattagent;
    } else if ($access == "guest") {
        $res[] = $fatturato;
    }
    
    echo json_encode($res);

?>