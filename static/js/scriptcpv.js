//Sessão CPV
//Pixel de conversão CPV
var $bodyCpv = document.getElementsByTagName('body')[0];
var $btnCopyCpv = document.getElementById('btnCopyCpv');
var secretInfoCpv = document.getElementById('pixel_conversao_cpv').innerHTML;
var resCpv = secretInfoCpv.replace("&lt;","<")
var res2Cpv = resCpv.replace("&gt;",">")
var res3Cpv = res2Cpv.replace('<span class="pixel_conversao">','')
var res4Cpv = res3Cpv.replace('</span>','')
var res5Cpv = res4Cpv.replace('amp;','');
var res6Cpv = res5Cpv.replace('amp;','');
var copyToClipboardCpv = function(secretInfoCpv) {
  var $tempInputCpv = document.createElement('INPUT');
  $bodyCpv.appendChild($tempInputCpv);
  $tempInputCpv.setAttribute('value', res6Cpv)
  $tempInputCpv.select();
  document.execCommand('copy');
  $bodyCpv.removeChild($tempInputCpv);
}
$btnCopyCpv.addEventListener('click', function(ev) {
  copyToClipboardCpv(secretInfoCpv);
});

//Homepage CPV
var $bodyHomeCpv = document.getElementsByTagName('body')[0];
var $btnCopyHomeCpv = document.getElementById('btnCopyHomeCpv');
var secretInfoHomeCpv = document.getElementById('mastertag_homepage_cpv').innerHTML;
var resHomeCpv = secretInfoHomeCpv.replace("&lt;","<")
var res2HomeCpv = resHomeCpv.replace("&gt;",">")
var res3HomeCpv = res2HomeCpv.replace('<span class="tag_generica">','')
var res4HomeCpv = res3HomeCpv.replace('</span>','')
var res5HomeCpv = res4HomeCpv.replace('amp;','');
var res6HomeCpv = res5HomeCpv.replace('amp;','');
var res7HomeCpv = res6HomeCpv.replace('amp;','');
var res8HomeCpv = res7HomeCpv.replace("&gt;",">")
var res9HomeCpv = res8HomeCpv.replace("&lt;","<")

var copyToClipboardHomeCpv = function(secretInfoHomeCpv) {
  var $tempInputHomeCpv = document.createElement('INPUT');
  $bodyHomeCpv.appendChild($tempInputHomeCpv);
  $tempInputHomeCpv.setAttribute('value', res9HomeCpv)
  $tempInputHomeCpv.select();
  document.execCommand('copy');
  $bodyHomeCpv.removeChild($tempInputHomeCpv);
}
$btnCopyHomeCpv.addEventListener('click', function(ev) {
  copyToClipboardHomeCpv(secretInfoHomeCpv);
});

//Basket Cpl
var $bodyBasketCpv = document.getElementsByTagName('body')[0];
var $btnCopyBasketCpv = document.getElementById('btnCopyBasketCpv');
var secretInfoBasketCpv = document.getElementById('mastertag_basket_cpv').innerHTML;
var resBasketCpv = secretInfoBasketCpv.replace("&lt;","<")
var res2BasketCpv = resBasketCpv.replace("&gt;",">")
var res3BasketCpv = res2BasketCpv.replace('amp;','');
var res4BasketCpv = res3BasketCpv.replace('amp;','');
var res5BasketCpv = res4BasketCpv.replace("&lt;","<")
var res6BasketCpv = res5BasketCpv.replace("&gt;",">")
var res7BasketCpv = res6BasketCpv.replace('amp;','');
var res8BasketCpv = res7BasketCpv.replace('<span class="tag_generica">','')
var res9BasketCpv = res8BasketCpv.replace('</span>','')

var copyToClipboardBasketCpv = function(secretInfoBasketCpv) {
  var $tempInputBasketCpv = document.createElement('INPUT');
  $bodyBasketCpv.appendChild($tempInputBasketCpv);
  $tempInputBasketCpv.setAttribute('value', res9BasketCpv)
  $tempInputBasketCpv.select();
  document.execCommand('copy');
  $bodyBasketCpv.removeChild($tempInputBasketCpv);
}
$btnCopyBasketCpv.addEventListener('click', function(ev) {
  copyToClipboardBasketCpv(secretInfoBasketCpv);
});

//Transaction Cpl
var $bodyTransactionCpv = document.getElementsByTagName('body')[0];
var $btnCopyTransactionCpv = document.getElementById('btnCopyTransactionCpv');
var secretInfoTransactionCpv = document.getElementById('mastertag_transaction_cpv').innerHTML;
var resTransactionCpv = secretInfoTransactionCpv.replace("&lt;","<")
var res2TransactionCpv = resTransactionCpv.replace("&gt;",">")
var res3TransactionCpv = res2TransactionCpv.replace('amp;','');
var res4TransactionCpv = res3TransactionCpv.replace('amp;','');
var res5TransactionCpv = res4TransactionCpv.replace("&lt;","<")
var res6TransactionCpv = res5TransactionCpv.replace("&gt;",">")
var res7TransactionCpv = res6TransactionCpv.replace('amp;','');
var res8TransactionCpv = res7TransactionCpv.replace('amp;','');
var res9TransactionCpv = res8TransactionCpv.replace('<span class="tag_generica">','')
var res10TransactionCpv = res9TransactionCpv.replace('</span>','')
var res11TransactionCpv = res10TransactionCpv.replace('<span class="tag_generica">','')
var res12TransactionCpv = res11TransactionCpv.replace('</span>','')

var copyToClipboardTransactionCpv = function(secretInfoTransactionCpv) {
  var $tempInputTransactionCpv = document.createElement('INPUT');
  $bodyTransactionCpv.appendChild($tempInputTransactionCpv);
  $tempInputTransactionCpv.setAttribute('value', res12TransactionCpv)
  $tempInputTransactionCpv.select();
  document.execCommand('copy');
  $bodyTransactionCpv.removeChild($tempInputTransactionCpv);
}
$btnCopyTransactionCpv.addEventListener('click', function(ev) {
  copyToClipboardTransactionCpv(secretInfoTransactionCpv);
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