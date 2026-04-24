'use client';

import styles from './Navbar.module.css';

// Navbar principal: logo MBST + icono carrito con contador
// Medidas Figma: height 80px, padding horizontal 100px
export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__content}>
        {/* Logo — medidas Figma: 74×24px */}
        <div className={styles.navbar__logo}>
          {/* Símbolo ✳ compuesto por dos iconos SVG inline */}
          <svg width="74" height="24" viewBox="0 0 74 24" fill="none">
            {/* Asterisco izquierdo */}
            <text
              x="0"
              y="20"
              fontSize="20"
              fontFamily="Helvetica, Arial, sans-serif"
              fill="#000"
            >
              ✳
            </text>
            {/* Texto MBST */}
            <text
              x="28"
              y="20"
              fontSize="16"
              fontFamily="Helvetica, Arial, sans-serif"
              fontWeight="bold"
              fill="#000"
            >
              MBST
            </text>
          </svg>
        </div>

        {/* Carrito — medidas Figma: 33×26px, gap 6px entre icono y contador */}
        <div className={styles.navbar__cart}>
          {/* Icono bolsa SVG fiel al Figma */}
          <svg
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 6h18v14a1 1 0 01-1 1H2a1 1 0 01-1-1V6z"
              stroke="#000"
              strokeWidth="1"
            />
            <path d="M7 6V4a3 3 0 016 0v2" stroke="#000" strokeWidth="1" />
          </svg>
          {/* Contador dinámico — por ahora 0, luego conectado al contexto del carrito */}
          <span className={styles.navbar__cartCount}>0</span>
        </div>
      </div>
    </nav>
  );
}
