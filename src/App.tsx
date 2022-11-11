import { ChakraProvider, Flex, Text } from "@chakra-ui/react";
import React from "react";

const App = () => {
  return (
    <ChakraProvider>
      <Flex>
        <Text>heybe</Text>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
