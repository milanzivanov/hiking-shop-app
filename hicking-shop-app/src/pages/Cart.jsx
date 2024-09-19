import { useContext } from "react";
import CartContext from "../context/CartContext";

function Cart() {
  const { cart, setCart } = useContext(CartContext);
  // console.log(cart);

  const removeProduct = (index) => {
    let tempCart = [...cart];
    tempCart.splice(index, 1);
    setCart([...tempCart]);
  };

  // function removeProduct(index) {
  //   setCart((prevCart) => {
  //     return prevCart.filter((_, i) => i !== index);
  //   });
  // }

  const totalPrice = cart.reduce((acc, cartItem) => {
    return acc + cartItem.qty * cartItem.price;
  }, 0);

  return (
    <div className="container">
      {cart.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Unit Price</th>
              <th scope="col">Qty</th>
              <th scope="col">Price</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>
                    <img
                      // src="http://localhost:3000/img/boots.jpg"
                      src={item.img}
                      alt=""
                      height="30px"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>{item.qty}</td>
                  <td>${item.price * item.qty}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeProduct(index)}
                    >
                      remove
                    </button>
                  </td>
                </tr>
              );
            })}

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>total</td>
              <td>${totalPrice}</td>
              <td>
                <button className="btn btn-danger" onClick={() => setCart([])}>
                  Clear Cart
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <h4 className="text-center">There are no products in the cart.</h4>
      )}
    </div>
  );
}

export default Cart;
