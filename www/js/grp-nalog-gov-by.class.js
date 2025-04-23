class GrpNalogGovBy {
  static async innerHtmlData() {
    const DIV = document.getElementById("content");
    try {
      const INPUT = document.getElementById("unp_input");
      const UNP = INPUT.value;

      const DATA = await GrpNalogGovBy.fecthJson_byUnp(UNP);

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
    const _URL = `/api/v1/state-register-payers/?unp=${unp}`;

    const RESPONSE = await fetch(_URL);

    const HTTP_STATUS = RESPONSE.status;

    if (HTTP_STATUS !== 200) {
      throw new Error(`HTTP status ${HTTP_STATUS}`);
    }

    const _JSON = await RESPONSE.json();
    return _JSON;
  }
}
