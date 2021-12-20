function CartItems(props){
  return(
    <div className="col-lg-3 col-md-4 col-sm-12">
     <div className="card product_item">
       <div className="body">
         <div className="cp_img">
           <img src={props.img} alt="Product" className="img-fluid" />
           <div className="hover">
             <a href="javascript:void(0);" className="btn btn-primary btn-sm waves-effect"><i className="zmdi zmdi-plus" /></a>
             <a href="javascript:void(0);" className="btn btn-primary btn-sm waves-effect"><i className="zmdi zmdi-shopping-cart" /></a>
           </div>
         </div>
         <div className="product_details">
           <h5><a href="ec-product-detail.html">{props.name}</a></h5>
           <ul className="product_price list-unstyled">
             <li className="old_price">{props.prices}</li>
             <li className="new_price">{props.sales}</li>
           </ul>
         </div>
       </div>
     </div>
   </div>
  );
}
export default CartItems;
