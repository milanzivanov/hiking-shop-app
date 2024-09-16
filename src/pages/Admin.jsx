import { useContext } from "react";
import ProductsContext from "../context/ProductsContext";
import { useNavigate } from "react-router-dom";

function Admin() {
  const { products, setProducts } = useContext(ProductsContext);
  const navigate = useNavigate();

  return (
    <div className="container">
      <hr />
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Qty</th>
            <th scope="col">Price</th>
            <th scope="col">View</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>
                  <img
                    // src="http://localhost:3000/img/boots.jpg"
                    src={product.img}
                    alt=""
                    height="30px"
                  />
                </td>
                <td>{product.name}</td>
                <td>{product.qty}</td>
                <td>${product.price}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => navigate(`/single/${product.id}`)}
                  >
                    View
                  </button>
                </td>
                <td>
                  <button className="btn btn-warning">Edit</button>
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
