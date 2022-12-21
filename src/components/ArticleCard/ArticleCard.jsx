import { CardContent, IconButton, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CardContainer, TextHighlight } from "./ArticleCardStyle";
import ClearIcon from "@mui/icons-material/Clear";
import styled from "styled-components";
import { deleteArticle } from "../../utils/queries";

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
    content.length > 100 ? content.substring(0, 97) + "..." : content + "...";

  return (
    <CardContainer onClick={handleClick} cursor="pointer">
      <CardTopContainer>
        <Typography variant="h5">
          <TitleContainer>
            <div>{title}</div> <TextHighlight>by {author}</TextHighlight>
          </TitleContainer>
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

const CardTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
