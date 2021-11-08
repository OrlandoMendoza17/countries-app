const API_URL = "https://restcountries.com/v3.1/all/";

export const consultarApi = async (setState) => {
  
  const response = await fetch(API_URL)
  const data = await response.json();
  const countries = Array.from(data);

  return {
    countries: countries,
    filtered: countries,
    byRegion: countries,
    isFetch: true
  }
  
}