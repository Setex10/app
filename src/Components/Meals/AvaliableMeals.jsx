import { DUMMY_MEALS } from "../Data/Data";

import Card from "../UI/Card";
import styles from "./AvaliableMeals.module.css";
import MealsList from "./MealItem/MealItemList";

const AvaliableMeals = () => {
	return (
		<section className={styles.meals}>
			<Card>
				<ul>
					{DUMMY_MEALS.map((dummy) => {
						return (
							<MealsList
								name={dummy.name}
								description={dummy.description}
								price={dummy.price}
								key={Math.random()}
								id={dummy.id}
							/>
						);
					})}
				</ul>
			</Card>
		</section>
	);
};

export default AvaliableMeals;
