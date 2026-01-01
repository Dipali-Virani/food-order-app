import classes from "./Header.module.css";
import mealImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h2>Food Delivery App</h2>
        <HeaderCartButton onClick={props.onCartVisibility} />
      </header>
      <div className={classes["header-image"]}>
        <img src={mealImage} alt="header img" className={classes.img} />
      </div>
    </>
  );
};

export default Header;
