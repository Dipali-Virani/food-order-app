import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <li className={classes.cartitem}>
      <div className={classes.item}>
        <h3>{props.name}</h3>
        <div className={classes.spans}>
          <span className={classes.price}>${props.price}</span>
          <span className={classes.amount}>x{props.amount}</span>
        </div>
      </div>
      <div className={classes.action}>
        <button className={classes.plus} onClick={props.onAdd}>
          +
        </button>
        <button className={classes.minus} onClick={props.onRemove}>
          -
        </button>
      </div>
    </li>
  );
};

export default CartItem;
