function ProductDetails({ product, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={product.image} alt={product.title} className="modal-image" />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default ProductDetails;
