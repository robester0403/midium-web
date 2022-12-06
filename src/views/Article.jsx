import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useQuery } from "@tanstack/react-query";
// const data = {
//   title: "This is a fake Article",
//   author: "Robert So",
//   content:
//     "This article can beat all articles.This article can beat all articles.This article can beat all articles.This article can beat all articles.This article can beat all articles.This article can beat all articles.This article can beat all articles.This article can beat all articles.This article can beat all articles.This article can beat all articles.This article can beat all articles.This article can beat all articles.This article can beat all articles.This article can beat all articles.",
// };

const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchArticle = async () => {
    const res = await fetch(`http://127.0.0.1:5000/api/blogpost/${id}`, {
      method: "GET",
    });
    return res.json();
  };

  const { data, isLoading, error } = useQuery(["article", id], fetchArticle);

  console.log(data);
  const { author, content, title } = data?.data || {};
  const handleBack = () => {
    navigate("/");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
  };

  return (
    <>
      {data && (
        <ArticleCard>
          <CardContent>
            <ArrowBackIcon
              fontSize="medium"
              onClick={handleBack}
              cursor="pointer"
              gutterbottom
            />
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Typography sx={{ mb: 2 }} color="text.secondary">
              By {author}
            </Typography>
            <Typography variant="body2">{content}</Typography>
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

const ArticleCard = styled(Card)`
  margin: 32px 8px 0 8px;
  box-sizing: border-box;
`;
