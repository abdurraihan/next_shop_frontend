import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchAllProducts, fetchProductsByFilter } from './productApi';

const initialState = {
  products: [],
  status: 'idle',
};

export const fetchAllProductsAsync = createAsyncThunk(
  'product/fetchAllProducts ',
  async () => {
    const response = await fetchAllProducts();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

/* 
// easy way 
export const fetchAllProductsAsync = createAsyncThunk('products/fetchAllProducts', async () => {
  const response = await fetch('http://localhost:8080/products');
  const data = await response.json();
  return data;
}); */


export const fetchProductsByFilterAsync = createAsyncThunk(
  'product/fetchProductsByFilter ',
  async ({filter,sort}) => {
    const response = await fetchProductsByFilter(filter,sort);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = 'success';
        state.products = action.payload;
      })
      .addCase(fetchProductsByFilterAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsByFilterAsync.fulfilled, (state, action) => {
        state.status = 'success';
        state.products = action.payload;
      });
     
  },
});

export const { increment } = productSlice.actions;

export const selectAllProducts = (state) => state.product.products;

export default productSlice.reducer;