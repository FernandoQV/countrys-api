import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import React from "react";

const FormSearchCountry = () => {
  return (
    <FormControl maxWidth={'sm'}>
    <Input id='country' type='text' placeholder="Search country by region" />
  </FormControl>
  );
};

export default FormSearchCountry;
