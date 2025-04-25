import useCart from "../../../hooks/useCart";

const Cart = () => {
  const [cart] = useCart();
  return (
    <div>
      <h2 className="text-6xl">My Cart</h2>
    </div>
  );
};

export default Cart;
