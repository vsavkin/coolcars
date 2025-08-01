'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { use } from 'react';
import { products, useCart } from '@coolcars/data';
import { getCarIllustration } from '@coolcars/ui-components';
import styles from './page.module.css';

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.productDetail}>
          <div className={styles.imageSection}>
            <div className={styles.illustration}>
              {getCarIllustration(product.category)}
            </div>
            {!product.inStock && <div className={styles.outOfStock}>Out of Stock</div>}
          </div>
          
          <div className={styles.infoSection}>
            <div className={styles.breadcrumb}>
              <Link href="/">Home</Link> / <span>{product.category}</span> / <span>{product.name}</span>
            </div>
            
            <h1 className={styles.productName}>{product.name}</h1>
            <p className={styles.category}>{product.category.toUpperCase()}</p>
            
            <p className={styles.description}>{product.description}</p>
            
            <div className={styles.features}>
              <h3>Key Features</h3>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className={styles.priceSection}>
              <div className={styles.price}>${product.price.toLocaleString()}</div>
              <button 
                className={styles.addToCart} 
                disabled={!product.inStock}
                onClick={handleAddToCart}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>
            
            <div className={styles.shipping}>
              <p>✓ Free shipping on orders over $50,000</p>
              <p>✓ 5-year warranty included</p>
              <p>✓ 30-day return policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}