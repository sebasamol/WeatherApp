import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href="/">Home</Link>
      <Link href="/pages/poznan">Poznań</Link>
      <Link href="/pages/miedzyrzecz">Międzyrzecz</Link>
    </main>
  );
}
