import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  //seçili ürünü gösteriyoruz
  selectedProduct: {},
  loading: false,
};

const BASE_URL = "https://fakestoreapi.com";

//axios import et createAsynThunk import et ve base url + products ile ürünlerin hepsini al.
//extraReducers içini tanımla.
export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  //reducers içine http olmayan fonksiyonlar tanımlanır.
  reducers: {
    //bu fonksiyonla ProductDetails içinde istenilen ürünü getireceğiz.
    setSelectedproduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    //ben bu fonksiyona istek attığımda bekleme esnasında şunlar olsun:
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
    });
    //ben bu fonksiyona istek attığımda tamamlandığı esnasında şunlar olsun:
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      //getAllProducts çağrıldığında dönen değer action a oturur.
      state.products = action.payload;
    });
  },
});
// Action creators are generated for each case reducer function
export const { setSelectedproduct } = productSlice.actions;

export default productSlice.reducer;
