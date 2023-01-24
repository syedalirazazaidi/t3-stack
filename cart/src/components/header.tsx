import { Text, Box } from "@chakra-ui/react";
import * as React from "react";

export interface IAppProps {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ viewCart, setViewCart }: IAppProps) {
  return (
    <Box>
      <Text marginRight={"90px"} textAlign={"right"}>
        Total Items:{viewCart}
      </Text>
      <Text marginRight={"90px"} textAlign={"right"}>
        Total Price :0
      </Text>
    </Box>
  );
}
