import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const api = "https://fakrstoreapi.com/products";

const initialState = {
  products: [],
}

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(api);
    const data = await response.data;
    return data;
  }
)

export const productsSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
        .addCase(fetchProducts.fulfilled, (state, action) => {
          state.products = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
          state.products = [];
        })
  }
})