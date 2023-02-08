import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { background, Button } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/layout";

function App() {
  const [colour, setClour] = useState("#808080");

  return (
    // #808080
    // #800080
    // #FF0000
    // #0000FF
    <div className="App">
      <Box
        bg={colour}
        width={"300px"}
        height={"300px"}
        onClick={() => setClour("#800080")}
      ></Box>
      <Box
        display={"flex"}
        gap="4px"
        p="10px"
        alignItems={"center"}
        textAlign={"center"}
        marginRight="10px"
      >
        <Button
          onClick={() => setClour("#800080")}
          _hover={{
            cursor: "pointer",
          }}
        >
          #800080
        </Button>
        <Button
          onClick={() => setClour("#FF0000")}
          _hover={{
            cursor: "pointer",
          }}
        >
          #FF0000
        </Button>
        <Button
          onClick={() => setClour("#0000FF")}
          _hover={{
            cursor: "pointer",
          }}
        >
          #0000FF
        </Button>
      </Box>
    </div>
  );
}

export default App;
