var $bodyCpa = document.getElementsByTagName('body')[0];
var $btnCopy = document.getElementById('btnCopy');
var secretInfoCpa = document.getElementById('pixel_conversao_cpa').innerHTML;
var resCpa = secretInfoCpa.replace("&lt;","<")
var res2Cpa = resCpa.replace("&gt;",">")
var res3Cpa = res2Cpa.replace('<span class="pixel_conversao">','')
var res4Cpa = res3Cpa.replace('</span>','')
var res5Cpa = res4Cpa.replace('<span class="pixel_conversao">','')
var res6Cpa = res5Cpa.replace('</span>','')
var res7Cpa = res6Cpa.replace('amp;','');
var res8Cpa = res7Cpa.replace('amp;','');
var copyToClipboardCpa = function(secretInfoCpa) {
  var $tempInputCpa = document.createElement('INPUT');
  $bodyCpa.appendChild($tempInputCpa);
  $tempInputCpa.setAttribute('value', res8Cpa)
  $tempInputCpa.select();
  document.execCommand('copy');
  $bodyCpa.removeChild($tempInputCpa);
}
$btnCopy.addEventListener('click', function(ev) {
  copyToClipboardCpa(secretInfoCpa);
});

var $bodyHome = document.getElementsByTagName('body')[0];
var $btnCopyHome = document.getElementById('btnCopyHome');
var secretInfoHome = document.getElementById('mastertag_homepage').innerHTML;
var resHome = secretInfoHome.replace("&lt;","<")
var res2Home = resHome.replace("&gt;",">")
var res3Home = res2Home.replace("&lt;","<")
var res4Home = res3Home.replace("&gt;",">")
var res5Home = res4Home.replace('amp;','');
var res6Home = res5Home.replace('amp;','');
var res7Home = res6Home.replace('amp;','');
var res8Home = res7Home.replace('<span class="tag_generica">','')
var res9Home = res8Home.replace('</span>','');
var copyToClipboardHome = function(secretInfoHome) {
  var $tempInputHome = document.createElement('INPUT');
  $bodyHome.appendChild($tempInputHome);
  $tempInputHome.setAttribute('value', res9Home)
  $tempInputHome.select();
  document.execCommand('copy');
  $bodyHome.removeChild($tempInputHome);
}
$btnCopyHome.addEventListener('click', function(ev) {
  copyToClipboardHome(secretInfoHome);
});

var $bodyCategory = document.getElementsByTagName('body')[0];
var $btnCopyCategory = document.getElementById('btnCopyCategory');
var secretInfoCategory = document.getElementById('mastertag_category').innerHTML;
var resCategory = secretInfoCategory.replace("&lt;","<")
var res2Category = resCategory.replace("&gt;",">")
var res3Category = res2Category.replace("&lt;","<")
var res4Category = res3Category.replace("&gt;",">")
var res5Category = res4Category.replace('amp;','')
var res6Category = res5Category.replace('amp;','')
var res7Category = res6Category.replace('amp;','')
var res8Category = res7Category.replace('<span class="tag_generica">','')
var res9Category = res8Category.replace('</span>','')
var res10Category = res9Category.replace('amp;','')
var res11Category = res10Category.replace('<span class="tag_generica">','')
var res12Category = res11Category.replace('</span>','')

var copyToClipboardCategory = function(secretInfoCategory) {
  var $tempInputCategory = document.createElement('INPUT');
  $bodyCategory.appendChild($tempInputCategory);
  $tempInputCategory.setAttribute('value', res12Category)
  $tempInputCategory.select();
  document.execCommand('copy');
  $bodyCategory.removeChild($tempInputCategory);
}
$btnCopyCategory.addEventListener('click', function(ev) {
  copyToClipboardCategory(secretInfoCategory);
});

var $bodyProduct = document.getElementsByTagName('body')[0];
var $btnCopyProduct = document.getElementById('btnCopyProduct');
var secretInfoProduct = document.getElementById('mastertag_product').innerHTML;
var resProduct = secretInfoProduct.replace("&lt;","<")
var res2Product = resProduct.replace("&gt;",">")
var res3Product = res2Product.replace("&lt;","<")
var res4Product = res3Product.replace("&gt;",">")
var res5Product = res4Product.replace('amp;','')
var res6Product = res5Product.replace('amp;','')
var res7Product = res6Product.replace('amp;','')
var res8Product = res7Product.replace('<span class="tag_generica">','')
var res9Product = res8Product.replace('</span>','')
var res10Product = res9Product.replace('amp;','')
var res11Product = res10Product.replace('<span class="tag_generica">','')
var res12Product = res11Product.replace('</span>','')
var res13Product = res12Product.replace('amp;','')
var res14Product = res13Product.replace('<span class="tag_generica">','')
var res15Product = res14Product.replace('</span>','')
var res16Product = res15Product.replace('amp;','')
var res17Product = res16Product.replace('<span class="tag_generica">','')
var res18Product = res17Product.replace('</span>','')
var res19Product = res18Product.replace('amp;','')
var res20Product = res19Product.replace('<span class="tag_generica">','')
var res21Product = res20Product.replace('</span>','')
var res22Product = res21Product.replace('amp;','')
var res23Product = res22Product.replace('<span class="tag_generica">','')
var res24Product = res23Product.replace('</span>','')
var res25Product = res24Product.replace('amp;','')
var res26Product = res25Product.replace('<span class="tag_generica">','')
var res27Product = res26Product.replace('</span>','')
var res28Product = res27Product.replace('amp;','')
var res29Product = res28Product.replace('<span class="tag_generica">','')
var res30Product = res29Product.replace('</span>','')
var res31Product = res30Product.replace('amp;','')
var res32Product = res31Product.replace('<span class="tag_generica">','')
var res33Product = res32Product.replace('</span>','')
var res34Product = res33Product.replace('amp;','')
var res35Product = res34Product.replace('<span class="tag_generica">','')
var res36Product = res35Product.replace('</span>','')
var res37Product = res36Product.replace('amp;','')
var res38Product = res37Product.replace('<span class="tag_generica">','')
var res39Product = res38Product.replace('</span>','')
var res40Product = res39Product.replace('amp;','')

var copyToClipboardProduct = function(secretInfoProduct) {
  var $tempInputProduct = document.createElement('INPUT');
  $bodyProduct.appendChild($tempInputProduct);
  $tempInputProduct.setAttribute('value', res40Product)
  $tempInputProduct.select();
  document.execCommand('copy');
  $bodyProduct.removeChild($tempInputProduct);
}
$btnCopyProduct.addEventListener('click', function(ev) {
  copyToClipboardProduct(secretInfoProduct);
});

var $bodyBasket = document.getElementsByTagName('body')[0];
var $btnCopyBasket = document.getElementById('btnCopyBasket');
var secretInfoBasket = document.getElementById('mastertag_basket').innerHTML;
var resBasket = secretInfoBasket.replace("&lt;","<")
var res2Basket = resBasket.replace("&gt;",">")
var res3Basket = res2Basket.replace("&lt;","<")
var res4Basket = res3Basket.replace("&gt;",">")
var res5Basket = res4Basket.replace('amp;','')
var res6Basket = res5Basket.replace('amp;','')
var res7Basket = res6Basket.replace('amp;','')
var res8Basket = res7Basket.replace('<span class="tag_generica">','')
var res9Basket = res8Basket.replace('</span>','')
var res10Basket = res9Basket.replace('amp;','')
var res11Basket = res10Basket.replace('<span class="tag_generica">','')
var res12Basket = res11Basket.replace('</span>','')
var res13Basket = res12Basket.replace('amp;','')
var res14Basket = res13Basket.replace('<span class="tag_generica">','')
var res15Basket = res14Basket.replace('</span>','')
var res16Basket = res15Basket.replace('amp;','')
var res17Basket = res16Basket.replace('<span class="tag_generica">','')
var res18Basket = res17Basket.replace('</span>','')
var res19Basket = res18Basket.replace('amp;','')
var res20Basket = res19Basket.replace('<span class="tag_generica">','')
var res21Basket = res20Basket.replace('</span>','')
var res22Basket = res21Basket.replace('amp;','')
var res23Basket = res22Basket.replace('<span class="tag_generica">','')
var res24Basket = res23Basket.replace('</span>','')
var res25Basket = res24Basket.replace('amp;','')
var res26Basket = res25Basket.replace('<span class="tag_generica">','')
var res27Basket = res26Basket.replace('</span>','')
var res28Basket = res27Basket.replace('amp;','')
var res29Basket = res28Basket.replace('<span class="tag_generica">','')
var res30Basket = res29Basket.replace('</span>','')

var copyToClipboardBasket = function(secretInfoBasket) {
  var $tempInputBasket = document.createElement('INPUT');
  $bodyBasket.appendChild($tempInputBasket);
  $tempInputBasket.setAttribute('value', res30Basket)
  $tempInputBasket.select();
  document.execCommand('copy');
  $bodyBasket.removeChild($tempInputBasket);
}
$btnCopyBasket.addEventListener('click', function(ev) {
  copyToClipboardBasket(secretInfoBasket);
});

var $bodyTransaction = document.getElementsByTagName('body')[0];
var $btnCopyTransaction = document.getElementById('btnCopyTransaction');
var secretInfoTransaction = document.getElementById('mastertag_transaction').innerHTML;
var resTransaction = secretInfoTransaction.replace("&lt;","<")
var res2Transaction = resTransaction.replace("&gt;",">")
var res3Transaction = res2Transaction.replace("&lt;","<")
var res4Transaction = res3Transaction.replace("&gt;",">")
var res5Transaction = res4Transaction.replace('amp;','')
var res6Transaction = res5Transaction.replace('amp;','')
var res7Transaction = res6Transaction.replace('amp;','')
var res8Transaction = res7Transaction.replace('<span class="tag_generica">','')
var res9Transaction = res8Transaction.replace('</span>','')
var res10Transaction = res9Transaction.replace('amp;','')
var res11Transaction = res10Transaction.replace('<span class="tag_generica">','')
var res12Transaction = res11Transaction.replace('</span>','')
var res13Transaction = res12Transaction.replace('amp;','')
var res14Transaction = res13Transaction.replace('<span class="tag_generica">','')
var res15Transaction = res14Transaction.replace('</span>','')
var res16Transaction = res15Transaction.replace('amp;','')
var res17Transaction = res16Transaction.replace('<span class="tag_generica">','')
var res18Transaction = res17Transaction.replace('</span>','')
var res19Transaction = res18Transaction.replace('amp;','')
var res20Transaction = res19Transaction.replace('<span class="tag_generica">','')
var res21Transaction = res20Transaction.replace('</span>','')
var res22Transaction = res21Transaction.replace('amp;','')
var res23Transaction = res22Transaction.replace('<span class="tag_generica">','')
var res24Transaction = res23Transaction.replace('</span>','')
var res25Transaction = res24Transaction.replace('amp;','')
var res26Transaction = res25Transaction.replace('<span class="tag_generica">','')
var res27Transaction = res26Transaction.replace('</span>','')
var res28Transaction = res27Transaction.replace('amp;','')
var res29Transaction = res28Transaction.replace('<span class="tag_generica">','')
var res30Transaction = res29Transaction.replace('</span>','')
var res31Transaction = res30Transaction.replace('amp;','')

var copyToClipboardTransaction = function(secretInfoTransaction) {
  var $tempInputTransaction = document.createElement('INPUT');
  $bodyTransaction.appendChild($tempInputTransaction);
  $tempInputTransaction.setAttribute('value', res31Transaction)
  $tempInputTransaction.select();
  document.execCommand('copy');
  $bodyTransaction.removeChild($tempInputTransaction);
}
$btnCopyTransaction.addEventListener('click', function(ev) {
  copyToClipboardTransaction(secretInfoTransaction);
});

function CopyToClipboard(containerid) {
if (document.selection) { 
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById("mastertag_basket_cpl"));
    range.select().createTextRange();
    document.execCommand("copy"); 

} else if (window.getSelection) {
    var range = document.createRange();
     range.selectNode(document.getElementById("mastertag_basket_cpl"));
     window.getSelection().addRange(range);
     document.execCommand("copy");
     alert("Tag copiada!") 
}}

function CopyToClipboard(containerid) {
if (document.selection) { 
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById("mastertag_transaction_cpl"));
    range.select().createTextRange();
    document.execCommand("copy"); 

} else if (window.getSelection) {
    var range = document.createRange();
     range.selectNode(document.getElementById("mastertag_transaction_cpl"));
     window.getSelection().addRange(range);
     document.execCommand("copy");
     alert("<div class='alert alert-success'><strong>Success!</strong> You should <a href='#' class='alert-link'>read this message</a>.</div>") 
}}

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

