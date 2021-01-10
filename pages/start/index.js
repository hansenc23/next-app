import styles from './styles.module.scss';
import Link from 'next/link';
const Start = () => {
  return (
    <div>
      <h1>Start page</h1>
      <Link href='/home'>
        <a>Homepage</a>
      </Link>
    </div>
  );
};

export default Start;
