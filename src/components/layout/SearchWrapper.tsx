'use client';

import styles from './SearchWrapper.module.css';

type Props = {
  search: string;
  setSearch: (value: string) => void;
  resultsCount: number;
};

// Componente de búsqueda — input minimalista + contador de resultados
// Medidas Figma: padding 12px 100px, gap 12px entre input y resultados
export function SearchWrapper({ search, setSearch, resultsCount }: Props) {
  return (
    <div className={styles.wrapper}>
      {/* Frame 1 — Input de búsqueda con solo borde inferior */}
      <div className={styles.searchFrame}>
        <div className={styles.searchInput}>
          <input
            type="text"
            placeholder="Search for a smartphone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.input}
          />
        </div>
      </div>

      {/* Frame 2 — Contador de resultados */}
      <div className={styles.resultsFrame}>
        <span className={styles.resultsCount}>{resultsCount} RESULTS</span>
      </div>
    </div>
  );
}
