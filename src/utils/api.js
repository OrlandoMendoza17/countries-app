const API = "https://restcountries.com/v3.1";
const ALL_URL = "/all";
// const NAME_URL = "/name";

const axios = async (API_URL) => {
  const response = await fetch(API_URL)
  const data = await response.json();
  return data;
}

export const getCountries = async () => {
  const countries = await axios(`${API}${ALL_URL}`)
  return countries || [];
}

export const getCountry = async (url, name) => {
  url = (url === "country") ? "name" : url;
  const [country] = await axios(`${API}/${url}/${name}`)
  return country || {};
}