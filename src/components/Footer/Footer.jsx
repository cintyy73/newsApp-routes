import { GridItem, HStack, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <GridItem pl="2" bg="blue.500" area={"footer"}>
      <HStack alignItems="center">
        <Text>News 40 TV 2023</Text>
        <Text size="md">Instantly updating your world</Text>
      </HStack>
    </GridItem>
  );
};

export default Footer;
