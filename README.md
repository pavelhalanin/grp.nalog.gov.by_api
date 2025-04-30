## Запуск сайта

- Для начала разработки откройте сайт в браузере (3 способа)
    - Запуск сайта через PHP
        - Запустите локальный сервер командой:
            ```
            cd frontend
            cd public_html
            php -S localhost:58001
            ```
        - Откройте страницу в браузере: http://localhost:58001
    - Запуск сайта через Dockerfile
        - Запустите локальный сервер командой:
            ```
            docker-compose up
            ```
        - Откройте страницу в браузере: http://localhost:58001
    - Открыть index.html
        - Два раза нажмите на файл [index.html](frontend/public_html/grp.nalog.gov.by_api/index.html)
        - Файл должен открыться в браузере: file:///D:/_git/grp.nalog.gov.by_api/frontend/public_html/grp.nalog.gov.by_api/index.html
