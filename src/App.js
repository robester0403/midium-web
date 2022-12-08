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
import { Article } from "@mui/icons-material";
import AboutApp from "./views/AboutApp/AboutApp";

function App() {
  document.title = "Midium, the medium clone";
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={MuiThemeConfig}>
        <>
          <CssBaseline />
          <BrowserRouter>
            <Routes>
              <Route path="" element={<MainPage />}>
                <Route path="/" element={<Articles />} />
                <Route path="/antimedium" element={<Antimedium />} />
                <Route path="/createposts" element={<CreatePosts />} />
                <Route path="/:id" element={<Article />} />
                <Route path="/about" element={<Articles />} />
                <Route path="/aboutapp" element={<AboutApp />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
