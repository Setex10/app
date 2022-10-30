import classes from './CartItem.module.css';

const CartItem = ({name, amount, price, onRemove, onAdd, id}) => {
  const priced = `${price}`;

  const item = {name, amount, price, id}

  const onAddHandler = () => {
    onAdd(item)
  }

  const onRemoveHandler = () => {
    onRemove(item)
  }

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{priced}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemoveHandler}>−</button>
        <button onClick={onAddHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
