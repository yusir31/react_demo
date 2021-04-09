import { Link } from 'umi';
import styles from './index.less';

export default function IndexPage() {
  return (
    <div className={styles.title}>

      <h1>Page index</h1>
      <Link to="/indexPage">getting started</Link>

    </div>
  );
}
