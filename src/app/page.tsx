'use client';

import { useProducts } from '@/hooks/useProducts';
import { Navbar } from '@/components/layout/Navbar';
import { ProductGrid } from '@/components/product/ProductGrid';
import { SearchWrapper } from '@/components/layout/SearchWrapper';

// Página principal — orquesta Navbar + Search + Grid
// El Container fue eliminado: cada sección gestiona su propio padding (Figma)
export default function Home() {
  const { products, loading, error, search, setSearch } = useProducts();

  return (
    <main>
      <Navbar />
      <SearchWrapper
        search={search}
        setSearch={setSearch}
        resultsCount={products.length}
      />
      <ProductGrid products={products} />
    </main>
  );
}
