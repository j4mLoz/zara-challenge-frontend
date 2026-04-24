'use client';

import { useRouter } from 'next/navigation';
import type { Product } from '@/types/product.types';
import styles from './ProductCard.module.css';

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  const router = useRouter();

  // 👉 navegación al detalle
  const handleClick = () => {
    router.push(`/product/${product.id}`);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.card__imageWrapper}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className={styles.card__image}
        />
      </div>

      <div className={styles.card__info}>
        <div className={styles.card__text}>
          <span className={styles.card__brand}>{product.brand}</span>
          <span className={styles.card__name}>{product.name}</span>
        </div>

        <span className={styles.card__price}>{product.price} EUR</span>
      </div>
    </div>
  );
}
