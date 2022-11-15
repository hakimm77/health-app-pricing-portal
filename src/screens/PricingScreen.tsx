import { Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { PricingItemComponent } from "../components/PricingItemComponent";

const PricingScreen = () => {
  const [selectedPlan, setSelectedPlan] = useState("Monthly");
  const [pricingPlans, setPricingPlans] = useState([
    { name: "Free", price: "0" },
    { name: "Pro", price: "9" },
    { name: "API", price: false },
  ]);

  return (
    <Flex
      flexDir="column"
      width="100%"
      height="100vh"
      alignItems="center"
      mt={100}
    >
      <Flex
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
        bgColor="#000"
        width={180}
        height="40px"
        borderRadius={50}
        mb={20}
      >
        {["Monthly", "Annual"].map((item, i) => (
          <Flex
            w="50%"
            h="40px"
            cursor="pointer"
            bgColor={selectedPlan === item ? "#D6D6D6" : "#000"}
            justifyContent={i === 0 ? "flex-start" : "flex-end"}
            alignItems="center"
            pr={5}
            pl={5}
            borderRadius={50}
            onClick={() => setSelectedPlan(item)}
          >
            <Text
              color={selectedPlan === item ? "#000" : "#fff"}
              fontSize={16}
              fontWeight={600}
            >
              {item}
            </Text>
          </Flex>
        ))}
      </Flex>

      <Flex
        flexDir="row"
        w="60%"
        alignItems="center"
        justifyContent="space-between"
        mb={20}
      >
        {pricingPlans.map((item, i) => (
          <PricingItemComponent item={item} selectedPlan={selectedPlan} />
        ))}
      </Flex>

      <Text color="#000" fontWeight="bold" mb={3}>
        Available in
      </Text>

      <Flex
        flexDir="row"
        alignItems="center"
        w="7%"
        justifyContent="space-between"
      >
        <Flex flexDir="column" alignItems="center" justifyContent="center">
          <Image src={require("../assets/apple-icon.png")} w={8} h={8} m={2} />
          <Text color="#000">IOS</Text>
        </Flex>

        <Flex flexDir="column" alignItems="center" justifyContent="center">
          <Image
            src={require("../assets/android-icon.png")}
            w={8}
            h={8}
            m={2}
          />
          <Text color="#000">Android</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PricingScreen;
