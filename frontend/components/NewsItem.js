import { FaUser } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment';
import styles from '@/styles/NewsItem.module.css';

export default function NewsItem({ news }) {
  return (
    <div className={styles.news}>
      <div className={styles.img}>
        <Image
          src={news.image ? news.image.formats.thumbnail.url : '/images/hero.jpg'}
          width={150}
          height={100}
        />
      </div>
      <div className={styles.info}>
        <span>
          {moment(news.date).format('yyyy-MM-DD')} {news.time}
        </span>
        <h3>{news.name}</h3>
        <p>
          <FaUser /> Posted By: <strong>{news.user.username}</strong>
        </p>
      </div>
      <div className={styles.link}>
        <Link href={`/news/${news.slug}`}>
          <button>Read More</button>
        </Link>
      </div>
      <br />
    </div>
  );
}
