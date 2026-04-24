import { apiClient } from './apiClient';
import type { ProductsResponse, ProductDetail } from '@/types/product.types';

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

// 🔥 Detalle tipado correctamente
export const getProductById = async (id: string): Promise<ProductDetail> => {
  return apiClient<ProductDetail>(`/products/${id}`);
};
