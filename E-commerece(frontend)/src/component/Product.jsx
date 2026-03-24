import React from 'react';
import ProductCard from './ProductCard'; // correct path

function Product() {
 const sampleProducts = [
  {
    id: 1,
    category: 'Deciduous Trees',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6',
    rating: 4.2,
    isSale: true,
    isNew: false,
  },
  {
    id: 2,
    category: 'Evergreen Trees',
    image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5',
    rating: 3,
    isSale: false,
    isNew: true,
  },
  {
    id: 3,
    category: 'Coniferous Trees',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2',
    rating: 3.6,
    isSale: true,
    isNew: true,
  },
  {
    id: 4,
    category: 'Broadleaf Trees',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    rating: 4,
    isSale: true,
    isNew: true,
  },
  {
    id: 5,
    category: 'Creepers',
    image: 'https://images.unsplash.com/photo-1628754108013-7d8c4d8d3d7e',
    rating: 3.3,
    isSale: true,
    isNew: true,
  },
  {
    id: 6,
    category: 'Aquatic Plants',
    image: 'https://images.unsplash.com/photo-1581092160607-798e24185e9e',
    rating: 4.5,
    isSale: true,
    isNew: true,
  },
  {
    id: 7,
    category: 'Medicinal Plants',
    image: 'https://images.unsplash.com/photo-1611909023032-2dd1e5b83d08',
    rating: 4.8,
    isSale: true,
    isNew: true,
  },
  {
    id: 8,
    category: 'Herbs',
    image: 'https://images.unsplash.com/photo-1607305387299-a3d9611cd469',
    rating: 4.8,
    isSale: true,
    isNew: true,
  },
];
  return (
    <div className="products-container">
      <h2>Our Plants Collection</h2>
      <div className="products-grid">
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Product;