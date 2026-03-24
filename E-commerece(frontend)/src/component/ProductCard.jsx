function ProductCard({ product }) {
  if (!product) return null; // 🔥 important

  return (
    <div className="product-card">
      <div className="product-image">
        <img 
          src={product?.image} 
          alt={product?.category || 'Plant'}
        />
        {product?.isSale && <span className="sale-badge">Sale!</span>}
        {product?.isNew && <span className="new-badge">New</span>}
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product?.category}</h3>
        <p className="product-rating">Rating: {product?.rating} ★</p>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
}
export default ProductCard