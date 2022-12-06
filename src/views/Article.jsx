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
const data = {
  title: "This is a fake Article",
  author: "Robert So",
  content:
    "This article can beat all articles.This article can beat all articles.This article can beat all articles.This article can beat all articles.This article can beat all articles.This article can beat all articles.This article can beat all articles.This article can beat all articles.This article can beat all articles.This article can beat all articles.This article can beat all articles.This article can beat all articles.This article can beat all articles.This article can beat all articles.",
};

const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const onBack = () => {
    navigate("/");
  };

  return (
    <ArticleCard>
      <CardContent>
        <ArrowBackIcon
          fontSize="medium"
          onClick={onBack}
          cursor="pointer"
          gutterbottom
        />
        <Typography variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography sx={{ mb: 2 }} color="text.secondary">
          By {data.author}
        </Typography>
        <Typography variant="body2">{data.content}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Copy</Button>
      </CardActions>
    </ArticleCard>
  );
};

export default Article;

const ArticleCard = styled(Card)`
  margin: 32px 8px 0 8px;
  box-sizing: border-box;
`;
