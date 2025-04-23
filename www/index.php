<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Получение сведений по юридическим лицам</title>
    <link rel="stylesheet" href="/assets/npm/node_modules/bootstrap/dist/css/bootstrap.min.css" />
</head>

<body>
    <div class="container">
        <div class="mb-3">
            <label class="form-label">УНП плательщика</label>
            <input
                type="number"
                class="form-control border-success"
                id="unp_input"
                onkeypress="GrpNalogGovBy.innerHtmlData()"
                placeholder="100582333"
                value="100582333"
            />
        </div>
        <div id="content"></div>
    </div>
    <script src="/js/grp-nalog-gov-by.class.js"></script>
    <script>
        GrpNalogGovBy.innerHtmlData();
    </script>
</body>

</html>
