import classes from "./MealAddForm.module.css";
import CartContext from "../../../store/cart-context";
import { useContext, useRef, useState } from "react";

const MealAddForm = (props) => {
  const cartCtx = useContext(CartContext);
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    console.log(cartCtx.totalAmount, enteredAmountNumber);
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      description: props.description,
      price: props.price,
      amount: enteredAmountNumber,
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.input}>
        <label htmlFor="mealamount">Amount</label>
        <input
          ref={amountInputRef}
          type="number"
          name="mealamount"
          id="mealamount"
          min={1}
          max={5}
          step={1}
          defaultValue={1}
        />
      </div>
      <button type="submit" className={classes.add}>
        + Add
      </button>
      {!amountIsValid && <p>Please enter a valid amount(1-5).</p>}
    </form>
  );
};

export default MealAddForm;
