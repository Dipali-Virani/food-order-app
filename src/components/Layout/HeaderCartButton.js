import classes from "./HeaderCartButton.module.css";
import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes["cart-icon"]}>
        <FaCartShopping size={16} />
      </span>
      <span className={classes["button-text"]}>Cart</span>
      <span className={classes.bedge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
