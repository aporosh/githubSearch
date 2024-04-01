import { configureStore } from "@reduxjs/toolkit";
import { githubApi } from "./github/github.api";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [githubApi.reducerPath]: githubApi.reducer
    },
    middleware: (getMiddleware) => getMiddleware().concat(githubApi.middleware),
})

setupListeners(store.dispatch)