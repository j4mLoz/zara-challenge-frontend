// Representa un producto en el listado (card)
// NOTA: ajusta campos si la API trae nombres distintos (ej: image vs imageUrl)
export type Product = {
  id: string;
  brand: string;
  name: string;
  price: number;
  imageUrl: string;
  _uid?: string;
};

// Respuesta de listado
// Algunas APIs devuelven array directo, otras envuelven en { items: [] }
export type ProductsResponse = Product[];
