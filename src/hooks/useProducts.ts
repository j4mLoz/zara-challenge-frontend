'use client';

import { useEffect, useState } from 'react';
import { getProducts } from '@/services/products.service';
import type { Product } from '@/types/product.types';
import { searchProducts } from '@/services/products.service';
import { useDebounce } from './useDebounce';

// Estado del hook tipado
type UseProductsState = {
  products: Product[];
  loading: boolean;
  error: string | null;
};

export function useProducts() {
  // guardamos lo que escribe el usuario y el valor debounced para evitar hacer peticiones en cada tecla
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 300);
  const [state, setState] = useState<UseProductsState>({
    products: [],
    loading: true,
    error: null,
  });

  // effect para cargar productos al inicio y cada vez que el valor debounced cambie (cuando el usuario deje de escribir)
  useEffect(() => {
    let isMounted = true;

    const fetchSearch = async () => {
      try {
        // actualizamos el estado a loading cada vez que se inicia una búsqueda y reseteamos errores
        setState((prev) => ({ ...prev, loading: true, error: null }));

        // si el input está vacío, cargamos todos los productos, sino hacemos la búsqueda con el valor debounced

        const data =
          debouncedSearch.trim() === ''
            ? await getProducts()
            : await searchProducts(debouncedSearch);

        if (!isMounted) return;

        // normalizamos los productos añadiendo un _uid único para cada producto (ya que la API no tiene un id único, el id se repite en varias páginas)
        const normalizedProducts = data.map((product, index) => ({
          ...product,
          _uid: `${product.id}-${index}`,
        }));

        // pasamos los datos al estado, seteamos loading a false y reseteamos errores
        setState({
          products: normalizedProducts,
          loading: false,
          error: null,
        });
      } catch (err) {
        // manejo de errores: seteamos el estado con error y limpiamos productos y loading
        if (!isMounted) return;

        setState({
          products: [],
          loading: false,
          error: 'Error searching products',
        });
      }
    };

    fetchSearch();

    // prevenimos memory leaks actualizando el estado solo si el componente sigue montado

    return () => {
      isMounted = false;
    };
  }, [debouncedSearch]);

  return {
    ...state,
    search,
    setSearch,
  };
}
