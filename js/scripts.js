//business-logic
function pizza (size, crust, top1, top2) {
  this.size = size;
  this.crust = crust;
  this.top1= top1;
  this.top2= top2;
}

pizza.prototype.fullOrder= function() {
  return "You ordered a " + this.size + " " +this.crust +" pizza with " + this.top1 + " and " + this.top2;
}

//user-interface
$(document).ready(function() {
  $("button#another").click(function() {
    alert("f");
    ("#size").append( '<select class="form-control" id="size">'+
                      '<option>Large</option>'+
                      '<option>Medium</option>'+
                      '<option>Small</option>'
                      
                          );
        
    (".crust").append( '<select class="form-control" id="crust">'+
                  '<option>Thin</option>'+
                  '<option>Deep</option>'+
                  '<option>Cheese-stuffed</option>'+
                  '</select>'
                  );
    
  });
  $("button#deliver").click(function(event) {
    event.preventDefault();
    var address=prompt("Enter your Address :");
    alert("Your order has been received and will be delivered to you in " + address)    
    var size=$("#size").val();
    var crust=$("#crust").val();
    var top1=$("#top1").val();
    var top2=$("#top2").val();
    var newOrder= new pizza (size , crust, top1, top2)
    
    $("ul#customer-order").append("<li><span class=order>" + newOrder.fullOrder() + "Delivered(sh.100)" + "</span></li>");
  });
    $("button#make-order").click(function(event) {
      event.preventDefault();
      var size=$("#size").val();
      var crust=$("#crust").val();
      var top1=$("#top1").val();
      var top2=$("#top2").val();
      var newOrder= new pizza (size , crust, top1, top2)
      
      $("ul#customer-order").append("<li><span class=order>" + newOrder.fullOrder() + "</span></li>"); 
    })
})
