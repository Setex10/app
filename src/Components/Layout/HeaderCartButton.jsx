import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import React, { Fragment, useContext } from "react";
import { cartContext, showCartContext } from "../../Context/allContext";

const HeaderCartButton = (props) => {
	const showCart = useContext(showCartContext);

	const cartCtx = useContext(cartContext);

	const numberOfCartItem = cartCtx.items.reduce((acc, item) => {
		return acc + item.amount
	}, 0)

	return (
		<Fragment>
			<button onClick={showCart.handler} className={styles.button}>
				<span className={styles.icon}>
					<CartIcon />
				</span>
				<span>Your Cart</span>
				<span className={styles.badge}>{numberOfCartItem}</span>
			</button>
		</Fragment>
	);
};

export default HeaderCartButton;
