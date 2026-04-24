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

// Opciones de color
export type ColorOption = {
  name: string;
  hexCode: string;
  imageUrl: string;
};

// Opciones de almacenamiento
export type StorageOption = {
  capacity: string;
  price: number;
};

// Detalle completo del producto
export type ProductDetail = {
  id: string;
  brand: string;
  name: string;
  basePrice: number;
  colorOptions: ColorOption[];
  storageOptions: StorageOption[];
};
