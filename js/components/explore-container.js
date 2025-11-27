import { getCountries } from '../services/api.js';
import { displayCountry } from './country-container.js';

export async function initExplore() {
  const countriesArray = await getCountries();
  const exploreContainer = document.getElementById('explore-container');
  const exploreList = document.getElementById('explore-list');
  const sortedCountries = countriesArray.sort(compareCountryName);

  sortedCountries.forEach((country) =>
    createCountryItem(country, countriesArray, exploreContainer, exploreList)
  );
}

function compareCountryName(a, b) {
  const nameA = a.name.common.toLowerCase();
  const nameB = b.name.common.toLowerCase();

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  return 0;
}

function createCountryItem(
  country,
  countriesArray,
  exploreContainer,
  exploreList
) {
  const item = document.createElement('li');
  const anchor = document.createElement('a');

  anchor.textContent = country.name.common;
  anchor.href = '#';

  function handleClick(e) {
    const countryData = countriesArray.filter(
      (country) =>
        country.name.common.toLowerCase() == e.target.textContent.toLowerCase()
    );

    exploreContainer.classList.add('hidden');

    displayCountry(countryData[0]);
  }

  anchor.addEventListener('click', handleClick);
  item.appendChild(anchor);
  exploreList.appendChild(item);
}
