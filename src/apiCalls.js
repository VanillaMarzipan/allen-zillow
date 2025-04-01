const baseUrl = process.env.BASE_URL | ''
const rapidapi_key = process.env.RAPIDAPI_KEY | ''
const rapidapi_host = process.env.RAPIDAPI_HOST | ''
// https://zillow-com1.p.rapidapi.com
export const getTrendingHouses = async (long, lat, d, includeSold) => {
  const url = `https://zillow-com1.p.rapidapi.com/propertyByCoordinates?long=${long}&lat=${lat}&d=${d}&includeSold=${includeSold}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'a2acfeeb0fmsh024db1e577002c5p146dbdjsn1fe7b1a8d9ab',
      'x-rapidapi-host': 'zillow-com1.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
