'use client';

import { useEffect, useState } from 'react';
import { getProductById } from '@/services/products.service';
import type {
  ProductDetail,
  ColorOption,
  StorageOption,
} from '@/types/product.types';

type State = {
  product: ProductDetail | null;
  loading: boolean;
  error: string | null;

  selectedColor: ColorOption | null;
  selectedStorage: StorageOption | null;
};

export function useProductDetail(id: string) {
  const [state, setState] = useState<State>({
    product: null,
    loading: true,
    error: null,
    selectedColor: null,
    selectedStorage: null,
  });

  useEffect(() => {
    let isMounted = true;

    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);

        if (!isMounted) return;

        setState((prev) => ({
          ...prev,
          product: data, // ahora correctamente tipado
          loading: false,
          error: null, // 🔥 limpiamos error también
        }));
      } catch {
        if (!isMounted) return;

        setState((prev) => ({
          ...prev,
          loading: false,
          error: 'Error loading product',
        }));
      }
    };

    fetchProduct();

    return () => {
      isMounted = false;
    };
  }, [id]);

  // 👉 precio dinámico
  const finalPrice =
    state.selectedStorage?.price ?? state.product?.basePrice ?? 0;

  return {
    ...state,
    setSelectedColor: (color: ColorOption) =>
      setState((prev) => ({ ...prev, selectedColor: color })),

    setSelectedStorage: (storage: StorageOption) =>
      setState((prev) => ({ ...prev, selectedStorage: storage })),

    finalPrice,
  };
}
