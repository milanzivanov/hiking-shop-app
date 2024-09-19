/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import ProductsContext from "../context/ProductsContext";
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();

  const { products, setProducts } = useContext(ProductsContext);

  const [editMode, setEditMode] = useState({ mode: false, id: null });

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [qty, setQty] = useState("");
  const [img, setImg] = useState("");

  // for add product image
  const [base64String, setBase64String] = useState("");

  // edit product
  function handleEditProduct(id) {
    setEditMode({ mode: true, id });
    const product = products.find((product) => product.id === id);
    console.log(product);
    setName(product.name);
    setPrice(product.price);
    setDesc(product.desc);
    setCategory(product.category);
    setQty(product.qty);
  }

  // save changes
  async function saveEditedProduct(event) {
    event.preventDefault();

    const data = {
      name,
      price,
      desc,
      category,
      qty
    };

    console.log(data);

    try {
      const response = await fetch(
        `http://localhost:3000/edit/${editMode.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }
      );

      setName("");
      setPrice("");
      setCategory("");
      setDesc("");
      setImg("");
      setQty("");

      // refresh products
      const productResponse = await fetch(`http://localhost:3000/`);
      const productData = await productResponse.json();
      setProducts(productData);
    } catch (error) {
      console.error("Error in editing product:", error);
    }
  }

  // cancel editing
  const cancelEditing = () => {
    setEditMode({ mode: false, id: null });

    setName("");
    setPrice("");
    setDesc("");
    setCategory("");
    setQty("");
  };

  // remove product
  async function removeProduct(id) {
    try {
      const response = await fetch(`http://localhost:3000/delete/${id}`, {
        method: "DELETE"
      });

      // refresh products
      const productResponse = await fetch(`http://localhost:3000/`);
      const productData = await productResponse.json();
      setProducts(productData);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }

  // convert file to base64
  function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      // On successful file read
      reader.onload = function (event) {
        const base64String = event.target.result.split(",")[1]; // Extract Base64 part
        resolve(base64String);
      };

      // On error during file reading
      reader.onerror = function (error) {
        reject(error);
      };

      // Read file as a data URL
      reader.readAsDataURL(file);
    });
  }

  const handleFileChange = async (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      try {
        const base64 = await fileToBase64(file); // Convert file to Base64
        setBase64String(base64); // Set the Base64 string in state
        setImg(file.name);
      } catch (error) {
        console.error("Error converting file to Base64", error);
      }
    }
  };

  // add product
  async function addProduct() {
    try {
      const response = await fetch("http://localhost:3000/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          price,
          img,
          base64String,
          desc,
          category,
          qty
        })
      });

      //
      const productResponse = await fetch(`http://localhost:3000/`);
      const productData = await productResponse.json();
      setProducts(productData);
      console.log(productData);
    } catch (error) {
      console.error("Error adding product:", error);
    }
    setName("");
    setPrice("");
    setCategory("");
    setDesc("");
    setImg("");
    setQty("");
  }

  return (
    <div className="container">
      {editMode.mode ? (
        <>
          <h3 id="naslovForme">Edit Product</h3>

          <form onSubmit={saveEditedProduct}>
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
            <button type="submit" className="btn btn-primary">
              Save product
            </button>
          </form>
          <button className="btn btn-danger" onClick={cancelEditing}>
            Cancel
          </button>
        </>
      ) : (
        <>
          <h3 id="naslovForme">Add new product</h3>
          <form>
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
                name="file"
                onChange={handleFileChange}
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
      )}

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
                <td>{product.price} RSD</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => navigate(`/single/${product.id}`)}
                  >
                    View
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => handleEditProduct(product.id)}
                  >
                    Edit
                  </button>
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
