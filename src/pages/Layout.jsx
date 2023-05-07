import { Grid, GridItem } from "@chakra-ui/react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";

const Layout = ({ children }) => {
  return (
    <Grid
      templateAreas={`"header header" "nav main" "nav footer"`}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={"150px 1fr"}
      w="100%"
      minHeight="100vh"
      gap="1"
      color={"gray.200"}
      fontWeight="bold"
      background={"blue.600"}
    >
      <Header />
      <Nav />
      <GridItem minHeight="100vh" pl="2" bg="blue.400" area={"main"}>
        {children}
      </GridItem>
      <Footer />
    </Grid>
  );
};

export default Layout;
