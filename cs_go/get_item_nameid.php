<?php
    ini_set('error_reporting', E_ALL);
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);

    $itemName = ($_REQUEST['item_name']);
    $itemNameURL = str_replace(" ", "%20", $itemName);
    $itemHTML = file_get_contents("https://steamcommunity.com/market/listings/730/".$itemNameURL);


    $res = explode('Market_LoadOrderSpread( ', $itemHTML);

    if (empty($res[1])){
        $response = array(
            "status" => "Item not found",
            "itemName" => "$itemName",
            "item_nameid" => "$item_nameid"
        );
        
        echo(json_encode($response));

    } else{
        $res = $res[1];


        $res = explode(' );	// initial load', $res);
        $item_nameid = $res[0];
    
        $response = array(
            "status" => "ok",
            "itemName" => "$itemName",
            "item_nameid" => "$item_nameid"
        );
    
        echo(json_encode($response));
    }

?>