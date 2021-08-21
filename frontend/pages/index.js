import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Heading, Input, Text } from '@chakra-ui/react';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import NewsItem from '@/components/NewsItem';

export default function HomePage({ news }) {
  return (
    <div>
      <Layout>
        <h1>Latest News</h1>
        {news.length === 0 && <h3>No News</h3>}
        {news.map((item) => (
          <NewsItem key={item.id} news={item} variant="outline" />
        ))}
        {news.length > 5 && (
          <Link href="/news">
            <a className="btn-secondary">View More News</a>
          </Link>
        )}
        <Button>Here</Button>
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

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/sports?_sort=date:ASC&_limit=5`);
  const news = await res.json();

  return {
    props: { news },
    revalidate: 1,
  };
}
