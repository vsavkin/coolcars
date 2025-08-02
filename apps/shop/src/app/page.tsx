import styles from './page.module.css';
import { products } from '@coolcars/data';
import { ProductCard } from '@coolcars/ui-components';

export default function Index() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>MegaCoolCars Shop</h1>
          <p className={styles.subtitle}>Premium Vehicles for Every Lifestyle</p>
        </header>

        <section className={styles.productsSection}>
          <div className={styles.productsGrid}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
