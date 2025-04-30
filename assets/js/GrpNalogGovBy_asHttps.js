class GrpNalogGovBy_asHttps {
  static async innerHtmlData() {
    const DIV = document.getElementById("root-fetch-content");
    try {
      const INPUT = document.getElementById("unp_input");
      const UNP = INPUT.value;

      const DATA = await GrpNalogGovBy_asHttps.fecthJson_byUnp(UNP);

      DIV.innerHTML = `
        <div class="mb-3">
          <label class="form-label">Полное наименование плательщика</label>
          <input
            type="text"
            class="form-control border-primary"
            value="${DATA.row.vnaimp}"
            readonly
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Краткое наименование плательщика</label>
          <input
            type="text"
            class="form-control border-primary"
            value="${DATA.row.vnaimk}"
            readonly
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Адрес плательщика</label>
          <input
            type="text"
            class="form-control border-primary"
            value="${DATA.row.vpadres}"
            readonly
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Дата постановки на учет</label>
          <input
            type="text"
            class="form-control border-primary"
            value="${DATA.row.dreg}"
            readonly
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Код инспекции МНС</label>
          <input
            type="text"
            class="form-control border-primary"
            value="${DATA.row.nmns}"
            readonly
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Наименование инспекции МНС</label>
          <input
            type="text"
            class="form-control border-primary"
            value="${DATA.row.vmns}"
            readonly
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Код состояния плательщика (1 - Дейстующий, L - ликвидирован)</label>
          <input
            type="text"
            class="form-control border-primary"
            value="${DATA.row.ckodsost}"
            readonly
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Наименование состояния плательщика (1 - Дейстующий, L - ликвидирован)</label>
          <input
            type="text"
            class="form-control border-primary"
            value="${DATA.row.vkods}"
            readonly
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Дата изменения состояния плательщика</label>
          <input
            type="text"
            class="form-control border-primary"
            value="${DATA.row.dlikv}"
            readonly
          />
        </div>
        <div class="mb-3">
          <label class="form-label">?</label>
          <input
            type="text"
            class="form-control border-primary"
            value="${DATA.row.vlikv}"
            readonly
          />
        </div>
        <pre>${JSON.stringify(DATA, null, 2)}</pre>
      `;
    } catch (exception) {
      DIV.innerHTML = `<pre style="color: red;">${exception}</pre>`;
    }
  }

  static async fecthJson_byUnp(unp) {
    const GOOGLE_SCRIPT_ID =
      "AKfycbxzbS3VMIrEByq1wpIlQacNDU4D5Cx5UgEe28M4CAJwyrfw_IXfkPO28NuJuS3vJtdYmQ";
    const _URL = `https://script.google.com/macros/s/${GOOGLE_SCRIPT_ID}/exec?unp=${unp}`;

    const RESPONSE = await fetch(_URL);

    const HTTP_STATUS_CODE = RESPONSE.status;

    if (HTTP_STATUS_CODE !== 200) {
      throw new Error(`УНП '${unp}' вернул HTTP статус ${HTTP_STATUS_CODE}`);
    }

    const _JSON = await RESPONSE.json();

    if (_JSON.status !== 200) {
      throw new Error(
        `HTTP статус код ${_JSON.status} с сообщением "${_JSON.data.message}"`
      );
    }

    return _JSON.data;
  }
}
