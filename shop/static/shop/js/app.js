// // mybutton = document.getElementById("myBtn");

// // // When the user scrolls down 20px from the top of the document, show the button
// // window.onscroll = function() {scrollFunction()};

// // function scrollFunction() {
// //   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
// //     mybutton.style.display = "block";
// //   } else {
// //     mybutton.style.display = "none";
// //   }
// // }

// // // When the user clicks on the button, scroll to the top of the document
// // function topFunction() {
// //   document.body.scrollTop = 0; // For Safari
// //   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// // }

// // $('.carousel-control-prev').click(function() {
// //     $('#demo{{forloop.counter}}').carousel('prev');
// //   });
  
// //   $('.carousel-control-next').click(function() {
// //     $('#demo{{forloop.counter}}').carousel('next');
// //   });
// //   if (localStorage.getItem('cart') == null) {
// //     var cart = {};
// // } else {
// //     cart = JSON.parse(localStorage.getItem('cart'));
// //     updateCart(cart);
// // }
$('.divopr').on('click', 'button.carto', function () {
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


  updateCarto(cart);
});

function updateCarto(cart) {
  var sum = 0;
  for (var item in cart) {
    sum = sum + cart[item][0];
    console.log(document.getElementById('divo' + item));
    document.getElementById('divo' + item).innerHTML = "<button id='minus" + item +
      "' class='btn btn-warning btn-sm minus' >-</button> <span id='valo" + item + "''>" + cart[item][0] +
      "</span> <button id='plus" + item + "' class='btn btn-success btn-sm plus'> + </button>";
    // document.getElementById('div'+item).style.display = 'none';
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  document.getElementById('cart').innerHTML = sum;
  console.log(cart);
  updatePopover(cart);
}
$('.divopr').on("click", "button.minus", function () {
  a = this.id.slice(7, );
  cart['pr' + a][0] = cart['pr' + a][0] - 1;
  cart['pr' + a][0] = Math.max(0, cart['pr' + a][0]);
  document.getElementById('valopr' + a).innerHTML = cart['pr' + a][0];
  if (cart['pr' + a][0] == 0) {
    // document.getElementById('divpr' + a).innerHTML = "<button id=id='pr'+a+' class='btn btn-warning cart' >-</button> <span id='val" +"''>" + '0' +
    //   "</span> <button id='pr'+a+'' class='btn btn-success btn-sm cart'> + </button>"

  
    document.getElementById('divpr' + a).innerHTML = '<button id="pr'+a+'" class="btn btn-warning btn-sm cart">-</button> 0 <button id="pr'+a+'" class="btn btn-success btn-sm cart">+</button>'
    delete cart['opr' + a];
    
    //     var btn = document.getElementsByClassName('divqv');
    // for (var k = 0; k < btn.length; k++) {
    //   btn[k].style.visibility = 'visible';
    //     }
  } else {

    document.getElementById('valopr' + a).innerHTML = cart['pr' + a][0];
  }
  updateCarto(cart);
});
$('.divopr').on("click", "button.plus", function () {
  a = this.id.slice(6, );
  cart['pr' + a][0] = cart['pr' + a][0] + 1;
 
  document.getElementById('valopr' + a).innerHTML = cart['pr' + a][0];


  updateCarto(cart);
});