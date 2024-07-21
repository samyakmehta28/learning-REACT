import { ChevronDown, ChevronUp } from '../icons';
import { useDispatch } from 'react-redux';
import { removeItem, increase, decrease } from '../Features/Cart/cartSlice';

const CartItem = (item) => {
  //console.log(item);
  const dispatch = useDispatch();
  const { id, title, price, img, amount } = item;
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          remove
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={() => dispatch(increase(id))}>
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>

        <button
          className="amount-btn"
          onClick={() => {
            if (amount > 1) return dispatch(decrease(id));
            return dispatch(removeItem(id));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};
export default CartItem;
