//Homepage CPA MULTI
var $bodyHomeCpa = document.getElementsByTagName('body')[0];
var $btnCopyHomeCpa = document.getElementById('btnCopyHomeCpa');
var secretInfoHomeCpa = document.getElementById('mastertag_homepage_cpa').innerHTML;
var resHomeCpa = secretInfoHomeCpa.replace("&lt;","<")
var res2HomeCpa = resHomeCpa.replace("&gt;",">")
var res3HomeCpa = res2HomeCpa.replace('<span class="tag_generica">','')
var res4HomeCpa = res3HomeCpa.replace('</span>','')
var res5HomeCpa = res4HomeCpa.replace('amp;','');
var res6HomeCpa = res5HomeCpa.replace('amp;','');
var res7HomeCpa = res6HomeCpa.replace('amp;','');
var res8HomeCpa = res7HomeCpa.replace("&gt;",">")
var res9HomeCpa = res8HomeCpa.replace("&lt;","<")


var copyToClipboardHomeCpa = function(secretInfoHomeCpa) {
  var $tempInputHomeCpa = document.createElement('INPUT');
  $bodyHomeCpa.appendChild($tempInputHomeCpa);
  $tempInputHomeCpa.setAttribute('value', res9HomeCpa)
  $tempInputHomeCpa.select();
  document.execCommand('copy');
  $bodyHomeCpa.removeChild($tempInputHomeCpa);
}
$btnCopyHomeCpa.addEventListener('click', function(ev) {
  copyToClipboardHomeCpa(secretInfoHomeCpa);
});

//Category CPA
var $bodyCategoryCpa = document.getElementsByTagName('body')[0];
var $btnCopyCategoryCpa = document.getElementById('btnCopyCategoryCpa');
var secretInfoCategoryCpa = document.getElementById('mastertag_category_cpa').innerHTML;
var resCategoryCpa = secretInfoCategoryCpa.replace("&lt;","<")
var res2CategoryCpa = resCategoryCpa.replace("&gt;",">")
var res3CategoryCpa = res2CategoryCpa.replace('<span class="tag_generica">','')
var res4CategoryCpa = res3CategoryCpa.replace('</span>','')
var res5CategoryCpa = res4CategoryCpa.replace('<span class="tag_generica">','')
var res6CategoryCpa = res5CategoryCpa.replace('</span>','')
var res7CategoryCpa = res6CategoryCpa.replace('amp;','');
var res8CategoryCpa = res7CategoryCpa.replace('amp;','');
var res9CategoryCpa = res8CategoryCpa.replace('amp;','');
var res10CategoryCpa = res9CategoryCpa.replace('amp;','');
var res11CategoryCpa = res10CategoryCpa.replace('amp;','');
var res12CategoryCpa = res11CategoryCpa.replace('amp;','');
var res13CategoryCpa = res12CategoryCpa.replace('amp;','');
var res14CategoryCpa = res13CategoryCpa.replace("&lt;","<")
var res15CategoryCpa = res14CategoryCpa.replace("&gt;",">")


var copyToClipboardCategoryCpa = function(secretInfoCategoryCpa) {
  var $tempInputCategoryCpa = document.createElement('INPUT');
  $bodyCategoryCpa.appendChild($tempInputCategoryCpa);
  $tempInputCategoryCpa.setAttribute('value', res15CategoryCpa)
  $tempInputCategoryCpa.select();
  document.execCommand('copy');
  $bodyCategoryCpa.removeChild($tempInputCategoryCpa);
}
$btnCopyCategoryCpa.addEventListener('click', function(ev) {
  copyToClipboardCategoryCpa(secretInfoCategoryCpa);
});

//Product CPA
var $bodyProductCpa = document.getElementsByTagName('body')[0];
var $btnCopyProductCpa = document.getElementById('btnCopyProductCpa');
var secretInfoProductCpa = document.getElementById('mastertag_product_cpa').innerHTML;
var resProductCpa = secretInfoProductCpa.replace("&lt;","<")
var res2ProductCpa = resProductCpa.replace("&gt;",">")
var res3ProductCpa = res2ProductCpa.replace('amp;','');
var res4ProductCpa = res3ProductCpa.replace('<span class="tag_generica">','')
var res5ProductCpa = res4ProductCpa.replace('</span>','')
var res6ProductCpa = res5ProductCpa.replace('<span class="tag_generica">','')
var res7ProductCpa = res6ProductCpa.replace('</span>','')
var res8ProductCpa = res7ProductCpa.replace('amp;','');
var res9ProductCpa = res8ProductCpa.replace('amp;','');
var res10ProductCpa = res9ProductCpa.replace('amp;','');
var res11ProductCpa = res10ProductCpa.replace('amp;','');
var res12ProductCpa = res11ProductCpa.replace('amp;','');
var res13ProductCpa = res12ProductCpa.replace("&lt;","<")
var res14ProductCpa = res13ProductCpa.replace("&gt;",">")
var res15ProductCpa = res14ProductCpa.replace('<span class="tag_generica">','')
var res16ProductCpa = res15ProductCpa.replace('</span>','')
var res17ProductCpa = res16ProductCpa.replace('amp;','');
var res18ProductCpa = res17ProductCpa.replace('<span class="tag_generica">','')
var res19ProductCpa = res18ProductCpa.replace('</span>','')
var res20ProductCpa = res19ProductCpa.replace('amp;','');
var res21ProductCpa = res20ProductCpa.replace('<span class="tag_generica">','')
var res22ProductCpa = res21ProductCpa.replace('</span>','')
var res23ProductCpa = res22ProductCpa.replace('amp;','');
var res24ProductCpa = res23ProductCpa.replace('<span class="tag_generica">','')
var res25ProductCpa = res24ProductCpa.replace('</span>','')
var res26ProductCpa = res25ProductCpa.replace('amp;','');
var res27ProductCpa = res26ProductCpa.replace('<span class="tag_generica">','')
var res28ProductCpa = res27ProductCpa.replace('</span>','')
var res29ProductCpa = res28ProductCpa.replace('amp;','');
var res30ProductCpa = res29ProductCpa.replace('<span class="tag_generica">','')
var res31ProductCpa = res30ProductCpa.replace('</span>','')
var res32ProductCpa = res31ProductCpa.replace('amp;','');
var res33ProductCpa = res32ProductCpa.replace('<span class="tag_generica">','')
var res34ProductCpa = res33ProductCpa.replace('</span>','')
var res35ProductCpa = res34ProductCpa.replace('amp;','');
var res36ProductCpa = res35ProductCpa.replace('<span class="tag_generica">','')
var res37ProductCpa = res36ProductCpa.replace('</span>','')
var res38ProductCpa = res37ProductCpa.replace('<span class="tag_generica">','')
var res39ProductCpa = res38ProductCpa.replace('</span>','')
var res40ProductCpa = res39ProductCpa.replace('amp;','');



var copyToClipboardProductCpa = function(secretInfoProductCpa) {
  var $tempInputProductCpa = document.createElement('INPUT');
  $bodyProductCpa.appendChild($tempInputProductCpa);
  $tempInputProductCpa.setAttribute('value', res40ProductCpa)
  $tempInputProductCpa.select();
  document.execCommand('copy');
  $bodyProductCpa.removeChild($tempInputProductCpa);
}
$btnCopyProductCpa.addEventListener('click', function(ev) {
  copyToClipboardProductCpa(secretInfoProductCpa);
});

//Basket CPA
var $bodyBasketCpa = document.getElementsByTagName('body')[0];
var $btnCopyBasketCpa = document.getElementById('btnCopyBasketCpa');
var secretInfoBasketCpa = document.getElementById('mastertag_basket_cpa').innerHTML;
var resBasketCpa = secretInfoBasketCpa.replace("&lt;","<")
var res2BasketCpa = resBasketCpa.replace("&gt;",">")
var res3BasketCpa = res2BasketCpa.replace('amp;','');
var res4BasketCpa = res3BasketCpa.replace('<span class="tag_generica">','')
var res5BasketCpa = res4BasketCpa.replace('</span>','')
var res6BasketCpa = res5BasketCpa.replace('<span class="tag_generica">','')
var res7BasketCpa = res6BasketCpa.replace('</span>','')
var res8BasketCpa = res7BasketCpa.replace('amp;','');
var res9BasketCpa = res8BasketCpa.replace('amp;','');
var res10BasketCpa = res9BasketCpa.replace('amp;','');
var res11BasketCpa = res10BasketCpa.replace('amp;','');
var res12BasketCpa = res11BasketCpa.replace('amp;','');
var res13BasketCpa = res12BasketCpa.replace("&lt;","<")
var res14BasketCpa = res13BasketCpa.replace("&gt;",">")
var res15BasketCpa = res14BasketCpa.replace('<span class="tag_generica">','')
var res16BasketCpa = res15BasketCpa.replace('</span>','')
var res17BasketCpa = res16BasketCpa.replace('amp;','');
var res18BasketCpa = res17BasketCpa.replace('<span class="tag_generica">','')
var res19BasketCpa = res18BasketCpa.replace('</span>','')
var res20BasketCpa = res19BasketCpa.replace('amp;','');
var res21BasketCpa = res20BasketCpa.replace('<span class="tag_generica">','')
var res22BasketCpa = res21BasketCpa.replace('</span>','')
var res23BasketCpa = res22BasketCpa.replace('amp;','');
var res24BasketCpa = res23BasketCpa.replace('<span class="tag_generica">','')
var res25BasketCpa = res24BasketCpa.replace('</span>','')
var res26BasketCpa = res25BasketCpa.replace('amp;','');
var res27BasketCpa = res26BasketCpa.replace('<span class="tag_generica">','')
var res28BasketCpa = res27BasketCpa.replace('</span>','')
var res29BasketCpa = res28BasketCpa.replace('amp;','');
var res30BasketCpa = res29BasketCpa.replace('<span class="tag_generica">','')
var res31BasketCpa = res30BasketCpa.replace('</span>','')

var copyToClipboardBasketCpa = function(secretInfoBasketCpa) {
  var $tempInputBasketCpa = document.createElement('INPUT');
  $bodyBasketCpa.appendChild($tempInputBasketCpa);
  $tempInputBasketCpa.setAttribute('value', res31BasketCpa)
  $tempInputBasketCpa.select();
  document.execCommand('copy');
  $bodyBasketCpa.removeChild($tempInputBasketCpa);
}
$btnCopyBasketCpa.addEventListener('click', function(ev) {
  copyToClipboardBasketCpa(secretInfoBasketCpa);
});

//Transaction CPA
var $bodyTransactionCpa = document.getElementsByTagName('body')[0];
var $btnCopyTransactionCpa = document.getElementById('btnCopyTransactionCpa');
var secretInfoTransactionCpa = document.getElementById('mastertag_transaction_cpa').innerHTML;
var resTransactionCpa = secretInfoTransactionCpa.replace("&lt;","<")
var res2TransactionCpa = resTransactionCpa.replace("&gt;",">")
var res3TransactionCpa = res2TransactionCpa.replace('amp;','');
var res4TransactionCpa = res3TransactionCpa.replace('<span class="tag_generica">','')
var res5TransactionCpa = res4TransactionCpa.replace('</span>','')
var res6TransactionCpa = res5TransactionCpa.replace('<span class="tag_generica">','')
var res7TransactionCpa = res6TransactionCpa.replace('</span>','')
var res8TransactionCpa = res7TransactionCpa.replace('amp;','');
var res9TransactionCpa = res8TransactionCpa.replace('amp;','');
var res10TransactionCpa = res9TransactionCpa.replace('amp;','');
var res11TransactionCpa = res10TransactionCpa.replace('amp;','');
var res12TransactionCpa = res11TransactionCpa.replace('amp;','');
var res13TransactionCpa = res12TransactionCpa.replace("&lt;","<")
var res14TransactionCpa = res13TransactionCpa.replace("&gt;",">")
var res15TransactionCpa = res14TransactionCpa.replace('<span class="tag_generica">','')
var res16TransactionCpa = res15TransactionCpa.replace('</span>','')
var res17TransactionCpa = res16TransactionCpa.replace('amp;','');
var res18TransactionCpa = res17TransactionCpa.replace('<span class="tag_generica">','')
var res19TransactionCpa = res18TransactionCpa.replace('</span>','')
var res20TransactionCpa = res19TransactionCpa.replace('amp;','');
var res21TransactionCpa = res20TransactionCpa.replace('<span class="tag_generica">','')
var res22TransactionCpa = res21TransactionCpa.replace('</span>','')
var res23TransactionCpa = res22TransactionCpa.replace('amp;','');
var res24TransactionCpa = res23TransactionCpa.replace('<span class="tag_generica">','')
var res25TransactionCpa = res24TransactionCpa.replace('</span>','')
var res26TransactionCpa = res25TransactionCpa.replace('amp;','');
var res27TransactionCpa = res26TransactionCpa.replace('<span class="tag_generica">','')
var res28TransactionCpa = res27TransactionCpa.replace('</span>','')
var res29TransactionCpa = res28TransactionCpa.replace('amp;','');
var res30TransactionCpa = res29TransactionCpa.replace('<span class="tag_generica">','')
var res31TransactionCpa = res30TransactionCpa.replace('</span>','')

var copyToClipboardTransactionCpa = function(secretInfoTransactionCpa) {
  var $tempInputTransactionCpa = document.createElement('INPUT');
  $bodyTransactionCpa.appendChild($tempInputTransactionCpa);
  $tempInputTransactionCpa.setAttribute('value', res31TransactionCpa)
  $tempInputTransactionCpa.select();
  document.execCommand('copy');
  $bodyTransactionCpa.removeChild($tempInputTransactionCpa);
}
$btnCopyTransactionCpa.addEventListener('click', function(ev) {
  copyToClipboardTransactionCpa(secretInfoTransactionCpa);
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

