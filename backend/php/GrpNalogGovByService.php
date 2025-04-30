<?php

class GrpNalogGovByService {
    static function fetchJson_byUnp($unp) {
        global $env;

        $FETCH_URL = "http://grp.nalog.gov.by/api/grp-public/data?unp=$unp";

        // $json_string = json_encode($data);
        // $http_data = $json_string;

        // $http_headers = [
            // "Content-Type: application/json",
        // ];

        // $http_cookie = implode("; ", []);

        $ch = curl_init($FETCH_URL);                            // Инициализируем cURL сессии
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        // curl_setopt($ch, CURLOPT_POST, true);                   // Устанавливаем метод POST
        // curl_setopt($ch, CURLOPT_POSTFIELDS, $http_data);       // Тело запроса
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        // curl_setopt($ch, CURLOPT_HTTPHEADER, $http_headers);    // Устанавливаем заголовки
        // curl_setopt($ch, CURLOPT_COOKIE, $http_cookie);         // Передаем куки
        $response = curl_exec($ch);                             // Выполняем запрос и получаем ответ

        if (curl_errno($ch)) {                                  // Проверяем на наличие ошибок
            $err = curl_error($ch);                             // Получаем сообщение об ошибке
            curl_close($ch);                                    // Закрываем cURL сессию
            throw new Error("Fetch error: $err");
        }

        $http_status = curl_getinfo($ch, CURLINFO_HTTP_CODE);

        curl_close($ch);                                        // Закрываем cURL сессию

        return [
            'status' => $http_status,
            'data' => $response,
        ];
    }
}
