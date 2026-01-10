function ProductCard({ product, onClick, onAddToCart }) {
  return (
    <div className="product-card" onClick={onClick}>
      <img src={product.image} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">${product.price}</p>
      <button
        className="add-cart-btn"
        onClick={(e) => {
          e.stopPropagation();
          onAddToCart(product);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
