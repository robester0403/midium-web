import create from "zustand";

export const useArticleStore = create((set) => ({
  allArticles: {},
  hydrateAllArticles: (articles) => set({ allArticles: articles }),
  clearAllArticles: () => set({ allArticles: {} }),
}));
