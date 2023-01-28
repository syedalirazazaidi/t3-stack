import { Button, Stack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
export interface Props {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
}

function Nav() {
  const navigate = useNavigate();
  const navigateHome = () => {
    // 👇️ navigate to /
    navigate("/");
  };
  // const content = <nav>{button}</nav>;
  return (
    <Stack color={"black"}>
      <>
        <Button onClick={navigateHome}>View Product</Button>

        <Button onClick={() => navigate("/cart")}>View Cart</Button>
      </>
    </Stack>
  );
}

export default Nav;
