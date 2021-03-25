// mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

// $('.carousel-control-prev').click(function() {
//     $('#demo{{forloop.counter}}').carousel('prev');
//   });
  
//   $('.carousel-control-next').click(function() {
//     $('#demo{{forloop.counter}}').carousel('next');
//   });
//   if (localStorage.getItem('cart') == null) {
//     var cart = {};
// } else {
//     cart = JSON.parse(localStorage.getItem('cart'));
//     updateCart(cart);
// }
// // If the add to cart button is clicked, add/increment the item
// //$('.cart').click(function() {
// $('.divpr').on('click', 'button.cart', function() {
//     var idstr = this.id.toString();
//     if (cart[idstr] != undefined) {
//         qty = cart[idstr][0] + 1;
        
        
        
//     } else {
//         qty = 1;
//         name = document.getElementById('name'+idstr).innerHTML
//         price = document.getElementById('price'+idstr).innerHTML
//         cart[idstr] = [qty, name, parseInt(price)];

//     }
//     // item = "{{product.id}}";
   
//     // document.getElementById('qv' + item).style.visibility = 'hidden';
   
    
//     // for (var k = 0; k < btn.length; k++) {
//     //   btn[k].style.visibility = 'hidden';
//     // }
    
    
//     updateCart(cart);
// });
// //Add Popover to cart
// $('#popcart').popover();
// updatePopover(cart);

// function updatePopover(cart) {
//     console.log('We are inside updatePopover');
//     var popStr = "";
//     popStr = popStr + "<h5> Cart for your items in my shopping cart </h5><div class='mx-2 my-2'>";
//     var i = 1;
//     for (var item in cart) {
//         popStr = popStr + "<b>" + i + "</b>. ";
//         popStr = popStr + document.getElementById('name' + item).innerHTML.slice(0, 19) + "... Qty: " + cart[item][0] + '<br>';
//         i = i + 1;
//     }
//     popStr = popStr + "</div> <a href='/shop/checkout'><button class='btn btn-primary' id ='checkout'>Checkout</button></a> <button class='btn btn-primary' onclick='clearCart()' id ='clearCart'>Clear Cart</button>     "
//     console.log(popStr);
//     document.getElementById('popcart').setAttribute('data-content', popStr);
//     // $('#popcart').popover('show');
// }

// function clearCart() {
//     cart = JSON.parse(localStorage.getItem('cart'));
//     for (var item in cart) {
//         document.getElementById('div' + item).innerHTML = '<button id="' + item + '" class="btn btn-primary cart">Add To Cart</button>'
//     }
//     localStorage.clear();
//     cart = {};
//     updateCart(cart);
// }

// function updateCart(cart) {
//     var sum = 0;
//     for (var item in cart) {
//         sum = sum + cart[item][0];
//         document.getElementById('div' + item).innerHTML = "<button id='minus"  + item + "' class='btn btn-warning btn-sm minus' >-</button> <span id='val" + item + "''>" + cart[item][0] + "</span> <button id='plus" + item + "' class='btn btn-success btn-sm plus'> + </button>";
//     }
//     localStorage.setItem('cart', JSON.stringify(cart));
//     document.getElementById('cart').innerHTML = sum;
//     console.log(cart);
//     updatePopover(cart);
// }
// // If plus or minus button is clicked, change the cart as well as the display value
// $('.divpr').on("click", "button.minus", function() {
//     a = this.id.slice(7, );
//     cart['pr' + a][0] = cart['pr' + a][0] - 1;
//     cart['pr' + a][0] = Math.max(0, cart['pr' + a][0]);
//     document.getElementById('valpr' + a).innerHTML = cart['pr' + a][0];
//     if (cart['pr'+ a][0]==0)
//     {
//         document.getElementById('divpr' + a).innerHTML = '<button id="pr'+a+'" class=" btn btn-primary cart">Add To Cart</button>'
//         delete cart['pr' + a];
//     //     var btn = document.getElementsByClassName('divqv');
//     // for (var k = 0; k < btn.length; k++) {
//     //   btn[k].style.visibility = 'visible';
//     //     }
//     }
//     else{

//         document.getElementById('valpr' + a).innerHTML = cart['pr' + a][0];
//     }
//     updateCart(cart);
// });
// $('.divpr').on("click", "button.plus", function() {
//     a = this.id.slice(6, );
//     cart['pr' + a][0] = cart['pr' + a][0] + 1;
//     document.getElementById('valpr' + a).innerHTML = cart['pr' + a][0];

//     updateCart(cart);
// });

// //     $('img').hover(function (){
// //     $(this).css("background-color", "lightgray");

// // 	},function(){
// // 		$(this).css("background-color", "transparent");

// // 	}
// //   );
// //   $("p").hover(function(){
// //   $(this).css("background-color", "yellow");
// //   }, function(){
// //   $(this).css("background-color", "pink");
// // });

// //   $(document).ready(function() {
// //     $('.carousel-inner').carousel({
// //       interval: 1200
// //     })
// //   });
// //   $(document).ready(function() { 
// //   $('#carousel-inner').carousel({ interval: 3000, cycle: true });
// // }); 
if (localStorage.getItem('cart') == null) {
    var cart = {};
  } else {
    cart = JSON.parse(localStorage.getItem('cart'));
    updateCart(cart);
  }
  // If the add to cart button is clicked, add/increment the item
  //$('.cart').click(function() {
  $('.divpr').on('click', 'button.cart', function () {
    var idstr = this.id.toString();
    if (cart[idstr] != undefined) {
      qty = cart[idstr][0] + 1;


    } else {
      qty = 1;
      name = document.getElementById('name' + idstr).innerHTML
      price = document.getElementById('price' + idstr).innerHTML
      cart[idstr] = [qty, name, parseInt(price)];

    }
    // item = "{{product.id}}";

     //document.getElementById('qv' + item).style.visibility = 'hidden';


    // for (var k = 0; k < btn.length; k++) {
    //   btn[k].style.visibility = 'hidden';
    // }


    updateCart(cart);
  });
  //Add Popover to cart
  $('#popcart').popover();
  updatePopover(cart);

  function updatePopover(cart) {
    console.log('We are inside updatePopover');
    var popStr = "";
    popStr = popStr + "<br><h5> Cart for your items in my shopping cart </h5><div class='mx-2 my-2'>";
    var i = 1;
    for (var item in cart) {
      popStr = popStr + "<b>" + i + "</b>. ";
      popStr = popStr + document.getElementById('name' + item).innerHTML.slice(0, 19) + "... Qty: " + cart[item][0] +
        '<br>';
      i = i + 1;
    }
    popStr = popStr +
      "</div> <a href='/shop/checkout'><button class='btn btn-primary' id ='checkout'>Checkout</button></a> <button class='btn btn-primary' onclick='clearCart()' id ='clearCart'>Clear Cart</button>     "
    console.log(popStr);
    document.getElementById('popcart').setAttribute('data-content', popStr);
    
    // $('#popcart').popover('show');
  }

  function clearCart() {
    cart = JSON.parse(localStorage.getItem('cart'));
    for (var item in cart) {
      document.getElementById('div' + item).innerHTML = "<button id='minus" + item +
        "' class='btn btn-warning btn-sm minus' >-</button> <span id='val" + item + "''>" + cart[item][0] +
        "</span> <button id='plus" + item + "' class='btn btn-success btn-sm plus'> + </button>";
    }
    localStorage.clear();
    cart = {};
    updateCart(cart);
  }

  function updateCart(cart) {
    var sum = 0;
    for (var item in cart) {
      sum = sum + cart[item][0];
      
      document.getElementById('div' + item).innerHTML = "<button id='minus" + item +
        "' class='btn btn-warning btn-sm minus' >-</button> <span id='val" + item + "''>" + cart[item][0] +
        "</span> <button id='plus" + item + "' class='btn btn-success btn-sm plus'> + </button>";
      // document.getElementById('div'+item).style.display = 'none';
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    document.getElementById('cart').innerHTML = sum;
    console.log(cart);
    updatePopover(cart);
  }
  // If plus or minus button is clicked, change the cart as well as the display value
  $('.divpr').on("click", "button.minus", function () {
    a = this.id.slice(7, );
    cart['pr' + a][0] = cart['pr' + a][0] - 1;
    cart['pr' + a][0] = Math.max(0, cart['pr' + a][0]);
    document.getElementById('valpr' + a).innerHTML = cart['pr' + a][0];
    if (cart['pr' + a][0] == 0) {
      document.getElementById('divpr' + a).innerHTML = "<button id='minus"+
        "' class='btn btn-warning btn-sm minus' >-</button> <span id='val" +"''>" + '0' +
        "</span> <button id='plus" + "' class='btn btn-success btn-sm plus'> + </button>";
      delete cart['pr' + a];
      //     var btn = document.getElementsByClassName('divqv');
      // for (var k = 0; k < btn.length; k++) {
      //   btn[k].style.visibility = 'visible';
      //     }
    } else {

      document.getElementById('valpr' + a).innerHTML = cart['pr' + a][0];
    }
    updateCart(cart);
  });
  $('.divpr').on("click", "button.plus", function () {
    a = this.id.slice(6, );
    cart['pr' + a][0] = cart['pr' + a][0] + 1;
    document.getElementById('valpr' + a).innerHTML = cart['pr' + a][0];

    updateCart(cart);
  });

  //     $('img').hover(function (){
  //     $(this).css("background-color", "lightgray");

  // 	},function(){
  // 		$(this).css("background-color", "transparent");

  // 	}
  //   );
  //   $("p").hover(function(){
  //   $(this).css("background-color", "yellow");
  //   }, function(){
  //   $(this).css("background-color", "pink");
  // });

  //   $(document).ready(function() {
  //     $('.carousel-inner').carousel({
  //       interval: 1200
  //     })
  //   });
  //   $(document).ready(function() { 
  //   $('#carousel-inner').carousel({ interval: 3000, cycle: true });
  // }); 
  console.log('USER:', user)
  if (user == 'AnonymousUser') {
    console.log('User is not authenticated')
  } else {
    console.log('User is  authenticated')
  }
  $('.btn-warning').click(function (event) {
    event.stopPropogation
  })