import Header from "./components/Layout/Header";
import "./App.css";
import Meals from "./components/Meals/Meals";
import CartModal from "./components/Cart/CartModal";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartModalShown, setIsCartModalShown] = useState(false);

  const showCartHandler = () => {
    setIsCartModalShown(true);
  };

  const hideCartHandler = () => {
    setIsCartModalShown(false);
  };

  return (
    <CartProvider>
      {isCartModalShown && <CartModal onCartVisibility={hideCartHandler} />}
      <main>
        <Header onCartVisibility={showCartHandler} />
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
