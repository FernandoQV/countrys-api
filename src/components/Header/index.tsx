import { Button, Heading, Stack, Text, useColorMode } from "@chakra-ui/react";
import { INFORMATION } from "constants/information";
import React from "react";
const Header = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Stack
      direction={"row"}
      maxWidth={"container.lg"}
      width={"full"}
      justifyContent={"space-between"}
      alignItems="center"
      paddingY={4}
    >
      <Heading>{INFORMATION.headerText}</Heading>
      <Button
        variant={"outline"}
        colorScheme={"primary"}
        onClick={toggleColorMode}
      >
        <Text as="span">Toogle Theme</Text>
      </Button>
    </Stack>
  );
};

export default Header;
