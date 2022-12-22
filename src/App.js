import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import MainPage from "./pages/MainPage";
import { MuiThemeConfig } from "./styles/MuiThemeConfig";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Articles from "./views/Articles/Articles";
import Antimedium from "./views/Antimedium/Antimedium";
import CreatePosts from "./views/CreatePosts/CreatePosts";
import AboutApp from "./views/AboutApp/AboutApp";
import Article from "./views/Article/Article";
import GoHome from "./views/GoHome/GoHome";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  const queryClient = new QueryClient();
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={MuiThemeConfig}>
          <>
            <Helmet>
              <title>Midium, the medium clone</title>
              <meta name="Midium" content="Where Medium Meets AI." />
              <link
                rel="icon"
                type="image/png"
                href="favicon.ico"
                sizes="16x16"
              />
            </Helmet>
            <CssBaseline />
            <BrowserRouter>
              <Routes>
                <Route path="" element={<MainPage />}>
                  <Route path="/" element={<Articles />} />
                  <Route path="/:id" element={<Article />} />
                  <Route path="/antimedium" element={<Antimedium />} />
                  <Route path="/createposts" element={<CreatePosts />} />
                  <Route path="/about" element={<GoHome />} />
                  <Route path="/aboutapp" element={<AboutApp />} />
                  <Route path="*" element={<GoHome />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
