import { Button, Center, Heading } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const backPage = () => navigate(-1);
  return (
    <Center
      padding={0}
      color="Blue"
      flexDirection={"column"}
      height="100%"
      background="red.600"
    >
      <Heading>Not Found error 404</Heading>
      <Link to="/">Home</Link>
      <Button size="md" variant="solid" colorScheme="blue" onClick={backPage}>
        Return
      </Button>
    </Center>
  );
};

export default NotFound;
