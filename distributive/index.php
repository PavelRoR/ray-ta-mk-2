<?php
$dates = array(strtotime('2019-11-05'), strtotime('2019-11-06'), strtotime('2019-11-07'));
$currDate = strtotime('now');

if ($currDate < $dates[0]) {
    header('location: https://start.bizon365.ru/room/18087/Transpersonal_analytics_d1');
}
else if (($currDate >= $dates[0]) && $currDate < $dates[1]) {
    header('location: https://start.bizon365.ru/room/18087/Transpersonal_analytics_d2');
}
else if (($currDate >= $dates[1]) && $currDate < $dates[2]) {
    header('location: https://start.bizon365.ru/room/18087/Transpersonal_analytics_d3');
}
else {
    header('location: https://roleva-yurina.mastervision.su/transpersonal-analytics-2/course/');
}
?>