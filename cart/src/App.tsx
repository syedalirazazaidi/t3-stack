import "./App.css";
import { Box } from "@chakra-ui/react";
import ProductList from "./components/productList";
import { useState } from "react";
import Cart from "./components/cart";
import Header from "./components/header";
import Footer from "./components/footer";
function App() {
  const [viewCart, setViewCart] = useState<boolean>(false);
  const pageContent = viewCart ? <Cart /> : <ProductList />;
  const content = (
    <Box bg="grey" w="100%" p={8} color="white">
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {pageContent}
      <Footer viewCart={viewCart} />
    </Box>
  );
  return content;
}

export default App;
