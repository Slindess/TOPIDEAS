<?php
    ini_set('error_reporting', E_ALL);
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    

    $post = json_decode(file_get_contents('https://steamcommunity.com/market/itemordershistogram?country=RU&language=russian&currency=1&item_nameid=2385118&two_factor=0'));
    echo($post->lowest_sell_order);
    /*
    foreach ($post as $key => $value){
        echo($key." ".$value);
    } */

?>