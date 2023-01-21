import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { OurProduct } from "../../types";
import productService from "./cartService";

const productState: OurProduct = {
  products: [
    {
      id: 0,
      name: "iPhone 6S",
      description:
        "Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
      imageUrl: "http://www.icentar.me/phone/6s/images/goldbig.jpg",
      price: 799,
    },
    {
      id: 1,
      name: "iPhone 5S",
      description:
        "Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
      imageUrl: "http://www.icentar.me/phone/5s/images/silverbig.png",
      price: 349,
    },
    {
      id: 2,
      name: "Macbook",
      description:
        "Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
      imageUrl: "http://www.icentar.me/mac/macbook/images/pro.jpg",
      price: 1499,
    },
    {
      id: 3,
      name: "Macbook Air",
      description:
        "Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
      imageUrl: "http://www.icentar.me/mac/mbair/images/air.jpg",
      price: 999,
    },
    {
      id: 4,
      name: "Macbook Air 2013",
      description:
        "Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
      imageUrl: "http://www.icentar.me/mac/mbair/images/air.jpg",
      price: 599,
    },
    {
      id: 5,
      name: "Macbook Air 2012",
      description:
        "Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
      imageUrl: "http://www.icentar.me/mac/mbair/images/air.jpg",
      price: 499,
    },
  ],
};
const initialState = {
  allproduct: productState,
  product: [],
  //   isError: false,
  //   isSuccess: false,
  //   isLoading: false,
  //   message: "",
};

// Get user goals
// export const getAllProduct: any = createAsyncThunk(
//   "product/getAll",
//   async (_, thunkAPI) => {
//     try {
//       const mydata = await productService.getProduct();
//       console.log(mydata, "mydat???a");
//       return mydata;
//     } catch (error) {
//       console.log(error, "ERRROR");
//         const message =
//           (error.response &&
//             error.response.data &&
//             error.response.data.message) ||
//           error.message ||
//           error.toString();
//         return thunkAPI.rejectWithValue(message);
//     }
//   }
// );
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // reset: (state) => initialState,
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
