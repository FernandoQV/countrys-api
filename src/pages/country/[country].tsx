import {
  Button,
  Container,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import DetailsCountry from "components/DetailsCountry";
import ListDetailsCountrySingle from "components/ListDetailsCountrySingle";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ICountry } from "../../interfaces/ICountry";
import { apiCountries } from "../../service/apiCountries";

interface Props {
  country: ICountry;
}
const CountrySingle = ({ country }:Props) => {
  const currency: any = Object.values(country.currencies)?.[0].name;
  console.log(currency);
  const languages: any = Object.values(country.languages).reduce(
    (text, current) => text.concat(`${current}\t`),
    ""
  );
  return (
    <Stack
      direction={"column"}
      maxWidth={"container.lg"}
      padding={12}
      spacing={12}
      width={"full"}
      alignItems={"flex-start"}
    >
      <Button
      as='a'
      href="/"
        leftIcon={
          <Image
            src="https://icongr.am/jam/arrow-left.svg?size=16&color=currenColor"
            alt="Icon Arrow Left"
          />
        }
        variant={"outline"}
        size={"sm"}
      >
        <Text as="span">Back</Text>
      </Button>
      <Stack direction={"row"} justifyContent={"space-between"} width={"full"}>
        <Image src={country.flags.png} alt="Image" />
        <Stack direction={"column"}>
          <Heading fontSize={"2xl"}>{country.name.common}</Heading>
          <ListDetailsCountrySingle country={country} currency={currency} languages={languages} />
        </Stack>
      </Stack>
    </Stack>
  );
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const country = await apiCountries.SingleCountry(params?.country as string);
  return {
    props: {
      country,
    },
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const countries = await apiCountries.listAll();
  return {
    //paths:[],
    paths: countries.map((country) => ({
      params: { country: country.name.common },
    })),
    fallback: "blocking",
  };
};
export default CountrySingle;
