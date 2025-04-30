<?php

(function() {
    try {
        include_once "GrpNalogGovByService.php";

        $method = $_SERVER['REQUEST_METHOD'];
        switch ($method) {
            case 'GET':
                $unp = '';
                
                if (!isset($_GET['unp'])) {
                    http_response_code(400);
                    echo "<p style='color: red;'>Вы не указали параметр unp</p>";
                    return;
                }

                $unp = $_GET['unp'];
                $http_data = GrpNalogGovByService::fetchJson_byUnp($unp);

                http_response_code($http_data['status']);
                header('Content-Type: application/json; charset=utf-8');
                echo $http_data['data'];

                return;

            default:
                http_response_code(405);
                echo "<p style='color: red;'>Метод $method не предусмотрен</p>";
                return;
        }
    }
    catch(Throwable $exception) {
        http_response_code(500);
        echo "<pre style='color: red;'>";
        print_r($exception);
        echo "</pre>";
    }
})();
