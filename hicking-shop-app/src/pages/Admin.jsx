/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import ProductsContext from "../context/ProductsContext";
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();

  const { products, setProducts } = useContext(ProductsContext);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [qty, setQty] = useState("");
  const [img, setImg] = useState("");

  // remove product
  async function removeProduct(id) {
    try {
      const response = await fetch(`http://localhost:3000/delete/${id}`, {
        method: "DELETE"
      });

      const productResponse = await fetch(`http://localhost:3000/`);
      const productData = await productResponse.json();
      setProducts(productData);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }

  // add product
  async function addProduct() {
    try {
      const response = await fetch("http://localhost:3000/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, price, img, desc, category, qty })
      });

      //
      const productResponse = await fetch(`http://localhost:3000/`);
      const productData = await productResponse.json();
      setProducts(productData);
    } catch (error) {
      console.error("Error adding product:", error);
    }
    // setName("");
    // setPrice("");
    // setCategory("");
    // setDesc("");
    // setImg("");
    // setQty("");
  }

  return (
    <div className="container">
      <>
        <h3 id="naslovForme">New Product</h3>
        <form
          encType="multipart/form-data"
          method="post"
          action="http://localhost:3000/add"
        >
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Price"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Description"
              value={desc}
              onChange={(event) => setDesc(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Qty"
              value={qty}
              onChange={(event) => setQty(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="file"
              className="form-control"
              value={img}
              name="uploaded_file"
              onChange={(event) => setImg(event.target.files[0])}
            />
          </div>
          <button
            onClick={addProduct}
            type="button"
            className="btn btn-primary"
          >
            Add item
          </button>
        </form>
      </>
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
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>
                  <img src={product.img} alt="" height="30px" />
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
                  <button
                    className="btn btn-danger"
                    onClick={() => removeProduct(product.id)}
                  >
                    Delete
                  </button>
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
