import { GridItem, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <GridItem pl="2" bg="blue.300" area={"nav"}>
      <VStack>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/titles">Titles</NavLink>
      </VStack>
    </GridItem>
  );
};

export default Nav;
