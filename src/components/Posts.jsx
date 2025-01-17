import { useEffect, useState } from "react";
import { getPost } from "../api/PostApi";
import "../App.css";

export const Posts = () => {
  const [data, setData] = useState([]);

  const getPostData = async () => {
    const res = await getPost();
    console.log(res.data);
    setData(res.data);
  };
  useEffect(() => {
    getPostData();
  }, []);
  return (
    <section className="section-post">
      <ol>
        {data.map((currElem) => {
          const { id, body, title } = currElem;
          return (
            <li key={id}>
              <p>Title: {title}</p>
              <p>Body: {body}</p>
              <button>Edit</button>
              <button className="btn-delete">Delete</button>
            </li>
          );
        })}
      </ol>
    </section>
  );
};
