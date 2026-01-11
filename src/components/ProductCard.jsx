function ProductCard({ product, onClick, onAddToCart }) {
  return (
    <div className="product-card" onClick={onClick}>
      <img src={product.image} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price"> {product.price}جنيه </p>
      <p className="product-rating">
        Rating: {product.rating.rate} ⭐ ({product.rating.count})
      </p>
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
