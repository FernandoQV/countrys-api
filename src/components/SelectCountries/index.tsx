import { Select } from "@chakra-ui/react";
import { INFORMATION } from "constants/information";
import React from "react";

const SelectCountries = () => {
  return (
    <Select placeholder="Select Region" size={'md'} variant={'outline'} maxWidth={'max'}>
      {INFORMATION.regiones.map((region) => (
        <option key={region} value={region}>{region}</option>
      ))}
    </Select>
  );
};

export default SelectCountries;
