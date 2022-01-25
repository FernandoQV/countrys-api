import React from "react";
import { GetStaticProps, NextPage } from "next";
import SelectCountries from "components/SelectCountries";
import {Stack} from "@chakra-ui/react";
import FormSearchCountry from "components/FormSearchCountry";
import { apiCountries } from "service/apiCountries";
import { ICountry } from "interfaces/ICountry";
import ListCountries from "components/ListCountries";
interface Props {
  countries: ICountry[];
}
const Home: NextPage<Props> = ({ countries }) => {
  console.log(countries);
  const country = countries[0];
  return (
    <Stack
      direction={"column"}
      maxWidth={"container.lg"}
      width={"full"}
      padding={8}
    >
      <Stack direction={"row"} justifyContent={"space-between"} width={"full"}>
        <FormSearchCountry />
        <SelectCountries />
      </Stack>
      <ListCountries countries={countries}/>
    </Stack>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const countries = await apiCountries.listRegion("americas");
  return {
    props: {
      countries,
    },
  };
};
export default Home;
