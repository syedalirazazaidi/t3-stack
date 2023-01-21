import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../app/store";
// import { getAllProduct } from "../features/cart/cartSlice";
import { Products } from "../types";

export interface IAppProps {}

export default function ProductList(props: IAppProps) {
  //   const navigate = useNavigate();
  const dispatch = useDispatch();
  const myproductnew = useSelector((state: RootState) =>
    console.log(state.product.allproduct.products, "STATE")
  );
  console.log(myproductnew, "???????");
  React.useEffect(() => {
    // dispatch(getAllProduct());
    // return () => {
    //   dispatch(reset());
    // };
  }, []);
  return <div></div>;
}
