import { apiClient } from './apiClient';
import type { ProductsResponse } from '@/types/product.types';

// Obtiene listado inicial
export const getProducts = async (): Promise<ProductsResponse> => {
  return apiClient<ProductsResponse>('/products');
};

// Búsqueda por query (API-side filtering)
export const searchProducts = async (
  query: string,
): Promise<ProductsResponse> => {
  return apiClient<ProductsResponse>('/products', {
    params: { search: query },
  });
};

// Detalle (lo tiparemos más adelante cuando entremos a detalle)
export const getProductById = async (id: string) => {
  return apiClient(`/products/${id}`);
};
