//business-logic
function pizza (size, crust, toppings) {
  this.size = size;
  this.crust = crust;
  this.toppings = [];
}

//user-interface
$(document).ready(function() {
  $("button#make-order").click(function(event) {
    event.preventDefault();
  var address=prompt("Enter your Address :")
  alert("Your order has been received and will be delivered to you in " + address)
  })
})
