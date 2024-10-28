import Image from "next/image";
import styles from "./index.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logoLink}>
        <Image
          className={styles.logo}
          src="/logo.svg"
          alt="Logo"
          width={348}
          height={133}
          priority
        />
      </a>
    </header>
  );
}