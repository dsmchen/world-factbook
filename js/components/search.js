import { getCountries } from '../services/api.js';
import { displayCountry } from './country-container.js';

export async function initSearch() {
  const countriesArray = await getCountries();
  const datalist = document.getElementById('countries');
  const searchInput = document.getElementById('country-search');
  const submitBtn = document.querySelector('form button');

  function handleSubmit(e) {
    e.preventDefault();

    const countryData = countriesArray.filter(
      (country) =>
        country.name.common.toLowerCase() == searchInput.value.toLowerCase()
    );

    displayCountry(countryData[0]);
  }

  countriesArray.forEach((country) => createCountryOption(country, datalist));
  submitBtn.addEventListener('click', handleSubmit);
}

function createCountryOption(country, datalist) {
  const option = document.createElement('option');
  option.value = country.name.common;
  datalist.appendChild(option);
}
