class Tabs_Helper {
  static innerHtml_tabs() {
    try {
      const DIV = document.getElementById("root-tabs");

      const ARRAY = [
        { id: 1, name: "Главная" },
        { id: 2, name: "Документация API" },
        { id: 3, name: "По HTTPS" },
        { id: 4, name: "По HTTP" },
      ];

      DIV.innerHTML = `
                <div class="container">
                    <ul class="nav nav-tabs mt-2 mb-2">
                        ${ARRAY.map((e) => {
                          return `
                                <li class="nav-item">
                                    <span
                                        class="nav-link"
                                        custom__tab_id="${e.id}"
                                        onclick="Tabs_Helper.selectTab_byTabId('${e.id}')"
                                    >
                                        ${e.name}
                                    </span>
                                </li>
                            `;
                        }).join("")}
                    </ul>
                </div>
            `;
    } catch (exception) {
      console.error(exception);
    }
  }

  static async selectTab_byTabId(tabId) {
    try {
      const DIV = document.getElementById("root-tabs");
      const SPAN_ARRAY = DIV.querySelectorAll("span");

      for (let i = 0; i < SPAN_ARRAY.length; ++i) {
        SPAN_ARRAY[i].classList.remove("active");
      }

      for (let i = 0; i < SPAN_ARRAY.length; ++i) {
        const CURRENT = SPAN_ARRAY[i];

        const TAB_ID_1 = `${CURRENT.getAttribute("custom__tab_id")}`;
        const TAB_ID_2 = `${tabId}`;
        const IS_EQUALS = TAB_ID_1.localeCompare(TAB_ID_2) == 0;
        if (IS_EQUALS) {
          CURRENT.classList.add("active");
          break;
        }
      }

      await Tabs_Helper.innerHtml_content_byTabId(tabId);
    } catch (exception) {
      console.error(exception);
    }
  }

  static async innerHtml_content_byTabId(tabId) {
    try {
      const DIV = document.getElementById("root-content");

      switch (tabId) {
        case "2":
          DIV.innerHTML = `
            <div class="container">
              <label for="swagger_ui__select" class="form-label">Конфиг</label>
              <select id="swagger_ui__select" onchange="SwaggerUI_Helper.innerHtmlSwaggerUI()" class="form-select">
                <option>https://pavelhalanin.github.io/grp.nalog.gov.by_api/assets/swagger/grp.nalog.gov.by_as_https.json</option>
                <option>https://pavelhalanin.github.io/grp.nalog.gov.by_api/assets/swagger/grp.nalog.gov.by_as_http.json</option>  
                <option>assets/swagger/grp.nalog.gov.by_as_https.json</option>
                <option>assets/swagger/grp.nalog.gov.by_as_http.json</option>
              </select>
              <div id="swagger-ui"></div>
            </div>
          `;
          SwaggerUI_Helper.innerHtmlSwaggerUI();
          break;

        case "3":
          DIV.innerHTML = `
            <div class="container">
              <div class="mb-3">
                <label class="form-label">УНП плательщика</label>
                <input
                    type="number"
                    class="form-control border-success"
                    id="unp_input"
                    oninput="GrpNalogGovBy_asHttps.innerHtmlData()"
                    placeholder="100582333"
                    value="100582333"
                />
              </div>
              <div id="root-fetch-content"></div>
            </div>
          `;
          await GrpNalogGovBy_asHttps.innerHtmlData();
          break;

        case "4":
          DIV.innerHTML = `
            <div class="container">
              <div class="mb-3">
                <label class="form-label">УНП плательщика</label>
                <input
                    type="number"
                    class="form-control border-success"
                    id="unp_input"
                    oninput="GrpNalogGovBy_asHttp.innerHtmlData()"
                    placeholder="100582333"
                    value="100582333"
                />
              </div>
              <div id="root-fetch-content"></div>
            </div>
          `;
          await GrpNalogGovBy_asHttp.innerHtmlData();
          break;

        case "1":
        default:
          DIV.innerHTML = `
            <div class="container">
              <p>ГРП - Государственный реестр плательщиков.</p>
              <p>
                На оффициальном сайте ГРП предосталвена документация API в текстовом виде:
                <a
                  href="http://grp.nalog.gov.by/grp/rest-api"
                  target="_blank"
                >
                  http://grp.nalog.gov.by/grp/rest-api
                </a>
              </p>
              <p>
                В мире IT принято документировать API в SwaggerUI.
                Результат смотри во вкладке "Документация API".
              </p>
              <div class="alert alert-warning" role="alert">
                <p>
                  Налоговая предоставляет API по протоколу HTTP.
                  При использовании сайтов на протоколе HTTPS не возможно выполнить запрос по HTTP,
                  так как такая политика браузера запрещает такие действия.
                </p>
                <p>Запросы к API по HTTP будут работать только на HTTP сайтах.</p>
                <p>Запросы к API по HTTPS будут работать как на HTTP, так и на HTTPS сайтах.</p>
              </div>
            </div>
          `;
          break;
      }
    } catch (exception) {
      console.error(exception);
    }
  }
}
