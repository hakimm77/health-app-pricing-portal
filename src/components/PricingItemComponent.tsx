import { Button, Flex, Text } from "@chakra-ui/react";
import { isMobile } from "../helpers/isMobile";

interface PricingPlans {
  name: string;
  price: string | boolean;
}

export const PricingItemComponent = ({
  item,
  selectedPlan,
}: {
  item: PricingPlans;
  selectedPlan: string;
}) => {
  return (
    <Flex
      pos="relative"
      w={isMobile ? "100%" : "45%"}
      minH={600}
      flexDir="column"
      borderWidth={1}
      borderColor={item.name === "Pro" ? "#000" : "#fff"}
      _hover={{ borderColor: "#000" }}
      borderRadius={10}
      p={10}
    >
      <Flex flexDir="column" alignItems="center" mb={5}>
        <Text color="#000" fontWeight="bold" fontSize={20} mb={"25px"}>
          {item.name}
        </Text>

        {item.price ? (
          <>
            <Flex position="relative" flexDir="row" pr={20} mb={"10px"}>
              <Text color="#000" fontWeight="bold" fontSize={"110px"}>
                {selectedPlan === "Annual" && item.name === "Pro"
                  ? 5
                  : item.price}
              </Text>
              <Flex flexDir="column" position="absolute" right={0} top={"10px"}>
                <Text color="#000" fontWeight="bold" fontSize={"25px"}>
                  US$
                </Text>
                <Text color="gray" fontSize={15} fontWeight="bold" mt={-2}>
                  per month
                </Text>
              </Flex>
            </Flex>
            <Button bgColor="#000" color="#fff" p={"30px"} borderRadius={10}>
              Start 3 days Free trial
            </Button>{" "}
          </>
        ) : (
          <Text
            color="#000"
            fontWeight="bold"
            fontSize={23}
            w={150}
            textAlign="center"
          >
            Usage-based cost
          </Text>
        )}
      </Flex>

      <Flex flexDir="column" pos="absolute" bottom={5}>
        {[1, 2, 3, 4, 5, 6].map((item, i) => (
          <Text color="#000" fontWeight={"bold"} fontSize={15} mb={2}>
            <span style={{ color: "#2590EB" }}>Unlimited</span> Some Good
            Feature
          </Text>
        ))}
      </Flex>
    </Flex>
  );
};
