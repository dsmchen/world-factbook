export function displayCountry(country) {
  const countryContainer = document.getElementById('country-container');
  const countryCard = document.createElement('article');
  const countryName = document.createElement('h2');
  const countryRegion = document.createElement('h3');
  const countryFlag = document.createElement('img');
  const countryMap = document.createElement('a');

  countryName.classList.add('name');
  countryRegion.classList.add('region');
  countryFlag.classList.add('flag');
  countryMap.classList.add('map');

  countryName.textContent = country.name.common;
  countryRegion.textContent = country.region;
  countryMap.textContent = 'Map';

  countryFlag.src = country.flags.png;
  countryFlag.alt = country.flags.alt;

  countryMap.href = country.maps.googleMaps;
  countryMap.target = '_blank';

  countryCard.append(countryName, countryRegion, countryFlag, countryMap);
  countryContainer.appendChild(countryCard);
}
