import { Text, Box } from "@chakra-ui/react";
import * as React from "react";

export interface IAppProps {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ viewCart, setViewCart }: IAppProps) {
  return (
    <Box>
      <Text textAlign={"right"}>Total Items:0</Text>
      <Text textAlign={"right"}>Total Price :0</Text>
    </Box>
  );
}
