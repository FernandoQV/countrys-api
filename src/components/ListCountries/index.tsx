import { GridItem, SimpleGrid } from '@chakra-ui/react';
import CardCountryHome from 'components/CardCountryHome';
import { ICountry } from 'interfaces/ICountry';
import React from 'react';
interface Props {
    countries: ICountry[];
  }
const ListCountries = ({countries}:Props) => {
  return <SimpleGrid as='section' padding={12} minChildWidth={'200px'} gap={12}>
  {Boolean(countries.length)&& countries.map((country) => (
    <GridItem key={country.name.common}>
      <CardCountryHome country={country} />
    </GridItem>
  ))}
</SimpleGrid>
};

export default ListCountries;
