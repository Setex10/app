import { useRef, useState } from "react";
import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = ({onAddToCart}) => {
    const [refIsValid, setRefIsValid] = useState(true);
	const amountInputRef = useRef();

	const subtmitHandler = (event) => {
		event.preventDefault();

		const enteredAmount = Number(amountInputRef.current.value.trim());

		if (enteredAmount.length === 0 || enteredAmount < 1 || enteredAmount > 5) {
            setRefIsValid(false);
			return;
		}
        setRefIsValid(true);

        onAddToCart(enteredAmount)
	};

	return (
		<form className={styles.form} onSubmit={subtmitHandler}>
			<Input
				ref={amountInputRef}
				label={"Amount"}
				input={{
					type: "number",
					min: "1",
					step: "1",
					defaultValue: "1",
				}}
			/>
			<button>+ Add</button>
            {!refIsValid && <p>Please enter a valid amount</p>}
		</form>
	);
};

export default MealItemForm;
