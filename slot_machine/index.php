<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?php
        // ВОТ ТУТ ОБЪЯВЛЯЕМ МАССИВ
        // НАЗЫВАЕМ ЕГО $emojiArr
        // И НАПОЛНЯЕМ ЭМОДЖИКАМИ
        ini_set('display_errors', 1); ini_set('display_startup_errors', 1); error_reporting(E_ALL);

        if (empty($_REQUEST['cells'])){
            $cellsCount = 2;
        } else{
            $cellsCount = $_REQUEST['cells'];
        }

        //🤡 -> 30% 🎃 -> 20% 🎩 -> 15% 🐲 -> 10% 🍊 -> 10% 🍌 -> 10% 💰 -> 5%
        $emojiArr = array('🤡', '🤡', '🤡', '🤡', '🤡', '🤡', '🎃', '🎃', '🎃', '🎃',
        '🎩', '🎩', '🎩', '🐲', '🐲', '🍊', '🍊', '🍌', '🍌', '💰');

        $game = array();

        for ($i = 0; $i < $cellsCount; $i++){
            $game[$i] = $emojiArr[rand(0, count($emojiArr)-1)];
        }

        for ($i = 0; $i < $cellsCount; $i++){
            echo("<div class='block'>{$game[$i]}</div>");
        }

        $flag = 1;
        for ($i = 0; $i < ($cellsCount - 1); $i++){
            if ($game[$i] != $game[$i + 1]){
                $flag = 0;
                break;
            }
        }

        $link = "";
        if ($flag == 1){
            $emoji = $game[0];

            //count percent of this emoji
            $count = 0;
            for ($i = 0; $i < count($emojiArr); $i++){
                if ($emojiArr[$i] == $emoji) $count ++;
            } 
            $percent = $count / 20;
            // ---

            $msg = "";

            if ($percent <= 0.05) $msg = "Невозможно";
            else if ($percent <= 0.1) $msg = "СЛОЖНО";
            else if ($percent <= 0.15) $msg = "Сложнее среднего";
            else if ($percent <= 0.2) $msg = "Средне";
            else $msg = "Легко";

            echo("<div id='message'>{$msg}</div>");
            $new = strval($cellsCount + 1);
            $link = "./index.php?cells={$new}";

        } else{
            $link = "./index.php?cells={$cellsCount}";
        }
    ?>


    <a href="<?php echo($link);?>" class="btn">Играть</a>
</body>
</html>