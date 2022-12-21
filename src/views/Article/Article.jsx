import { Button, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useQuery } from "@tanstack/react-query";
import { ArticleCard } from "./ArticleStyle";
import Loading from "../../components/reusable-components/Loading/Loading";
import { fetchArticle } from "../../utils/axios";

const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery(["article", id], fetchArticle(id));

  const { author, content, title } = data?.data || {};
  const handleBack = () => {
    navigate("/");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
  };

  return (
    <>
      {isLoading && <Loading />}
      {data && (
        <ArticleCard>
          <CardContent>
            <ArrowBackIcon
              fontSize="medium"
              onClick={handleBack}
              cursor="pointer"
            />
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Typography sx={{ mb: 2 }} color="text.secondary">
              By {author}
            </Typography>
            <Typography variant="body2" sx={{ whiteSpace: "pre-wrap" }}>
              {content}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleCopy}>
              Copy to Clipboard
            </Button>
          </CardActions>
        </ArticleCard>
      )}
    </>
  );
};

export default Article;
