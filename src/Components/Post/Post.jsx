import { useLoaderData } from "react-router-dom";
import './Post.css';

export default function Post() {
  const {title, content} = useLoaderData();

  return (
    <div className="Post">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}