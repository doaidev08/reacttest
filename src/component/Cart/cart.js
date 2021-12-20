import CartItems from './cartitems.js';
function Cart(){
  return(
    <div class="container">
        <div class="row clearfix">
        <CartItems
          img="images/pr1.jpg"
          name="Product 1"
          prices="20$"
          sales="15$"
        />

        <CartItems
          img="images/pr2.jpg"
          name="Product 2"
          prices="20$"
          sales="15$"
        />

        <CartItems
          img="images/pr3.jpg"
          name="Product 3"
          prices="30$"
          sales="25$"
        />
        <CartItems
          img="images/pr4.jpeg"
          name="Product 4"
          prices="40$"
          sales="35$"
        />
        <CartItems
          img="images/pr5.jpg"
          name="Product 5"
          prices="50$"
          sales="45$"
        />
        <CartItems
          img="images/pr6.jpg"
          name="Product 6"
          prices="60$"
          sales="55$"
        />
        <CartItems
          img="images/pr7.jpg"
          name="Product 7"
          prices="70$"
          sales="65$"
        />
        <CartItems
          img="images/pr8.jpg"
          name="Product 8"
          prices="80$"
          sales="75$"
        />
        </div>
    </div>
  );
}
export default Cart;
