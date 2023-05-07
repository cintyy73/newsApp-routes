import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import useGet from "../customHooks/useGet";
import { URLnews } from "../URL/URL";
import CardHome from "../components/CardHome/CardHome";
let id = 0;
const Home = () => {
  const { dataNews } = useGet(URLnews, {});
  const { articles } = dataNews;
  return (
    <SimpleGrid
      gap={2}
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
    >
      {articles?.map((art) => (
        <CardHome key={self.crypto.randomUUID()} id={id + 1} art={art} />
      ))}
    </SimpleGrid>
  );
};

export default Home;
