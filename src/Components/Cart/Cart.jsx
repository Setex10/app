import { useContext } from "react";
import { cartContext, showCartContext } from "../../Context/allContext";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = () => {
	const showCart = useContext(showCartContext),
		{ items, totalAmount, addItem, removeItem } = useContext(cartContext),
		totalPrice = `${totalAmount.toFixed(2)}`,
		hasItems = items.length > 0;
	// totalAmount = `${cartCtx.totalAmount.toFixed(2)}`
	const cartItemRemoveHanldler = (item) => {
			removeItem({ ...item, amount: 1 });
		},
		cartItemAddHanldler = (item) => {
			addItem({ ...item, amount: 1 });
		};

	const orederHandler = () => {
		alert(`Estas son tus ordenes 
		` + items.map(item => item.name + item.amount) )
	}


	const cartItem = (
		<ul>
			{items.map((item) => {
				return (
					<CartItem
						name={item.name}
						amount={item.amount}
						price={item.price}
						onRemove={cartItemRemoveHanldler}
						onAdd={cartItemAddHanldler}
						key={item.id}
						id={item.id}
					/>
				);
			})}
		</ul>
	);

	return (
		<Modal>
			{cartItem}
			<div className={styles.total}>
				<span>Total</span>
				<span>{totalPrice}</span>
			</div>
			<div className={styles.actions}>
				<button type="" onClick={showCart.handler} className={styles["button--alt"]}>
					Close
				</button>
				{hasItems && (
					<button type="" onClick={orederHandler} className={styles.button}>
						Order
					</button>
				)}
			</div>
		</Modal>
	);
};

export default Cart;
