import { Button, Stack } from "@chakra-ui/react";
import React from "react";

export interface Props {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
}

function Nav({ viewCart, setViewCart }: Props) {
  const button = viewCart ? (
    <Button onClick={() => setViewCart(false)}>View</Button>
  ) : (
    <Button onClick={() => setViewCart(true)}>View Cart</Button>
  );
  const content = <nav>{button}</nav>;
  return <Stack color={"black"}>{content}</Stack>;
}

export default Nav;
