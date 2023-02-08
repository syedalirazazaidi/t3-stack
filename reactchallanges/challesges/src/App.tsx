import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { background, Button } from "@chakra-ui/react";
import { Box, Stack, Text } from "@chakra-ui/layout";

function App() {
  const [colour, setClour] = useState<string>("");
  const [answer, setAnswer] = useState<string[]>([]);
  const [check, setanswer] = useState("");
  function get_random_color() {
    function c() {
      var hex = Math.floor(Math.random() * 256).toString(16);
      return ("0" + String(hex)).substr(-2); // pad with zero
    }
    return "#" + c() + c() + c();
  }
  useEffect(() => {
    const newcolor = get_random_color();
    setClour(newcolor);
    setAnswer([newcolor, get_random_color(), get_random_color()].sort());
  }, []);
  console.log(answer, "ANSWER");
  const checkAnswer = (anss: string) => {
    if (colour === anss) {
      setanswer("Correct answer");
    } else {
      setanswer("wrong answer");
    }
  };
  return (
    <div className="App">
      <Stack>
        <Box
          bg={colour}
          width={"300px"}
          height={"300px"}
          onClick={() => setClour(colour)}
        ></Box>
        <Box> {check} </Box>
        <Box
          display={"flex"}
          gap="4px"
          p="10px"
          alignItems={"center"}
          textAlign={"center"}
          marginRight="10px"
        >
          {answer.map((ans) => (
            <Button
              onClick={() => checkAnswer(ans)}
              _hover={{
                cursor: "pointer",
              }}
            >
              {ans}
            </Button>
          ))}
        </Box>
      </Stack>
    </div>
  );
}

export default App;
