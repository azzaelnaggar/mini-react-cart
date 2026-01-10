function CartIcon({ cart, isOpen, onToggle }) {
  return (
    <div className="cart-icon-container">
      <div className="cart-icon" onClick={onToggle}>
        🛒
        {cart.length > 0 && (
          <span className="cart-badge">
            {cart.reduce((acc, item) => acc + item.quantity, 0)}
          </span>
        )}
      </div>

      {isOpen && (
        <div className="cart-dropdown">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <span>{item.title} x {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <hr />
              <p className="cart-total">
                Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default CartIcon;
