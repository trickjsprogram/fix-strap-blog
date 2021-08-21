import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { API_URL } from '@/config/index';
import styles from '@/styles/News.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import { FaUser } from 'react-icons/fa';
import DisqusThread from '@/components/DisqusThread';

export default function SingleNews({ news }) {
  const router = useRouter();
  const showDisqusComment = () => (
    <>
      <DisqusThread id={news.id} path={news.slug} title={news.name} />
    </>
  );
  return (
    <Layout>
      <div className={styles.news}>
        {/* <div className={styles.controls}>
          <Link href={`/news/edit/${news.id}`}>
            <button className="btn-edit">Edit News</button>
          </Link>
          <button className="btn-delete" onClick={deleteNews}>
            Delete News
          </button>
        </div> */}
        <Link href="/news">
          <a className={styles.back}>Go Back</a>
        </Link>
        <br />
        <span>
          {moment(news.data).format('yyyy-MM-DD')} {news.time}
          <p>
            {/* <FaUser /> Posted By: <strong>{news.user.username}</strong> */}
          </p>
        </span>

        <h1>{news.name}</h1>
        <ToastContainer />
        {news.image && (
          <div className={styles.image}>
            <Image
              src={
                news.image ? news.image.url : '/images/hero.jpg'
              }
              width={900}
              height={600}
            />
          </div>
        )}
        <p>{news.detail}</p>
      </div>
      {showDisqusComment()}
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/sports`);
  const news = await res.json();
  const paths = news.map((item) => ({
    params: { slug: item.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/sports?slug=${slug}`);
  const singleNews = await res.json();
  return {
    props: {
      news: singleNews[0],
    },
    revalidate: 1,
  };
}

// export async function getServerSideProps({ query: { slug } }) {
//   const res = await fetch(`${API_URL}/api/news/${slug}`);
//   const singleNews = await res.json();
//   return {
//     props: {
//       news: singleNews[0],
//     },
//   };
// }

// import { useRouter } from 'next/router';
// import Link from 'next/link';
// import Image from 'next/image';
// import Layout from '@/components/Layout';
// import { API_URL } from '@/config/index';
// import styles from '@/styles/News.module.css';

// export default function SingleNews({ news }) {
//   const router = useRouter();
//   console.log('router===>', router);
//   return (
//     <Layout>
//       <div className={styles.news}>
//         <span>
//           {news.date} {news.time}
//         </span>

//         <h1>{news.name}</h1>
//         {news.image && (
//           <div className={styles.image}>
//             <Image src={news.image} width={900} height={600} />
//           </div>
//         )}
//         <p>{news.detail}</p>
//         <Link href="/news">
//           <a className={styles.back}>Go Back</a>
//         </Link>
//       </div>
//     </Layout>
//   );
// }
// // ? WHAT HE PUT
// export async function getStaticPaths() {
//   const res = await fetch(`${API_URL}/sports`);
//   const news = await res.json();
//   const paths = news.map((item) => ({
//     params: { slug: item.slug },
//   }));

//   return {
//     paths,
//     fallback: true,
//   };
// }

// export async function getStaticProps({ params: { slug } }) {
//   const res = await fetch(`${API_URL}/sports?slug=${slug}`);
//   const singleNews = await res.json();
//   return {
//     props: {
//       news: singleNews[0],
//     },
//     revalidate: 1,
//   };
// }

// // ? END OF WHAT HE PUT

// // ! WHAT I PUT
// // export async function getStaticPaths() {
// //   const res = await fetch(`${API_URL}/sports`);
// //   const news = await res.json();
// //   const paths = news.map((item) => ({
// //     params: { slug: item.slug },
// //   }));

// //   return {
// //     paths,
// //     fallback: true,
// //   };
// // }

// // export async function getStaticProps({ params: { slug } }) {
// //   const res = await fetch(`${API_URL}/sports?slug=${slug}`);
// //   const singleNews = await res.json();
// //   return {
// //     props: {
// //       news: singleNews[0],
// //     },
// //     revalidate: 1,
// //   };
// // }
// // ! END OF WHAT I PUT

// // export async function getServerSideProps({ query: { slug } }) {
// //   const res = await fetch(`${API_URL}/api/news/${slug}`);
// //   const singleNews = await res.json();
// //   return {
// //     props: {
// //       news: singleNews[0],
// //     },
// //   };
// // }
