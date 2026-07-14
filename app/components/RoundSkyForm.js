// app/components/RoundSkyForm.js
//
// Round Sky's embed script relies on document.write(), which is only safe
// when it runs during the *initial* parse of a document. Next.js uses
// client-side navigation between pages (via <Link>), so if this snippet
// were dropped directly into the page, document.write() would run *after*
// the page has already finished loading on any client-side nav — which
// makes the browser wipe out the entire page and replace it with just the
// form. Wrapping it in a same-origin `srcDoc` iframe gives it its own fresh
// document every time, so document.write() is always safe regardless of
// how the user arrived at the page.

const ROUND_SKY_USER_ID = "40qJOtvcVss5QVuBNK2aF6NWtx4uM0IBcYX3089hjPU.";

function buildSrcDoc({ subId, subId2, subId3 }) {
  const inputOptions = {
    UserID: ROUND_SKY_USER_ID,
    Style: "STYLE1",
    FormID: "INSTALLMENT_STEP",
    SubID: subId || "",
    SubID2: subId2 || "",
    SubID3: subId3 || "",
    Domain: "properpathloans.com",
    Height: "AUTO",
    StepAmountSelect: "buttons",
  };

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<style>html,body{margin:0;padding:0;background:transparent;}</style>
</head>
<body>
<script src="https://www.rndframe.com/server/web/js/json.min.js" type="text/javascript"><\/script>
<script type="text/javascript">
  var srcURL = 'https://www.rndframe.com/server';
  var inputOptions = ${JSON.stringify(inputOptions)};
  document.write('<scr' + 'ipt type="text/javascript" src="' + srcURL + '/init.php?vn=' + encodeURIComponent(JSON.stringify(inputOptions)) + '"></scr' + 'ipt>');
  if (!inputOptions.TargetDivID) { document.write('<di' + 'v id="rsForm"></di' + 'v>'); }
<\/script>
</body>
</html>`;
}

export default function RoundSkyForm({ subId, subId2, subId3, height = "840px" }) {
  return (
    <iframe
      id="application-form"
      title="Application Form"
      srcDoc={buildSrcDoc({ subId, subId2, subId3 })}
      style={{ height, width: "100%", border: "none" }}
      scrolling="auto"
    />
  );
}
