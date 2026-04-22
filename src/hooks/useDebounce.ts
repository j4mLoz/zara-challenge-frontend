'use client';

import { useEffect, useState } from 'react';

// Recibimos un valor y delay, y devolvemos el valor debounced
export function useDebounce<T>(value: T, delay: number): T {
  // estado local para almacenar el valor debounced
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // esperamos el delay antes de actualizar el valor
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // cleanup: cancela el timeout si el valor cambia antes del delay
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  // devolvemos el valor debounced
  return debouncedValue;
}
