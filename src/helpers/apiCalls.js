import { apiConfig } from "../config/config";

// https://zillow-com1.p.rapidapi.com
export const getHouses = async (location, currentPage, statusType, homeType) => {
  const url = `${apiConfig.baseUrl}/propertyExtendedSearch?location=${location}&page=${currentPage}&status_type=${statusType}&home_type=${homeType}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': apiConfig.x_rapidapi_key,
      'x-rapidapi-host': apiConfig.x_rapidapi_host,
    }
  };
  
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error("Oof! You got an error!");
    }
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}
