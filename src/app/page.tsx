'use client';

import { useProducts } from '@/hooks/useProducts';

// ejecutamos el hook para obtener productos, loading, error y funciones de búsqueda
export default function Home() {
  const { products, loading, error, search, setSearch } = useProducts();

  return (
    <div>
      {/* Input controlado para realizar búsquedas */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Contador de resultados */}
      <p>{products.length} results</p>

      {loading && <div>Loading......</div>}
      {error && <div>{error}</div>}

      {!loading && products.length === 0 && <div>No products found</div>}

      {products.map((product) => (
        <div key={product._uid}>
          {product.name} - {product.brand}
        </div>
      ))}
    </div>
  );
}
