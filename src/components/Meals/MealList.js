import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./MealList.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
];

const MealList = () => {
  return (
    <Card>
      <section className={classes.meals}>
        <ul className={classes["meal-list"]}>
          {DUMMY_MEALS.map((item) => (
            <MealItem
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          ))}
        </ul>
      </section>
    </Card>
  );
};

export default MealList;
