//business-logic
function pizza (size, crust, toppings) {
  this.size = size;
  this.crust = crust;
  this.toppings = [];
}
pizza.prototype.fullOrder= function() {
  return this.size + " " +this.crust ;
}
//user-interface
$(document).ready(function() {
  $("button#another").click(function(event) {
    event.preventDefault();
    ("#pizza-size").append('<select class="form-control" id="size">'+
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
  $("button#make-order").click(function(event) {
    event.preventDefault();
  var size=$("#size").val();
  var crust=$("#crust").val();
  var newOrder= new pizza (size , crust)
  var top=$("input:checkbox[name=top]:checked").val();
   newOrder.toppings.push(top)
  var address=prompt("Enter your Address :");
  alert("Your order has been received and will be delivered to you in " + address)
  
  $("ul#customer-order").append("<li><span class=order>" + newOrder.fullOrder()  + "</span></li>");
  });
})
