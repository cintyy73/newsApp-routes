//import { Heading } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import useGet from "../../customHooks/useGet";
import { URLnews } from "../../URL/URL";
import CardNew from "../CardNew/CardNew";
let id = 0;
const ListNews = () => {
  const { dataNews } = useGet(URLnews, {});
  const { articles } = dataNews;

  console.log(articles);
  return (
    <SimpleGrid
      paddingTop={2}
      gap={2}
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
    >
      {articles?.map((art) => (
        <CardNew key={self.crypto.randomUUID()} id={(id += 1)} art={art} />
      ))}
    </SimpleGrid>
  );
};

export default ListNews;
