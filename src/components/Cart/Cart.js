import classes from "./Cart.module.css";
import Card from "../UI/Card";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import CartItem from "./CartItem";

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onCartVisibility}></div>
  );
};

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const hasCartItems = cartCtx.items.length > 0;

  const addCartItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeCartItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes.cartlist}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={addCartItemHandler.bind(null, item)}
          onRemove={removeCartItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <>
      <Backdrop onCartVisibility={props.onCartVisibility} />
      <Card className={classes.modal}>
        <div className={classes["modal-content"]}>
          <div>{cartItems}</div>
          <div className={classes["total-price"]}>
            <span>Total Amount</span>
            <span className={classes["context-price"]}>
              ${cartCtx.totalAmount.toFixed(2)}
            </span>
          </div>
          <div className={classes.action}>
            <button
              type="submit"
              className={classes.close}
              onClick={props.onCartVisibility}
            >
              close
            </button>
            {hasCartItems && (
              <button type="submit" className={classes.order}>
                order
              </button>
            )}
          </div>
        </div>
      </Card>
    </>
  );
};

export default Cart;
