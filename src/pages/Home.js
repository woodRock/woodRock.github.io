import React from "react";
import Markdown from "../components/Markdown";
import home from "../assets/home.md";
import "../style.css";

const Home = () => {
  return (
    <div style={styles.container} className="content twitter-style-border">
      <div style={styles.content}>
        <Markdown markdown={home} />
      </div>
    </div>
  );
};

const styles = {
  // container: {
  //   width: "60%",
  //   minHeight: "100vh",
  // },
  content: {
    paddingLeft: "2.5rem",
  },
};

export default Home;
