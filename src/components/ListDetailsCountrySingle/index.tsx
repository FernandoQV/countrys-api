import { Stack } from '@chakra-ui/react';
import DetailsCountry from 'components/DetailsCountry';
import { ICountry } from 'interfaces/ICountry';
import React from 'react';
interface Props{
    country:ICountry,
currency:unknown,
languages:unknown
}
const ListDetailsCountrySingle = ({country,currency,languages}:Props) => {
  return <Stack direction={"column"}>
  <DetailsCountry
    title="Native Name"
    text={country.translations.nld.common}
  />
  <DetailsCountry title="Population" text={country.population} />
  <DetailsCountry title="Region" text={country.region} />
  <DetailsCountry title="Sub Region" text={country.subregion} />
  <DetailsCountry title="Capital" text={country.capital} />
  <DetailsCountry title="Top Level Domain" text={country.tld} />
  <DetailsCountry title="Currencies" text={currency} />
  <DetailsCountry title="Languages" text={languages} />
</Stack>
};

export default ListDetailsCountrySingle;
