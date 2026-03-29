"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleRouteChange = () => closeMenu();
    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  return (
    <header className={styles.header}>
      <div className="container d-flex justify-content-between align-items-center">
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <span>Malawi</span> Food & Travel
        </Link>

        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav>
          <ul className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
            <li>
              <Link href="/" className={styles.navLink} onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/destinations" className={styles.navLink} onClick={closeMenu}>
                Destinations
              </Link>
            </li>
            <li>
              <Link href="/about" className={styles.navLink} onClick={closeMenu}>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}