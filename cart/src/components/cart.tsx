import { Button, Center, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { Products } from "../types";
import PayButton from "./payButton";
export interface IAppProps {}

export default function Cart(props: IAppProps) {
  const cartnew = useSelector((state: RootState) => state.product.cartproduct);

  return (
    <>
      <Grid
        templateColumns="repeat(4, 2fr)"
        gap={8}
        marginTop="40px"
        mx="210px"
      >
        {cartnew?.map((prod: Products) => (
          <GridItem
            _hover={{
              background: "white",
              color: "teal.500",
              pointer: "curser",
            }}
            w="180px"
            h="210px"
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
      <Center>
        {" "}
        {/* <Button padding="30px 60px" bg="red.100">
          Checkout
        </Button> */}
        <PayButton />
      </Center>
    </>
  );
}
