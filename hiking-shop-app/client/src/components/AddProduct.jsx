/* eslint-disable react/prop-types */
function AddProduct({
  handleFileChange,
  addProduct,
  name,
  setName,
  price,
  setPrice,
  desc,
  setDesc,
  category,
  setCategory,
  qty,
  setQty
}) {
  return (
    <>
      <h3 className="mb-4">Add new product</h3>
      <form readOnly>
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
        <button onClick={addProduct} type="button" className="btn btn-primary">
          Add item
        </button>
      </form>
    </>
  );
}

export default AddProduct;
