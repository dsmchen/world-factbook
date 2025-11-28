export function displayCountry(country) {
  const countryContainer = document.getElementById('country-container');
  const countryCard = document.createElement('article');
  const countryExplore = document.createElement('a');
  const countryName = document.createElement('h2');
  const countryRegion = document.createElement('h3');
  const countryFlag = document.createElement('img');
  const countryMap = document.createElement('a');
  const countryGeography = document.createElement('h3');
  const countryGeographyList = document.createElement('ul');
  const countryLocation = document.createElement('li');
  const countryLatlng = document.createElement('li');
  const countryArea = document.createElement('li');
  const countryPeople = document.createElement('h3');
  const countryPeopleList = document.createElement('ul');
  const countryPopulation = document.createElement('li');
  const countryNationality = document.createElement('li');
  const countryLanguages = document.createElement('li');

  countryExplore.classList.add('explore');
  countryName.classList.add('name');
  countryRegion.classList.add('region');
  countryFlag.classList.add('flag');
  countryMap.classList.add('map');
  countryGeography.classList.add('geography');
  countryLocation.classList.add('location');
  countryLatlng.classList.add('latlng');
  countryArea.classList.add('area');
  countryPeople.classList.add('people');
  countryPopulation.classList.add('population');
  countryNationality.classList.add('nationality');
  countryLanguages.classList.add('languages');

  countryExplore.textContent = 'Explore all countries';
  countryName.textContent = country.name.common;
  countryRegion.textContent = country.region;
  countryMap.textContent = 'Map';
  countryGeography.textContent = 'Geography';
  countryLocation.textContent = `Location: ${country.region}`;
  countryLatlng.textContent = `Geographic coordinates: ${formatLatlng(
    country.latlng
  )}`;
  countryArea.textContent = `Area: ${country.area.toLocaleString()} sq km`;
  countryPeople.textContent = 'People and society';
  countryPopulation.textContent = `Population: ${country.population.toLocaleString()}`;
  countryNationality.textContent = `Nationality: ${country.demonyms.eng.f}`;
  countryLanguages.textContent = `Languages: ${formatLanguages(
    country.languages
  )}`;

  countryFlag.src = country.flags.png;
  countryFlag.alt = country.flags.alt;

  countryExplore.href = '#';
  countryMap.href = country.maps.googleMaps;
  countryMap.target = '_blank';

  countryExplore.addEventListener('click', handleClick);

  countryGeographyList.append(countryLocation, countryLatlng, countryArea);
  countryPeopleList.append(
    countryPopulation,
    countryNationality,
    countryLanguages
  );
  countryCard.append(
    countryExplore,
    countryName,
    countryRegion,
    countryFlag,
    countryMap,
    countryGeography,
    countryGeographyList,
    countryPeople,
    countryPeopleList
  );
  countryContainer.appendChild(countryCard);
}

function formatLatlng(latlng) {
  let lat = latlng[0];
  let lng = latlng[1];
  let latUnit = lat > 0 ? 'N' : 'S';
  let lngUnit = lng > 0 ? 'E' : 'W';

  lat = lat > 0 ? lat : Number(lat.toString().split('').slice(1).join(''));
  lng = lng > 0 ? lng : Number(lng.toString().split('').slice(1).join(''));

  return `${lat.toFixed(2)} ${latUnit}, ${lng.toFixed(2)} ${lngUnit}`;
}

function formatLanguages(languages) {
  let array = [];
  for (const [key, value] of Object.entries(languages)) {
    array.push(value);
  }
  return array.join(', ');
}

function handleClick(e) {
  const countryCard = e.target.parentElement;
  const exploreContainer = document.getElementById('explore-container');

  countryCard.remove();
  exploreContainer.classList.remove('hidden');
}
