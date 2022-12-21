import { useQuery } from "@tanstack/react-query";
import React from "react";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import Loading from "../../components/reusable-components/Loading/Loading";
import { fetchArticles } from "../../utils/axios";

const Articles = () => {
  const allArticlesQuery = useQuery(["allArticles"], fetchArticles);
  const { data, isLoading, error } = allArticlesQuery;

  return (
    <>
      {isLoading && <Loading />}
      {error && <div>Error: {error}</div>}
      {data?.posts && (
        <div>
          {data?.posts.map((article) => (
            <ArticleCard
              key={article.id + article.title}
              allArticlesQuery={allArticlesQuery}
              {...article}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Articles;
