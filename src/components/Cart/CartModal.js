import { createPortal } from "react-dom";
import Cart from "./Cart";

const element = document.getElementById("modal");

const CartModal = (props) => {
  return (
    <>
      {createPortal(
        <Cart onCartVisibility={props.onCartVisibility} />,
        element
      )}
    </>
  );
};

export default CartModal;
