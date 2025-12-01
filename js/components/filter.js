import { getCountries } from '../services/api.js';

export async function initFilter() {
  const countriesArray = await getCountries();
  const numberCountries = document.getElementById('number-countries');
  const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'Å',
  ];
  const filterSelect = document.getElementById('filter-select');
  const clearFilter = document.getElementById('clear-filter');

  function handleSelect(e) {
    const exploreListItems = document.querySelectorAll('#explore-list li');
    const selectedValue = e.target.value;

    exploreListItems.forEach((item) => filterItem(item, selectedValue));
    updateNumberCountries(exploreListItems);
    handleError(exploreListItems);
  }

  function handleClearFilter() {
    filterSelect.value = 'all';
    filterSelect.dispatchEvent(new Event('change'));
  }

  numberCountries.textContent = `${countriesArray.length} countries`;
  alphabet.forEach((char) => createAlphabetOption(char, filterSelect));
  filterSelect.addEventListener('change', handleSelect);
  clearFilter.addEventListener('click', handleClearFilter);
}

function createAlphabetOption(char, filterSelect) {
  const option = document.createElement('option');

  option.value = char;
  option.textContent = char;

  filterSelect.appendChild(option);
}

function filterItem(item, selectedValue) {
  const firstChar = item.textContent.slice(0, 1);

  if (selectedValue === firstChar || selectedValue === 'all') {
    item.classList.remove('hidden');
  } else {
    item.classList.add('hidden');
  }
}

function updateNumberCountries(exploreListItems) {
  const numberCountries = document.getElementById('number-countries');
  const hiddenListItems = document.querySelectorAll('#explore-list li.hidden');

  numberCountries.textContent = `${
    exploreListItems.length - hiddenListItems.length
  } countries`;
}

function handleError(exploreListItems) {
  const exploreError = document.getElementById('explore-error');
  const hiddenListItems = document.querySelectorAll('#explore-list li.hidden');

  if (exploreListItems.length === hiddenListItems.length) {
    exploreError.classList.remove('hidden');
  } else {
    exploreError.classList.add('hidden');
  }
}
