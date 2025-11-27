import { getCountries } from '../services/api.js';
import { displayCountry } from './country-container.js';

export async function initSearch() {
  const countriesArray = await getCountries();
  const searchInput = document.getElementById('country-search');
  const submitBtn = document.querySelector('form button');

  function handleClick(e) {
    e.preventDefault();

    const countryData = countriesArray.filter(
      (country) =>
        country.name.common.toLowerCase() == searchInput.value.toLowerCase()
    );

    displayCountry(countryData[0]);
  }

  countriesArray.forEach((country) => createCountryOption(country));
  submitBtn.addEventListener('click', handleClick);
}

function createCountryOption(country) {
  const datalist = document.getElementById('countries');
  const option = document.createElement('option');

  option.value = country.name.common;

  datalist.appendChild(option);
}
