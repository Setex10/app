import { createContext } from "react";

const cartContext = createContext({
	items: [],
	totalAmount: 0,
	addItem: (item) => {},
	removeItem: (item) => {},
});

const showCartContext = createContext({
	value: "",
	handler: "",
});

export { cartContext, showCartContext };
