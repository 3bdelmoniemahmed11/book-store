import { configureStore } from "@reduxjs/toolkit";
import books from "./Features/BookSlice";
import auth from "./Features/authSlice";
import report from "./Features/reportSlice";
export const store = configureStore({
  reducer: { books, auth, report },
});
