import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import MainPage from "./pages/MainPage";
import Articles from "./views/Articles";
import Antimedium from "./views/Antimedium";
import CreatePosts from "./views/CreatePosts";
import { MuiThemeConfig } from "./styles/MuiThemeConfig";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Article from "./views/Article";
import About from "./views/About";
import AboutApp from "./views/AboutApp";

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
                <Route path="/about" element={<About />} />
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
