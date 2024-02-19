import {Link, useLoaderData} from 'react-router-dom';
import './TopicList.css';

export default function TopicList() {
  const posts = useLoaderData();

  const displayTopics = posts.map((post) => {
    return <li key={post.id}>
      <Link to = {`in/post/${post.id}`}>{post.title}</Link>
    </li>;
  });
  return (
    <div className="TopicList">
      <h1>Latest Blog Posts...</h1>
      <ul>{displayTopics}</ul>
    </div>
  );
}