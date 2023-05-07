import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CardNew = ({ art, id }) => {
  const { source, author, urlToImage, content, title, publishedAt } = art;
  return (
    <Card maxW="md">
      <CardHeader>
        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
          <Heading fontSize={12} textAlign="center" size="sm">
            {title}
          </Heading>

          <Text fontSize={10}>{source.name}</Text>
        </Flex>
      </CardHeader>
      <CardBody gap={1}>
        {/* <Text>{description}</Text> */}
        <Image objectFit="cover" src={urlToImage} alt={content} />
        <Text fontSize={10}>Author: {author}</Text>
        <Text fontSize={8}>{publishedAt}</Text>
      </CardBody>

      <CardFooter>
        <Button as={Link} to={id} colorScheme="blue" flex="1" variant="ghost">
          See more
        </Button>

        <Button colorScheme="blue" flex="1" variant="ghost">
          Share
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardNew;
