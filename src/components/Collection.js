import React, { useState, useEffect } from "react";
import { capitalize } from "../api/utility";
import { useFirebase } from "../api/Firebase";
import Loading from "../components/Loading";
import { v4 } from "uuid";
import "../pages/Projects.css";

const Collection = ({ Child, collectionName, sort, styles }) => {
  const [collection, setCollection] = useState([]);
  const { fetch } = useFirebase();

  useEffect(() => {
    fetch(collectionName, sort, "desc", {
      next: (querySnapshot) => {
        setCollection(
          querySnapshot.docs.map((doc) => {
            const data = { id: doc.id, ...doc.data() };
            return data;
          })
        );
      },
    });
  }, [fetch, collectionName, sort]);

  return (
    <div>
      <h1>{capitalize(collectionName)}</h1>
      <hr />
      {!collection.length && <Loading />}
      <section className={styles}>
        {collection ? (
          collection.map((item) => <Child key={v4()} item={item} />)
        ) : (
          <div>There are no {collectionName}s ...</div>
        )}
      </section>
    </div>
  );
};

export default Collection;
