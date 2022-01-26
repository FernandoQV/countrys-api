import React from "react";
import { Heading, Image, LinkBox, LinkOverlay, Stack } from "@chakra-ui/react";
import DetailsCountryHome from "components/DetailsCountry";
import { ICountry } from "interfaces/ICountry";
import NextLink from 'next/link';
;

interface Props {
  country: ICountry;
}
const CardCountryHome = ({ country }: Props) => {
    const link=country.name.common.toLowerCase()
  return (
    <LinkBox>
      <Stack direction={"column"} boxShadow={'md'} _hover={{boxShadow:'lg'}} height={'full'}>
        <Image
          src={country.flags.png}
          alt={country.name.common}
          maxWidth={"sm"}
          height={"150px"}
          objectFit={"cover"}
        />
        <Stack direction={"column"} padding={6} spacing={4}>
          <NextLink href={`/country/${link}`} passHref>
            <LinkOverlay>
              <Heading as="h2" fontSize={"lg"}>
                {country.name.common}
              </Heading>
            </LinkOverlay>
          </NextLink>
          <Stack direction={"column"} spacing={1}>
            <DetailsCountryHome title="Population" text={country.population} />
            <DetailsCountryHome title="Region" text={country.region} />
            <DetailsCountryHome title="Capital" text={country.capital} />
          </Stack>
        </Stack>
      </Stack>
    </LinkBox>
  );
};

export default CardCountryHome;
