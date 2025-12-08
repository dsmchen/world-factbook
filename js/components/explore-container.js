import { getCountries } from '../services/api.js';
import { displayCountry } from './country-container.js';

export async function initExplore() {
  const countriesArray = await getCountries();
  const sortedCountries = countriesArray.sort(compareCountryName);

  sortedCountries.forEach((country) =>
    createCountryListItem(country, countriesArray)
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

function createCountryListItem(country, countriesArray) {
  const anchor = document.createElement('a');
  const listItem = document.createElement('li');
  const exploreContainer = document.querySelector('.explore-container');
  const exploreList = document.getElementById('explore-list');

  function handleClick(e) {
    const countryData = countriesArray.filter(
      (country) =>
        country.name.common.toLowerCase() == e.target.textContent.toLowerCase()
    );

    exploreContainer.classList.add('hidden');

    displayCountry(countryData[0]);
  }

  anchor.textContent = country.name.common;
  anchor.href = '#';
  anchor.addEventListener('click', handleClick);

  listItem.appendChild(anchor);
  exploreList.appendChild(listItem);
}
