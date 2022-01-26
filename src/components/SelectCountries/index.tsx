import { Select } from "@chakra-ui/react";
import { INFORMATION } from "constants/information";
import React, { useRef } from "react";
interface Props{
  changeRegion:any
}
const SelectCountries = ({changeRegion}:Props) => {
  const selectRef = useRef<HTMLSelectElement>(null);
  const changeValueSelect = () => {
    const region:string|any=selectRef.current?.value;
    changeRegion(region)
  };
  return (
    <Select
      ref={selectRef}
      placeholder="Select Region"
      size={"md"}
      variant={"outline"}
      maxWidth={"max"}
      onChange={changeValueSelect}
    >
      {INFORMATION.regiones.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </Select>
  );
};

export default SelectCountries;
