import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/demo/cat" passHref>
        CAT
      </Link>
      <Link href="/" passHref>
        HOME
      </Link>
      <Link href="/demo/dog" passHref>
        DOG
      </Link>
    </footer>
  );
};

export default Footer;
