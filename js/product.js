//Get the increase button and listen to event
document.getElementById('increase').addEventListener('click', function(e) {
  // Get the quantity element
let increase = document.querySelector("#quantity");
// Set counter to the initial value of the button
  let counter = e.target.value;
  // Increase counter;
  counter++;
  //Update button value back to counter
  e.target.value = counter;
  //Display the new value
  increase.innerHTML = counter;
})


document.getElementById('decrease').addEventListener("click", function(e) {
  let plus = document.querySelector('#increase').value;
  let decrease = document.querySelector('#quantity');
  //Set counter to the increment button value
  let counter = plus;
  //Decrease button
  counter--;
  // Update decrement button value
  e.target.value = counter;
  //Display new value 
  decrease.innerHTML = counter;
  //Update increment button value
  document.getElementById('increase').value = counter;
})

document.getElementById('xtra').addEventListener('click', function(e) {
  let tin = e.target.value;
  alert(`${tin}`);
  document.getElementById('xtra').style.borderColor = "crimson";
})

document.getElementById('small').addEventListener('click', function(e) {
  const lab = e.target.value;
  alert(lab);
document.getElementById('small').style.borderColor = "crimson";
})

document.getElementById('medium').addEventListener('click', function(e) {
  let v = e.target.value;
  alert(v);
document.getElementById('medium').style.borderColor = "crimson";
})
document.getElementById('large').addEventListener('click', function(e) {
  let y = e.target.value;
  alert(y);
document.getElementById('large').style.borderColor = "crimson";
})

document.getElementById('wish').addEventListener('click', function(e) {
  let s = e.target.value;
  alert(s);
  let y = document.getElementById('wish1').value;
  var z = y + s;
  let x = document.getElementById("wish1");
  x.innerHTML =  "<i class=\"las la-heart\"></i>" + " Wishlist" + ": " + z + " Items";
  document.getElementById('wish1').value = z;
})

/* Add to Cart algorithm*/
document.getElementById('addCart'). addEventListener('click', function() {
  alert("Item added to shopping cart");
})
//Retrieve selected products from storage
window.localStorage.myCart;
//Display storage items
//Collect newly selected product information
//Store the product information or update storage
//Display updated storage items