import { useQuery } from "@tanstack/react-query";
import React from "react";
import ArticleCard from "../components/ArticleCard";

const fetchArticles = async () => {
  const res = await fetch("http://127.0.0.1:5000/api/blogpost", {
    method: "GET",
  });
  return res.json();
};

const Articles = () => {
  const allArticlesQuery = useQuery(["allArticles"], fetchArticles);

  return (
    <>
      {allArticlesQuery?.isLoading && <div>Loading...</div>}
      {allArticlesQuery?.error && <div>Error: {allArticlesQuery?.error}</div>}
      {allArticlesQuery?.data?.posts && (
        <div>
          {allArticlesQuery?.data?.posts.map((article) => (
            <ArticleCard key={article.id + article.title} {...article} />
          ))}
        </div>
      )}
    </>
  );
};

export default Articles;
