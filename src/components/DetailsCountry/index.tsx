import { Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
interface Props {
  title: string;
  text: string | string[] | number|any;
}

const DetailsCountry:React.FC<Props> = ({ title, text }) => {
  return (
    <Stack direction={"row"} spacing={2} alignItems={"center"}>
      <Heading as="h3" fontSize={"md"}>
        {title.toString()}:
      </Heading>
      <Text as="span" fontSize={"sm"} fontWeight={500}>
        {text}
      </Text>
    </Stack>
  );
};

export default DetailsCountry
