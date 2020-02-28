//business-logic
function pizza (size, crust, toppings) {
  this.size = size;
  this.crust = crust;
  this.toppings = [];
}

//user-interface
$(document).ready(function() {
  $("form#top").submit(function(event) {
    event.preventDefault();
  alert("Your order has been received")
  })
})
