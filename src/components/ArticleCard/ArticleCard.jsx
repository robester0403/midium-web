import { CardContent, IconButton, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CardContainer,
  CardTopContainer,
  TextHighlight,
  TitleWrapper,
} from "./ArticleCardStyle";
import ClearIcon from "@mui/icons-material/Clear";
import { deleteArticle } from "../../utils/axios";

const ArticleCard = ({ id, title, author, content, allArticlesQuery }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${id}`);
  };

  const handleDelete = async (e) => {
    e.stopPropagation();
    await deleteArticle(id);
    await allArticlesQuery.refetch();
  };

  const formattedContent =
    content.length > 100 ? content.substring(0, 147) + "..." : content + "...";

  return (
    <CardContainer onClick={handleClick} cursor="pointer">
      <CardTopContainer>
        <Typography variant="h5">
          <TitleWrapper>
            <div>{title}</div>
            <TextHighlight>by {author}</TextHighlight>
          </TitleWrapper>
        </Typography>
        <IconButton onClick={handleDelete}>{<ClearIcon />}</IconButton>
      </CardTopContainer>
      <CardContent sx={{ padding: "0 4px 8px 4px" }}>
        <Typography variant="body1">{formattedContent}</Typography>
      </CardContent>
    </CardContainer>
  );
};

export default ArticleCard;
