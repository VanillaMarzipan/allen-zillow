const baseUrl = process.env.BASE_URL | ''
const rapidapi_key = process.env.RAPIDAPI_KEY | ''
const rapidapi_host = process.env.RAPIDAPI_HOST | ''

export const getTrendingHouses = async (long, lat, d, includeSold) => {
  const url = 'https://zillow-com1.p.rapidapi.com/propertyByCoordinates?long=-118.504744&lat=34.01822&d=0.1&includeSold=true';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'a2acfeeb0fmsh024db1e577002c5p146dbdjsn1fe7b1a8d9ab',
      'x-rapidapi-host': 'zillow-com1.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
