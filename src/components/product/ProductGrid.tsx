import { ProductCard } from './ProductCard';
import type { Product } from '@/types/product.types';
import styles from './ProductGrid.module.css';

type Props = {
  products: Product[];
};

// Grid con efecto telón por celda — el overlay cubre toda la card en hover
export function ProductGrid({ products }: Props) {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <div key={product._uid} className={styles.gridItem}>
          <ProductCard product={product} />
          {/* Telón semitransparente — sube desde abajo en hover */}
          <div className={styles.gridItem__overlay} />
        </div>
      ))}
    </div>
  );
}
