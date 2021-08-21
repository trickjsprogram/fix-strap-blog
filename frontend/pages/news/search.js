import Link from "next/link";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import NewsItem from "@/components/NewsItem";
import styles from "@/styles/News.module.css";
import qs from "qs";
import { useRouter } from "next/router";

export default function SeacrhPage({ news }) {
  const router = useRouter();
  return (
    <div>
      <Layout title="Search Results">
        <h1>Search Result for {router.query.term}</h1>
        {news.length === 0 && <h3>No Search for {router.query.term} </h3>}
        {news.map((item) => (
          <NewsItem key={item.id} news={item} />
        ))}
        <Link href="/">
          <a className={styles.back}>Go Back</a>
        </Link>
      </Layout>
    </div>
  );
}

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [{ name_contains: term }, { detail_contains: term }],
    },
  });
  const res = await fetch(`${API_URL}/sports?${query}`);
  const news = await res.json();

  return {
    props: { news },
  };
}
