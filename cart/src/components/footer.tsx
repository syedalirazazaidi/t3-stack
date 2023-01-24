import { Box } from "@chakra-ui/react";
import * as React from "react";

export interface IAppProps {
  viewCart: boolean;
}

export default function Footer({ viewCart }: IAppProps) {
  const year: number = new Date().getFullYear();

  const pageContent = viewCart ? (
    <p>Shopping Cart &copy;{year}</p>
  ) : (
    <>
      <p>Total Items:</p>
      <p>Total Price:</p>
      <p>Shopping cart &copy; {year}</p>
    </>
  );

  return <div>{pageContent}</div>;
}
