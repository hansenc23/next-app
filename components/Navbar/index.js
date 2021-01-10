import styles from './styles.module.scss';
import logo from '../../public/svg/er-logo.svg';

const Navbar = () => {
  return (
    <div className={styles.nav_container}>
      <div>
        <img src={logo} alt='' />
      </div>
      <div>
        <button>Contact Us</button>
        <button>Menu</button>
      </div>
    </div>
  );
};
