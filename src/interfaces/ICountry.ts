type NativeNameProps = {
  official: string;
  common: string;
};
type NativeNameCountry = {
  aym: NativeNameProps;
  que: NativeNameProps;
  spa: NativeNameProps;
};
type NameCountry = {
  common: string;
  official: string;
  nativeName: NativeNameCountry;
};
type Idd = {
  root: string;
  suffixes: string[];
};
type TraslationProps = {
  official: string;
  common: string;
};
type Traslation = {
  ara: TraslationProps;
  ces: TraslationProps;
  cym: TraslationProps;
  deu: TraslationProps;
  est: TraslationProps;
  fin: TraslationProps;
  fra: TraslationProps;
  hrv: TraslationProps;
  hun: TraslationProps;
  ita: TraslationProps;
  jpn: TraslationProps;
  kor: TraslationProps;
  nld: TraslationProps;
  per: TraslationProps;
  pol: TraslationProps;
  por: TraslationProps;
  rus: TraslationProps;
  slk: TraslationProps;
  spa: TraslationProps;
  swe: TraslationProps;
  urd: TraslationProps;
  zho: TraslationProps;
};
type DemomysProps = {
  f: string;
  m: string;
};
type Demomys = {
  eng: DemomysProps;
  fra: DemomysProps;
};
export interface ICountry {
  name: NameCountry;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: any;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: any;
  translations: Traslation;
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Demomys;
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  gini: any;
  fifa: string;
  car: {
    signs: string[];
    side: string;
  };
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
  };
  coatOfArms: {
    png: string;
    svg: string;
  };
  startOfWeek: string;
  capitalInfo: {
    latlng: number[];
  };
  postalCode: {
    format: string;
    regex: string;
  };
}
