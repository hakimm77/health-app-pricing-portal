import { ChakraProvider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import PricingScreen from "./screens/PricingScreen";

const App = () => {
  return (
    <ChakraProvider>
      <PricingScreen />
    </ChakraProvider>
  );
};

export default App;
