import { apiConfig } from "../config/config";

// https://zillow-com1.p.rapidapi.com
export const getHouses = async (location, currentPage, statusType, homeType, minPrice, maxPrice, rentMinPrice, rentMaxPrice, bedsMin, bedsMax, bathsMin, bathsMax) => {
  let url = `${apiConfig.baseUrl}/propertyExtendedSearch?location=${location}&page=${currentPage}&status_type=${statusType}&home_type=${homeType}`;
  
  if (statusType == 'ForSale' || statusType == 'RecentlySold') {
    if (maxPrice > 0) {
      // TODO: swap if necessary, helper does not work!
      url += `&minPrice=${minPrice}&maxPrice=${maxPrice}`;
    }
  } else {
    if (rentMaxPrice > 0) {
      url += `&rentMinPrice=${rentMinPrice}&rentMaxPrice=${rentMaxPrice}`;
    }
  }

  if (bedsMax > 0) {
    url += `&bedsMin=${bedsMin}&bedsMax=${bedsMax}`;
  }
  if (bathsMax > 0) {
    url += `&bathsMin=${bathsMin}&bathsMax=${bathsMax}`;
  }

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
