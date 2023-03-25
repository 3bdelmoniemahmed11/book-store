import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { generateReport } from "./reportSlice";
export const getBooks = createAsyncThunk(
  "book/getBooks",
  async (args, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response = await fetch("http://localhost:3009/books");
      const data = response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const insertBooks = createAsyncThunk(
  "book/insertBooks",
  async (bookdata, thunkApi) => {
    const { rejectWithValue, getState, dispatch } = thunkApi;
    try {
      bookdata.userName = getState().auth.name;
      const res = await fetch("http://localhost:3009/books", {
        method: "post",
        body: JSON.stringify(bookdata),
        headers: { "Content-Type": "application/json" },
      });
      const data = res.json;
      dispatch(generateReport({ name: "report", status: "success" }));
      return data;
    } catch (error) {
      dispatch(generateReport({ name: "report", status: "failed" }));
      return rejectWithValue(error.message);
    }
  }
);
export const deleteBooks = createAsyncThunk(
  "book/deleteBooks",
  async (item, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      await fetch(`http://localhost:3009/books/${item.id}`, {
        method: "delete",
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      return rejectWithValue(error);
    }
    return item;
  }
);
export const displayDesc = createAsyncThunk(
  "books/displayDesc",
  async (item, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      await fetch(`http://localhost:3009/${item.id}`, {
        method: "get",
        headers: {
          headers: { "Content-Type": "application/json" },
        },
      });
      return item;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const bookSlice = createSlice({
  name: "book",
  initialState: { books: [], isLoading: true, error: null, bookInfo: null },
  extraReducers: {
    //getbooks
    [getBooks.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
      // console.log(action);
    },
    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
      console.log(action.payload);
    },
    [getBooks.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action);
    },
    //insertbooks
    [insertBooks.pending]: (state, action) => {
      state.isLoading = true;
    },
    [insertBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action);
      state.books.push(action.payload);
    },
    [insertBooks.rejected]: (state, action) => {
      state.isLoading = false;
    },
    //deleteBooks
    [deleteBooks.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = state.books.filter((el) => el.id !== action.payload.id);
      console.log(action);
    },

    [deleteBooks.rejected]: (state, action) => {
      state.isLoading = false;
    },
    //display description
    [displayDesc.pending]: (state, action) => {
      state.isLoading = true;
    },
    [displayDesc.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.bookInfo = action.payload;
      console.log(action);
    },

    [displayDesc.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default bookSlice.reducer;
