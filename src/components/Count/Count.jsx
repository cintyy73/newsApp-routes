import { Button, ButtonGroup, Text, VStack } from "@chakra-ui/react";

import useCount from "../../customHooks/useCount";

const Count = () => {
  const { count, add, subtract, reset } = useCount();
  console.log(count);
  return (
    <VStack>
      <Text background={count > 0 ? "green.100" : "red.100"}>{count}</Text>
      <ButtonGroup>
        <Button onClick={add} colorScheme="green">
          +
        </Button>
        <Button onClick={subtract} colorScheme="red">
          -
        </Button>
      </ButtonGroup>
      <Button onClick={reset} colorScheme="blue">
        Reset
      </Button>
    </VStack>
  );
};

export default Count;
