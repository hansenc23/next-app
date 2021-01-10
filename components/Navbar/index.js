import styles from './styles.module.scss';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.header}>
      <div className={styles.nav_container}>
        <div>
          <Link href='/'>
            <a>
              <img src='/svg/er-logo.svg' alt='' />
            </a>
          </Link>
        </div>
        <div>
          <button>Contact Us</button>
          <button>Menu</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
