'use client';

import { useParams } from 'next/navigation';
import { useProductDetail } from '@/hooks/useProductDetail';

export default function ProductDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const {
    product,
    loading,
    error,
    selectedColor,
    selectedStorage,
    setSelectedColor,
    setSelectedStorage,
    finalPrice,
  } = useProductDetail(id);

  if (loading) return <div>Loading...</div>;
  if (error || !product) return <div>Error</div>;

  return (
    <div>
      <h1>{product.name}</h1>

      {/* Imagen dinámica */}
      <img
        src={selectedColor?.imageUrl || product.colorOptions[0].imageUrl}
        alt={product.name}
      />

      {/* Colores */}
      <div>
        {product.colorOptions.map((color) => (
          <button key={color.name} onClick={() => setSelectedColor(color)}>
            {color.name}
          </button>
        ))}
      </div>

      {/* Storage */}
      <div>
        {product.storageOptions.map((storage) => (
          <button
            key={storage.capacity}
            onClick={() => setSelectedStorage(storage)}
          >
            {storage.capacity}
          </button>
        ))}
      </div>

      {/* Precio */}
      <p>{finalPrice} EUR</p>

      {/* Botón condicionado */}
      <button disabled={!selectedColor || !selectedStorage}>Add to cart</button>
    </div>
  );
}
