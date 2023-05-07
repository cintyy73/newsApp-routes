//import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

const Login = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";

  return (
    <Box background="gray.100" color={"black"}>
      {/* <FormControl isInvalid={isError}>
        <FormLabel>Email</FormLabel>
        <Input
          colorScheme="blue"
          type="email"
          value={input}
          onChange={handleInputChange}
        />
        {!isError ? (
          <FormHelperText>
            Enter the email you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Pasword</FormLabel>
        <Input colorScheme="blue" placeholder="Pasword" type="pasword" />
      </FormControl> */}
    </Box>
  );
};

export default Login;
