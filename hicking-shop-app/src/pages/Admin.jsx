/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import ProductsContext from "../context/ProductsContext";
import { useNavigate } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import EditProduct from "../components/EditProduct";

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
    const file = event.target.files[0];
    if (file) {
      try {
        const base64 = await fileToBase64(file);
        setBase64String(base64);
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
        <EditProduct
          editMode={editMode}
          saveEditedProduct={saveEditedProduct}
          cancelEditing={cancelEditing}
          name={name}
          setName={setName}
          price={price}
          setPrice={setPrice}
          desc={desc}
          setDesc={setDesc}
          category={category}
          setCategory={setCategory}
          qty={qty}
          setQty={setQty}
        />
      ) : (
        <AddProduct
          addProduct={addProduct}
          name={name}
          setName={setName}
          price={price}
          setPrice={setPrice}
          desc={desc}
          setDesc={setDesc}
          category={category}
          setCategory={setCategory}
          qty={qty}
          setQty={setQty}
          img={img}
          setImg={setImg}
          handleFileChange={handleFileChange}
        />
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
              <tr key={product.id} className="align-middle">
                <th scope="row">{product.id}</th>
                <td>
                  <img src={product.img} alt="" height="50px" />
                </td>
                <td>{product.name}</td>
                <td>{product.qty}</td>
                <td>{product.price} RSD</td>
                <td>
                  <button
                    className="btn btn-info m-0"
                    onClick={() => navigate(`/single/${product.id}`)}
                  >
                    View
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-warning m-0"
                    onClick={() => handleEditProduct(product.id)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger m-0"
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
