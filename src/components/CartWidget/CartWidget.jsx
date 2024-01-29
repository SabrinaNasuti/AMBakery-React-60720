import pinkCart from "./assets/pinkCart.jpg";
import cartWidgetStyle from "../CartWidget/cartWidgetStyle/cartWidget.module.css";


export const CartWidget = () => {
  return (
    <div>
      <img src={ pinkCart} alt="pink-cart-widget" className= { cartWidgetStyle.image}/>
      0
    </div>
  );
};
