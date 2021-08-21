import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import moment from "moment";
import styles from "@/styles/Form.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "@/components/Modal";
import Image from "next/image";
import ImageUpload from "@/components/ImageUpload";
import { parseCookies } from "@/utils/index";

export default function EditNews({ sportNews, token }) {
  const [values, setValues] = useState({
    name: sportNews.name,
    detail: sportNews.detail,
    date: sportNews.date,
    time: sportNews.time,
  });


  // ! Original is below
  // const [imagePreview, setImagePreview] = useState(
  //   sportNews.image ? sportNews.image.formats.thumbnail.url : null
  // );
  // ! End of original

  // ? This is what I'm using
  const [imagePreview, setImagePreview] = useState(
    sportNews.image ? sportNews.image.url : null
  );
  // ? End of this

  const [showModal, setShowModal] = useState(false);

  const { name, detail, date, time } = values;

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emptyFieldCheck = Object.values(values).some(
      (element) => element === ""
    );

    if (emptyFieldCheck) {
      toast.error("Please fill all Input Field");
    }

    const response = await fetch(`${API_URL}/sports/${sportNews.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      if (response.status === "403" || response.status === "401") {
        toast.error("No token Provided");
        return;
      }
      toast.error("Something went wrong");
    } else {
      const sport = await response.json();
      router.push(`/news/${sport.slug}`);
    }
  };

  const imageUploaded = async (e) => {
    const res = await fetch(`${API_URL}/sports/${sportNews.id}`);
    const data = await res.json();
    setImagePreview(data.image.formats.thumbnail.url);
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <Layout title="Add New Sport News">
      <Link href="/news"> Go Back</Link>
      <h2>Add Sport News</h2>
      <ToastContainer />
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.grid}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              name="name"
              type="text"
              id="name"
              value={name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="date">Date</label>
            <input
              name="date"
              type="date"
              id="date"
              value={moment(date).format("yyyy-MM-DD")}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="time">Time</label>
            <input
              name="time"
              type="text"
              id="time"
              value={time}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor="name">Detail</label>
          <textarea
            name="detail"
            type="text"
            id="detail"
            value={detail}
            onChange={handleInputChange}
          />
        </div>
        <input className="btn" type="submit" value="Update News" />
      </form>
      {imagePreview ? (
        <Image src={imagePreview} height={100} width={180} />
      ) : (
        <div>
          <p>No Image Available</p>
        </div>
      )}
      <div>
        <button onClick={() => setShowModal(true)} className="btn-edit">
          Update Image
        </button>
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <ImageUpload
          sportNewsId={sportNews.id}
          imageUploaded={imageUploaded}
          token={token}
        />
      </Modal>
    </Layout>
  );
}

export async function getServerSideProps({ params: { id }, req }) {
  const { token } = parseCookies(req);
  const res = await fetch(`${API_URL}/sports/${id}`);
  const sportNews = await res.json();
  return {
    props: {
      sportNews,
      token,
    },
  };
}
