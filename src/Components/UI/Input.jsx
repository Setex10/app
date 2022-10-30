import {forwardRef} from 'react'
import styles from "./Input.module.css";

const Input = forwardRef(({ label, input }, ref) => {
	return (
		<div className={styles.input}>
			<label>
				{label} <input ref={ref} {...input} />
			</label>
		</div>
	);
});

export default Input;
