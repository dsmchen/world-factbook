export async function getCountries() {
  let response;

  try {
    const url =
      'https://restcountries.com/v3.1/all?fields=name,region,flags,maps,latlng,area,population,demonyms,languages';
    response = await fetch(url);
  } catch (error) {
    console.error(error);
  }

  if (response?.ok) {
    const data = await response.json();
    return data;
  } else {
    console.error(`HTTP Response Code: ${response?.status}`);
  }
}
