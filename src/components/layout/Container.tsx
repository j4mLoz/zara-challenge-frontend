import styles from './Container.module.css';

// Wrapper de layout principal
// No limita el ancho — aplica el padding horizontal del sistema (Figma: 100px c/lado)
export function Container({ children }: { children: React.ReactNode }) {
  return <div className={styles.container}>{children}</div>;
}
