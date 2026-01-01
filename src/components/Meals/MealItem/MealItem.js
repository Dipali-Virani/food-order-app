import MealAddForm from "./MealAddForm";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  return (
    <li className={classes.meallist}>
      <div className={classes.meals}>
        <div className={classes.mealname}>
          <h2>{props.name}</h2>
        </div>
        <div className={classes["meal-data"]}>
          <p className={classes["meal-desc"]}>{props.description}</p>
          <p className={classes["meal-price"]}>${props.price}</p>
        </div>
      </div>
      <MealAddForm
        id={props.id}
        name={props.name}
        description={props.description}
        price={props.price}
      />
    </li>
  );
};

export default MealItem;
