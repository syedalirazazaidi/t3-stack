import "./App.css";
import { Box, Flex, HStack } from "@chakra-ui/react";
import ProductList from "./components/productList";
import { useState } from "react";
import Cart from "./components/cart";
import Header from "./components/header";
import Footer from "./components/footer";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Success from "./components/Success";
import Cancel from "./components/Cancel";
function App() {
  const [viewCart, setViewCart] = useState<boolean>(false);
  // const pageContent = viewCart ? <Cart /> : <ProductList />;
  const content = (
    <Box>
      <Flex
        bg="grey"
        w="100%"
        p={4}
        color="white"
        textAlign={"right"}
        alignItems={"right"}
        justifyContent="right"
        flexDirection={"column"}
      >
        <Header viewCart={viewCart} setViewCart={setViewCart} />
        {/* <Nav /> */}
      </Flex>
      {/* {pageContent} */}
      <BrowserRouter>
        <Routes>
          <Route index element={<ProductList />} />
          <Route path="cart" element={<Cart />} />
          <Route path="success" element={<Success />} />
          <Route path="cancel" element={<Cancel />} />
        </Routes>
      </BrowserRouter>
      <Footer viewCart={viewCart} />
    </Box>
  );
  return content;
}

export default App;
