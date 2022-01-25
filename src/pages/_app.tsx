import { ChakraProvider, Container, Divider, Stack } from "@chakra-ui/react";
import Header from "components/Header";
import type { AppProps } from "next/app";
import { themeCurrent } from "../../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={themeCurrent}>
      <Stack direction={'column'} divider={<Divider orientation="horizontal"/>} alignItems={'center'}>
        <Header />
        <Component {...pageProps} />
      </Stack>
    </ChakraProvider>
  );
}

export default MyApp;
