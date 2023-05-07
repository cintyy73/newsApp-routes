import { Box, List, ListItem, ListIcon } from "@chakra-ui/react";
import useGet from "../customHooks/useGet";
import { URLnews } from "../URL/URL";
import { Link } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
const Titles = () => {
  const { dataNews } = useGet(URLnews, {});
  const { articles } = dataNews;

  console.log(articles);
  return (
    <Box p={3} background="gray.300" color="black">
      <List spacing={3}>
        {articles?.map((art) => (
          <>
            <ListItem
              as={Link}
              fontSize={10}
              color="black.100"
              key={self.crypto.randomUUID()}
            >
              <ListIcon as={StarIcon} color="blue.700" />
              {art.title}
            </ListItem>
            <br />
          </>
        ))}
      </List>
    </Box>
  );
};

export default Titles;
