import { useState, useReducer } from "react";
import { cartContext, showCartContext } from "./allContext";

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const operation = (type, listValue) => {
	if (type === "plus") {
		return listValue[0] + listValue[1] * listValue[2];
	} else if (type === "minus") {
		return listValue[0] - listValue[1] * listValue[2];
	}
};

const cartReducer = (state, action) => {
	const operationTotalAmount = operation(action.operation, [
		state.totalAmount,
		action.item.price,
		action.item.amount,
	]);
	const itemFindIndex = state.items.findIndex((item) => item.id === action.item.id);
	const itemFind = state.items[itemFindIndex];
	let updateItems;

	switch (action.type) {
		case "ADD_ITEM":
			if (itemFind) {
				const updateItem = {
					...itemFind,
					amount: itemFind.amount + action.item.amount,
				};
				updateItems = [...state.items];

				updateItems[itemFindIndex] = updateItem;
			} else {
				updateItems = state.items.concat(action.item);
			}

			return {
				items: updateItems,
				totalAmount: operationTotalAmount,
			};

		case "REMOVE_ITEM":
			if (itemFind.amount === 1) {
				updateItems = state.items.filter((item) => item.id !== action.item.id);
				return {
					items: [...updateItems],
					totalAmount: state.totalAmount,
				};
			} else {
				itemFind.amount -= action.item.amount;
				return {
					items: [...state.items],
					totalAmount: operationTotalAmount,
				};
			}
		default:
			break;
	}
	return defaultCartState;
};

export const ContextProvider = ({ children }) => {
	const [showCartVal, setShowCartVal] = useState(false);

	const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

	const showCartHandler = () => {
		setShowCartVal(!showCartVal);
	};

	const addItemToCartHandler = (item) => {
		dispatchCartAction({ type: "ADD_ITEM", operation: "plus", item });
	};

	const removeItemToCartHandler = (item) => {
		dispatchCartAction({ type: "REMOVE_ITEM", operation: "minus", item });
	};

	const cartContextValue = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemToCartHandler,
	};

	return (
		<showCartContext.Provider
			value={{
				value: showCartVal,
				handler: showCartHandler,
			}}
		>
			<cartContext.Provider value={cartContextValue}>{children}</cartContext.Provider>
		</showCartContext.Provider>
	);
};

export default ContextProvider;
