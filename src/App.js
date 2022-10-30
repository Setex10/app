import { Fragment, useContext } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import { showCartContext } from "./Context/allContext";

const App = () => {
	const showCart = useContext(showCartContext);

	return (
		<Fragment>
			{showCart.value && <Cart />}
			<Header />
			<main>
				<Meals />
			</main>
		</Fragment>
	);
};

export default App;
