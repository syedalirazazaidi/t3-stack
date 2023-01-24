import { Grid, GridItem } from "@chakra-ui/react";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../app/store";
import { addToProduct } from "../features/cart/cartSlice";
// import { getAllProduct } from "../features/cart/cartSlice";
import { Products } from "../types";

export interface IAppProps {}

export default function ProductList(props: IAppProps) {
  //   const navigate = useNavigate();
  const dispatch = useDispatch();
  const myproductnew = useSelector(
    (state: RootState) => state.product.allproduct.products
  );
  const addtocart = (id: number) => {
    dispatch(
      addToProduct({
        id,
      })
    );
  };
  React.useEffect(() => {
    // dispatch(getAllProduct());
    // return () => {
    //   dispatch(reset());
    // };
  }, []);
  return (
    <Grid templateColumns="repeat(4, 2fr)" gap={8} marginTop="40px" mx="210px">
      {myproductnew?.map((prod: Products) => (
        <GridItem
          _hover={{
            background: "white",
            color: "teal.500",
            pointer: "curser",
          }}
          w="180px"
          h="210px"
          onClick={() => addtocart(prod.id)}
        >
          <div style={{ display: "flex", gap: "25px", cursor: "pointer" }}>
            <p>{prod.price}</p>
            <p>{prod.name}</p>
          </div>
          <img
            style={{ cursor: "pointer" }}
            src={prod.imageUrl}
            alt="myimage"
          />
        </GridItem>
      ))}
    </Grid>
  );
}
