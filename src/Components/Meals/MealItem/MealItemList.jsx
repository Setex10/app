import { useContext } from 'react';
import { cartContext } from '../../../Context/allContext';
import MealItemForm from './MealItemForm';
import styles from './MealItemList.module.css';

const MealsList = ({ name, description, price, id}) => {
	const cartCtx = useContext(cartContext);

	const addToCartHandler = (amount) => {
		cartCtx.addItem({
			id, name, amount, price
		})
	}

	return (
		<li className={styles.contentLi}>
			<div>
				<h2 className={styles.name}>{name}</h2>
				<p className={styles.description}>{description}</p>
				<p className={styles.price}>${price}</p>
			</div>
			<div>
                <MealItemForm onAddToCart={addToCartHandler}/>
            </div>
		</li>
	);
};

export default MealsList;
