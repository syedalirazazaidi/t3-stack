import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { OurProduct, Products } from "../../types";
import productService from "./cartService";

const productState: OurProduct = {
  products: [
    {
      id: "price_1MVKozEqp60OUVoTBT2PiT4l",
      name: "iPhone 6S",
      description:
        "Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
      imageUrl:
        "https://images.unsplash.com/photo-1548382141-dc4c16fc7f25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGdhcmRlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      price: 799,
      quantity: 1,
    },
    {
      id: "price_1MVL24Eqp60OUVoTygzmnt0d",
      name: "iPhone 5S",
      description:
        "Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
      imageUrl:
        "https://images.unsplash.com/photo-1548382141-dc4c16fc7f25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGdhcmRlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      price: 349,
      quantity: 1,
    },
    {
      id: "price_1MVL2kEqp60OUVoTaPozMRGr",
      name: "Macbook",
      description:
        "Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1663091581455-5d6002274746?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGdhcmRlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      price: 1499,
      quantity: 1,
    },
  ],
};
const initialState = {
  allproduct: productState,
  cartproduct: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToProduct: (state: any, action: PayloadAction<Products>) => {
      const itemInCart = state.cartproduct.find(
        (item: any) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cartproduct.push({ ...action.payload, quantity: 1 });
      }
    },
  },
  //   extraReducers: (builder) => {
  //     builder

  //       .addCase(getAllProduct.pending, (state) => {
  //         state.isLoading = true;
  //       })
  //       .addCase(getAllProduct.fulfilled, (state, action) => {
  //         state.isLoading = false;
  //         state.isSuccess = true;
  //         state.myproduct = action.payload;
  //       })
  //       .addCase(getAllProduct.rejected, (state, action) => {
  //         state.isLoading = false;
  //         state.isError = true;
  //         // state.message = action.payload;
  //       });
  //   },
});

// export const { reset } = productSlice.actions;
export default productSlice.reducer;
export const { addToProduct } = productSlice.actions;
