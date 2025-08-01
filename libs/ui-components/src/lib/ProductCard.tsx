import Link from 'next/link';
import { Product } from '@coolcars/data';
import { getCarIllustration } from './CarIllustrations';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <div className={styles.illustration}>
          {getCarIllustration(product.category)}
        </div>
        {!product.inStock && <div className={styles.outOfStock}>Out of Stock</div>}
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.category}>{product.category.toUpperCase()}</p>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.price}>${product.price.toLocaleString()}</div>
      </div>
    </Link>
  );
}