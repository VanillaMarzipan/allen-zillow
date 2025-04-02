// https://zillow-com1.p.rapidapi.com
export const getHouses = async (location, currentPage) => {
  const url = `https://zillow-com1.p.rapidapi.com/propertyExtendedSearch?location=${location}&page=${currentPage}&status_type=ForSale&home_type=Houses`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'a2acfeeb0fmsh024db1e577002c5p146dbdjsn1fe7b1a8d9ab',
      'x-rapidapi-host': 'zillow-com1.p.rapidapi.com'
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
