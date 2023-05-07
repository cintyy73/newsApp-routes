import { GridItem, Heading, HStack, Text, Link } from "@chakra-ui/react";
import { Link as LinkRouter } from "react-router-dom";

const Header = () => {
  return (
    <GridItem pl="2" background={"blue.400"} area={"header"}>
      <HStack alignItems="center" justifyContent="space-around">
        <Heading as="h1" size="xl">
          News 40 TV
        </Heading>
        <Text size="md">Instantly updating your world</Text>
        <Link as={LinkRouter} color="gray.300" fontSize="xs" to="/">
          Home
        </Link>
        <Link as={LinkRouter} color="green.200" fontSize="xs" to="login">
          Login
        </Link>
      </HStack>
    </GridItem>
  );
};

export default Header;
