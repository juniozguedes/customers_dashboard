//Sessão CPL
//Pixel de conversão CPL
var $bodyCpl = document.getElementsByTagName('body')[0];
var $btnCopyCpl = document.getElementById('btnCopyCpl');
var secretInfoCpl = document.getElementById('pixel_conversao_cpl').innerHTML;
var resCpl = secretInfoCpl.replace("&lt;","<")
var res2Cpl = resCpl.replace("&gt;",">")
var res3Cpl = res2Cpl.replace('<span class="pixel_conversao">','')
var res4Cpl = res3Cpl.replace('</span>','')
var res5Cpl = res4Cpl.replace('amp;','');
var res6Cpl = res5Cpl.replace('amp;','');
var copyToClipboardCpl = function(secretInfoCpl) {
  var $tempInputCpl = document.createElement('INPUT');
  $bodyCpl.appendChild($tempInputCpl);
  $tempInputCpl.setAttribute('value', res6Cpl)
  $tempInputCpl.select();
  document.execCommand('copy');
  $bodyCpl.removeChild($tempInputCpl);
}
$btnCopyCpl.addEventListener('click', function(ev) {
  copyToClipboardCpl(secretInfoCpl);
});

//Homepage CPL
var $bodyHomeCpl = document.getElementsByTagName('body')[0];
var $btnCopyHomeCpl = document.getElementById('btnCopyHomeCpl');
var secretInfoHomeCpl = document.getElementById('mastertag_homepage_cpl').innerHTML;
var resHomeCpl = secretInfoHomeCpl.replace("&lt;","<")
var res2HomeCpl = resHomeCpl.replace("&gt;",">")
var res3HomeCpl = res2HomeCpl.replace('<span class="tag_generica">','')
var res4HomeCpl = res3HomeCpl.replace('</span>','')
var res5HomeCpl = res4HomeCpl.replace('amp;','');
var res6HomeCpl = res5HomeCpl.replace('amp;','');
var res7HomeCpl = res6HomeCpl.replace('amp;','');
var res8HomeCpl = res7HomeCpl.replace("&gt;",">")
var res9HomeCpl = res8HomeCpl.replace("&lt;","<")

var copyToClipboardHomeCpl = function(secretInfoHomeCpl) {
  var $tempInputHomeCpl = document.createElement('INPUT');
  $bodyHomeCpl.appendChild($tempInputHomeCpl);
  $tempInputHomeCpl.setAttribute('value', res9HomeCpl)
  $tempInputHomeCpl.select();
  document.execCommand('copy');
  $bodyHomeCpl.removeChild($tempInputHomeCpl);
}
$btnCopyHomeCpl.addEventListener('click', function(ev) {
  copyToClipboardHomeCpl(secretInfoHomeCpl);
});

//Basket Cpl
var $bodyBasketCpl = document.getElementsByTagName('body')[0];
var $btnCopyBasketCpl = document.getElementById('btnCopyBasketCpl');
var secretInfoBasketCpl = document.getElementById('mastertag_basket_cpl').innerHTML;
var resBasketCpl = secretInfoBasketCpl.replace("&lt;","<")
var res2BasketCpl = resBasketCpl.replace("&gt;",">");
var res3BasketCpl = res2BasketCpl.replace('amp;','');
var res4BasketCpl = res3BasketCpl.replace('amp;','');
var res5BasketCpl = res4BasketCpl.replace("&lt;","<");
var res6BasketCpl = res5BasketCpl.replace("&gt;",">");
var res7BasketCpl = res6BasketCpl.replace('amp;','');
var res8BasketCpl = res7BasketCpl.replace('<span class="tag_generica">','');
var res9BasketCpl = res8BasketCpl.replace('</span>','');

var copyToClipboardBasketCpl = function(secretInfoBasketCpl) {
  var $tempInputBasketCpl = document.createElement('INPUT');
  $bodyBasketCpl.appendChild($tempInputBasketCpl);
  $tempInputBasketCpl.setAttribute('value', res9BasketCpl)
  $tempInputBasketCpl.select();
  document.execCommand('copy');
  $bodyBasketCpl.removeChild($tempInputBasketCpl);
}
$btnCopyBasketCpl.addEventListener('click', function(ev) {
  copyToClipboardBasketCpl(secretInfoBasketCpl);
});

//Transaction Cpl
var $bodyTransactionCpl = document.getElementsByTagName('body')[0];
var $btnCopyTransactionCpl = document.getElementById('btnCopyTransactionCpl');
var secretInfoTransactionCpl = document.getElementById('mastertag_transaction_cpl').innerHTML;
var resTransactionCpl = secretInfoTransactionCpl.replace("&lt;","<")
var res2TransactionCpl = resTransactionCpl.replace("&gt;",">")
var res3TransactionCpl = res2TransactionCpl.replace('amp;','');
var res4TransactionCpl = res3TransactionCpl.replace('amp;','');
var res5TransactionCpl = res4TransactionCpl.replace("&lt;","<")
var res6TransactionCpl = res5TransactionCpl.replace("&gt;",">")
var res7TransactionCpl = res6TransactionCpl.replace('amp;','');
var res8TransactionCpl = res7TransactionCpl.replace('amp;','');
var res9TransactionCpl = res8TransactionCpl.replace('<span class="tag_generica">','')
var res10TransactionCpl = res9TransactionCpl.replace('</span>','')
var res11TransactionCpl = res10TransactionCpl.replace('<span class="tag_generica">','')
var res12TransactionCpl = res11TransactionCpl.replace('</span>','')

var copyToClipboardTransactionCpl = function(secretInfoTransactionCpl) {
  var $tempInputTransactionCpl = document.createElement('INPUT');
  $bodyTransactionCpl.appendChild($tempInputTransactionCpl);
  $tempInputTransactionCpl.setAttribute('value', res12TransactionCpl)
  $tempInputTransactionCpl.select();
  document.execCommand('copy');
  $bodyTransactionCpl.removeChild($tempInputTransactionCpl);
}
$btnCopyTransactionCpl.addEventListener('click', function(ev) {
  copyToClipboardTransactionCpl(secretInfoTransactionCpl);
});



// Script snackbar

function popSucesso() {
    // Get the snackbar DIV
    var x = document.getElementById("sucesso");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

//gerador de inputfields