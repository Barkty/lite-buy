(function(){
  var addTo = document.querySelector('#addCart');
  var cart = document.getElementById('myCart').value;
  var cartE = document.getElementById('myCart');
  
addTo.addEventListener('click', function(e){
 let x = e.target.value;
 let y = x + cart;
 cartE.innerHTML = y;
})
function getItems() {
  var storedItems = window.localStorage.myCart;
  if (!myCart) {
    cart.innerHTML = "<p>You do not have any items in your cart</p";
  } else {
    cart.innerHTML = myCart;
  }
}
getItems();
})();
