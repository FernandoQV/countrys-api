import React, { useEffect, useState } from "react";
import { GetStaticProps, NextPage } from "next";
import SelectCountries from "components/SelectCountries";
import { Stack } from "@chakra-ui/react";
import FormSearchCountry from "components/FormSearchCountry";
import { apiCountries } from "service/apiCountries";
import { ICountry } from "interfaces/ICountry";
import ListCountries from "components/ListCountries";
interface Props {
  countries: ICountry[];
}
const Home: NextPage<Props> = ({ countries }) => {
  const [countriesSearch, setCountriesSearch] = useState<ICountry[]>([]);
  const [region, setRegion] = useState<string>("");
 
  useEffect(() => {
    const countriesSearchLast=countries.filter((country) => country.region === region);
    console.log(countriesSearchLast);
    
    setCountriesSearch([...countriesSearchLast])
  }, [region,countries]);
  return (
    <Stack
      direction={"column"}
      maxWidth={"container.lg"}
      width={"full"}
      padding={8}
    >
      <Stack direction={"row"} justifyContent={"space-between"} width={"full"}>
        <FormSearchCountry />
        <SelectCountries changeRegion={setRegion}/>
      </Stack>
      <ListCountries countries={countriesSearch} />
    </Stack>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const countries = await apiCountries.listAll();
  return {
    //revalidate:10,
    props: {
      countries,
    },
  };
};
export default Home;
