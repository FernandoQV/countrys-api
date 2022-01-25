import { ICollapse } from "@chakra-ui/react";
import axios from "axios";
import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";
import { ICountry } from "../interfaces/ICountry";
const API_ALL_COUNTRIES = "https://restcountries.com/v3.1/all";
const API_SINGLE_COUNTRY = "https://restcountries.com/v3.1/name";
const API_REGION='https://restcountries.com/v3.1/region'
export const apiCountries = {
  listAll: async (): Promise<ICountry[]> => {
    return axios.get(API_ALL_COUNTRIES).then((response) => response.data);
  },
  listRegion: async (
    region: string
  ): Promise<ICountry[]> => {
    return axios.get(API_REGION+`/${region}`).then(response=>response.data);
  },
  SingleCountry: async (
    nameCountry: string
  ): Promise<ICountry[] | undefined> => {
    return  axios.get(API_SINGLE_COUNTRY+`/${nameCountry}`).then((response)=>response.data).then(dato=>dato[0]);
  },
};
