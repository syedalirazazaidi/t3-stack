import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllProduct } from "../features/cart/cartSlice";

export interface IAppProps {}

export default function ProductList(props: IAppProps) {
  //   const navigate = useNavigate();
  const dispatch = useDispatch();
  const myproductnew = useSelector((state) => console.log(state, "STATE"));
  console.log(myproductnew, "???????");
  React.useEffect(() => {
    dispatch(getAllProduct());

    // return () => {
    //   dispatch(reset());
    // };
  }, []);
  return <div></div>;
}
