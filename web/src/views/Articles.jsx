import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import ArticleCard from "../components/ArticleCard";
// import { useArticleStore } from "../context/ZustandStore";

// need to possible adjust the defaults for the query and export it to the utils folder
// const fetchArticles = async () => {
//   const res = await fetch("http://127.0.0.1:5000/api/blogpost", {
//     method: "GET",
//   });
//   return res.json();
// };
const data = {
  data: [
    {
      id: 1,
      title: "test",
      author: "test",
      content:
        "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest",
    },
    {
      id: 2,
      title: "test",
      author: "test",
      content:
        "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest",
    },
    {
      id: 3,
      title: "test",
      author: "test",
      content:
        "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest",
    },
    {
      id: 4,
      title: "test",
      author: "test",
      content:
        "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttest",
    },
  ],
};

const Articles = () => {
  // const { data, isLoading, error } = useQuery("allArticles", fetchArticles);
  // we need to separate out parts of data here

  // const hydrateArticles = useArticleStore((state) => state.hydrateArticles);

  // // we are hydrating the store if the data is loaded. This is for use in other parts of the app but it almost feels like we don't need it here
  // // we might just need it for store user session information later on and preferences. But honestly even that is not really needed?

  // useEffect(() => {
  //   if (data) {
  //     hydrateArticles(data);
  //   }
  // }, [hydrateArticles, data]);

  console.log(data.data);
  return (
    <>
      {/* {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>} */}
      {data && (
        <div>
          {data.data.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      )}
    </>
  );
};

export default Articles;
