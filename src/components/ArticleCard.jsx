import { Typography } from "@mui/material";
import React from "react";
import { CardContainer, TextHighlight } from "../styles/styled";

const ArticleCard = ({ title, author, content }) => {
  const formattedContent =
    content.length > 100 ? content.substring(0, 97) + "..." : content + "...";

  return (
    <CardContainer>
      <div>
        <Typography variant="h5">
          {title} <TextHighlight>by {author}</TextHighlight>
        </Typography>
      </div>
      <Typography variant="body1" sx={{ marginBottom: "16px" }}>
        {formattedContent}
      </Typography>
    </CardContainer>
  );
};

export default ArticleCard;
