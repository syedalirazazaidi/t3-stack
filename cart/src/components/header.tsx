import { Text, Box, Button } from "@chakra-ui/react";
import * as React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { Products } from "../types";
import { useNavigate } from "react-router-dom";
export interface IAppProps {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ viewCart, setViewCart }: IAppProps) {
  const cartnew = useSelector((state: RootState) => state.product.cartproduct);
  const navigate = useNavigate();
  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cartnew.forEach((item: Products) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  return (
    <Box>
      <Text marginRight={"90px"} textAlign={"right"}>
        Total Items:{cartnew?.length}
      </Text>
      <Text marginRight={"90px"} textAlign={"right"}>
        Total Price :{getTotal().totalPrice}
      </Text>
      <Button bg="blue" onClick={() => navigate("/cart")}>
        Show Cart
      </Button>
      <Button bg="blue" onClick={() => navigate("/")}>
        Show Product
      </Button>
    </Box>
  );
}
