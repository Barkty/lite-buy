(function(){
  var addTo = document.querySelector('#addCart');
  var cart = document.getElementById('myCart').value;
  var cartE = document.getElementById('myCart');
  
addTo.addEventListener('click', function(e){
 let x = e.target.value;
 let y = x + cart;
 cartE.innerHTML = y;
})
//Retrieve selected products from storage
var items = document.querySelector('.myItems');

function getItems(){
  var storedItems = window.localStorage.myCart;
  if(!storedItems) {
    items.innerHTML = "You do not have any items in your shopping cart."
  } else {
    //Display storage items
    items.innerHTML = storedItems;
  }
}
getItems();
//Collect newly selected product information
//Store the product information or update storage
//Display updated storage items
})();
