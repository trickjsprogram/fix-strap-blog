import React from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import { parseCookies } from '@/utils/index';
import { API_URL } from '@/config/index';
import styles from '@/styles/Dashboard.module.css';
import NewsDashboard from "@/components/NewsDashboard";
// import { useAuth } from '@/hooks/useAuth';



export default function dashboard({ news, token }) {
  const router = useRouter();
  const deleteNews = async (id) => {
    if (window.confirm("Are you sure that you wanted to delte news ?")) {
      const res = await fetch(`${API_URL}/sports/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
      } else {
        router.push("/news");
      }
    }
  };
  return (
    <Layout title="dashboard">
      <div className={styles.dashboard}>
        <h1>Dashboard</h1>
        <h3>My News</h3>
        {news &&
          news.map((item) => (
            <NewsDashboard
              key={item.id}
              news={item}
              handleDelete={deleteNews}
            />
          ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);
  console.log("token==>", token);
  const res = await fetch(`${API_URL}/sports/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const news = await res.json();

  return {
    props: { news, token },
  };
}
