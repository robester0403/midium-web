import { useQuery } from "@tanstack/react-query";
import React from "react";
import ArticleCard from "../components/ArticleCard";
// import { useArticleStore } from "../context/ZustandStore";

// need to possible adjust the defaults for the query and export it to the utils folder

const Articles = () => {
  const fetchArticles = async () => {
    const res = await fetch("http://127.0.0.1:5000/api/blogpost", {
      method: "GET",
    });
    return res.json();
  };
  const allArticlesQuery = useQuery(["allArticles"], fetchArticles);
  console.log(allArticlesQuery?.data?.posts);
  // const hydrateArticles = useArticleStore((state) => state.hydrateArticles);

  // // we are hydrating the store if the data is loaded. This is for use in other parts of the app but it almost feels like we don't need it here
  // // we might just need it for store user session information later on and preferences. But honestly even that is not really needed?

  // useEffect(() => {
  //   if (data) {
  //     hydrateArticles(data);
  //   }
  // }, [hydrateArticles, data]);

  return (
    <>
      {allArticlesQuery?.isLoading && <div>Loading...</div>}
      {allArticlesQuery?.error && <div>Error: {allArticlesQuery?.error}</div>}
      {allArticlesQuery?.data?.posts && (
        <div>
          {allArticlesQuery?.data?.posts.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      )}
    </>
  );
};

export default Articles;
