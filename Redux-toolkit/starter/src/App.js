import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import Modal from './components/Modal';
import LoadingCart from './components/LoadingCart';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCartItems } from './Features/Cart/cartSlice';

function App() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.modal);
  const { isLoading } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCartItems());
  }, []);

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      {isLoading ? <LoadingCart /> : <CartContainer />}
    </main>
  );
}
export default App;
