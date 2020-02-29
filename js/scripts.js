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
  var address=prompt("Enter your Address :");
  alert("Your order has been received and will be delivered to you in " + address)
  });
  $("button#another").click(function(event) {
    event.preventDefault();
    (".size").append('<select class="form-control" id="size">'+
                      '<option>Large</option>'+
                      '<option>Medium</option>'+
                      '<option>Small</option>'+
                      '</select>'
    );
    (".crust").append( '<select class="form-control" id="crust">'+
                  '<option>Thin</option>'+
                  '<option>Deep</option>'+
                  '<option>Cheese-stuffed</option>'+
                  '</select>'
                  );
    (".top").append('<form id="top">'+
                    '<input type="checkbox" id="topping1">'+
                    '<label for="topping1"> Pepperoni</label><br />'+
                    '<input type="checkbox" id="topping2">'+
                    '<label for="topping2"> Pineapple</label><br />'+
                    '<input type="checkbox" id="topping3" >'+
                    '<label for="topping3"> Beefstripe</label><br />'+
                    '<input type="checkbox" id="topping4" >'+
                    '<label for="topping4">Cheesetop</label><br />'+
                    '<input type="checkbox" id="topping5" >'+
                    '<label for="topping5">Sweetcorn </label><br />'+
                    '<input type="checkbox" id="topping6" >'+
                    '<label for="topping6">Mushroom</label><br />'+
                    '</form>'
                    );
  });
})
