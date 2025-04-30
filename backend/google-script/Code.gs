function doGet(e) {
  try {
    const UNP = e.parameter.unp;

    if (!UNP) {
      const DATA = {
        status: 400,
        data: "Parameter 'unp' is missing",
      };

      const JSON_STRING = JSON.stringify(DATA);

      return ContentService.createTextOutput(JSON_STRING).setMimeType(
        ContentService.MimeType.JSON
      );
    }

    const URL = `http://grp.nalog.gov.by/api/grp-public/data?unp=${UNP}`;

    const RESPONSE = UrlFetchApp.fetch(URL, {
      muteHttpExceptions: true,
    });
    const HTTP_STATUS_CODE = RESPONSE.getResponseCode();
    const RESPONSE_DATA = JSON.parse(RESPONSE.getContentText());

    const DATA = {
      status: HTTP_STATUS_CODE,
      data: RESPONSE_DATA,
    };

    const JSON_STRING = JSON.stringify(DATA);

    return ContentService.createTextOutput(JSON_STRING).setMimeType(
      ContentService.MimeType.JSON
    );
  } catch (error) {
    const DATA = {
      status: 500,
      data: `${error.message}`,
    };

    const JSON_STRING = JSON.stringify(DATA);

    return ContentService.createTextOutput(JSON_STRING).setMimeType(
      ContentService.MimeType.JSON
    );
  }
}
