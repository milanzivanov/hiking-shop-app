/* eslint-disable react/prop-types */
function EditProduct({
  saveEditedProduct,
  cancelEditing,
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
      <h3 className="mb-4">Edit Product</h3>

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
  );
}

export default EditProduct;
