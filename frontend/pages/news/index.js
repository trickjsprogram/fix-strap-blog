import Link from "next/link";
import Layout from "@/components/Layout";
import { API_URL, PER_PAGE } from "@/config/index";
import NewsItem from "@/components/NewsItem";
import styles from "@/styles/News.module.css";
import Pagination from "@/components/Pagination";

export default function News({ news, page, total }) {
  return (
    <div>
      <Layout>
        <Link href="/">
          <a className={styles.back}>Go Back</a>
        </Link>
        <h1>News</h1>
        {news.length === 0 && <h3>No News</h3>}
        {news.map((item) => (
          <NewsItem key={item.id} news={item} />
        ))}
        <Pagination page={page} total={total} />
      </Layout>
    </div>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch(`${API_URL}/api/news`);
//   const news = await res.json();

//   return {
//     props: { news },
//   };
// }

export async function getServerSideProps({ query: { page = 1 } }) {
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;

  // Total Count
  const totalRes = await fetch(`${API_URL}/sports/count`);
  const total = await totalRes.json();

  const newsRes = await fetch(
    `${API_URL}/sports?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`
  );
  const news = await newsRes.json();

  return {
    props: { news, page: +page, total },
  };
}



// import Link from "next/link";
// import Layout from "@/components/Layout";
// import { API_URL } from "@/config/index";
// import NewsItem from "@/components/NewsItem";
// import styles from "@/styles/News.module.css";

// export default function News({ news }) {
//   return (
//     <div>
//       <Layout>
//         <h1>News</h1>
//         {news.length === 0 && <h3>No News</h3>}
//         {news.map((item) => (
//           <NewsItem key={item.id} news={item} />
//         ))}
//         <Link href="/">
//           <a className={styles.back}>Go Back</a>
//         </Link>
//       </Layout>
//     </div>
//   );
// }

// // export async function getServerSideProps() {
// //   const res = await fetch(`${API_URL}/api/news`);
// //   const news = await res.json();

// //   return {
// //     props: { news },
// //   };
// // }

// export async function getStaticProps() {
//   const res = await fetch(`${API_URL}/api/news`);
//   const news = await res.json();

//   return {
//     props: { news },
//     revalidate: 1,
//   };
// }
