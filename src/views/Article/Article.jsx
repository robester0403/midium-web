import { Button, CardActions, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useQuery } from "@tanstack/react-query";
import { ArticleCard } from "./ArticleStyle";
import Loading from "../../components/reusable-components/Loading/Loading";
import { fetchArticle } from "../../utils/axios";
import SnackbarMessage from "../../components/reusable-components/SnackbarMessage/SnackbarMessage";

const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const { data, isLoading } = useQuery(["article", id], () => fetchArticle(id));

  const { author, content, title } = data?.data || {};
  const handleBack = () => {
    navigate("/");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setSnackbarMessage("Copied to Clipboard");
    setOpenSnackbar(true);
  };

  return (
    <>
      {isLoading && <Loading />}
      {data && (
        <>
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
          <SnackbarMessage
            open={openSnackbar}
            message={snackbarMessage}
            autoHideDuration={4000}
            onClose={() => setOpenSnackbar(false)}
          />
        </>
      )}
    </>
  );
};

export default Article;
