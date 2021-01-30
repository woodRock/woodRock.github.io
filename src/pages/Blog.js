import React from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import TimeAgo from "../components/TimeAgo";
import Collection from "../components/Collection";
import "./Blog.css";

const Blog = () => {
  return (
    <Collection
      Child={BlogItem}
      collectionName={"blog"}
      sort={"time"}
      styles=""
    />
  );
};

const BlogItem = ({ item }) => {
  return (
    <div className="blog-post twitter-style-border">
      <div className="blog-content">
        <h2>
          <Link className="blog-title" to={"/blogs/" + item.id}>
            {item.title}
          </Link>
        </h2>
        <i>
          <span className="secondary">{TimeAgo({ date: item.time })}</span>
        </i>
        <ReactMarkdown source={item.markdown} />
      </div>
    </div>
  );
};

export default Blog;
