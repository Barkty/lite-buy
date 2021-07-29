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
  const xSmall = e.target.dataset.size;
  document.getElementById('xtra').style = "border: 2px solid crimson; background-color: crimson; color: whitesmoke";
})

document.getElementById('small').addEventListener('click', function(e) {
  const small = e.target.dataset.size;
  document.getElementById('small').style = "border: 2px solid crimson; background-color: crimson; color: whitesmoke";
})

document.getElementById('medium').addEventListener('click', function(e) {
  const medium = e.target.dataset.size;
  document.getElementById('medium').style = "border: 2px solid crimson; background-color: crimson; color: whitesmoke";
})
document.getElementById('large').addEventListener('click', function(e) {
  const large = e.target.dataset.size;
  document.getElementById('large').style = "border: 2px solid crimson; background-color: crimson; color: whitesmoke";
})
document.getElementById('xtra').addEventListener('onmousedown', function(e){

  alert("Mouse down!");
})

document.getElementById('wish').addEventListener('click', function(e) {
  const s = document.getElementById('wish').dataset.size;
  let num = parseInt(s);
  let y = document.getElementById('wish1').dataset.size;
  let num1 = parseInt(y);
  var z = num + num1;
  let x = document.getElementById("wish1");
  x.innerHTML =  "<i class=\"las la-heart\"></i>" + " Wishlist" + ": " + z + " Items"; //displays NaN wishlist
  document.getElementById('wish1').dataset.size = z;
})

/* Add to Cart algorithm*/
document.getElementById('addCart').addEventListener('click', function(e) {
  let val = e.target.value;
  let vaL = parseInt(val);
  let newVal = document.getElementById('cartBtn').dataset.size;
  let vaL1 = parseInt(newVal);
  let val1 = vaL + vaL1;
  document.getElementById('cartBtn').dataset.size = val1;
  let val2 = document.querySelector('#cartBtn');
  val2.innerHTML = "<i class=\"las la-shopping-cart\"></i>" + val1 + " Cart items";
})