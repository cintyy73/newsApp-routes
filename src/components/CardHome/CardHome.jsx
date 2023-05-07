import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const CardHome = ({ art, id }) => {
  const { source, urlToImage, title } = art;

  return (
    <Card
      as={Link}
      to={id}
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      justifycontent="center"
    >
      <Image
        objectFit="cover"
        maxW="100px"
        src={urlToImage}
        alt={source.name}
      />

      <Stack>
        <CardBody>
          <Text fontSize={8} py="2">
            {source.name}
          </Text>
          <Heading fontSize={10}>{title}</Heading>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default CardHome;
