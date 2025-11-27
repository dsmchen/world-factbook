export function displayCountry(country) {
  const countryContainer = document.getElementById('country-container');
  const countryCard = document.createElement('article');
  const countryExplore = document.createElement('a');
  const countryName = document.createElement('h2');
  const countryRegion = document.createElement('h3');
  const countryFlag = document.createElement('img');
  const countryMap = document.createElement('a');

  countryExplore.classList.add('explore');
  countryName.classList.add('name');
  countryRegion.classList.add('region');
  countryFlag.classList.add('flag');
  countryMap.classList.add('map');

  countryExplore.textContent = 'Explore all countries';
  countryName.textContent = country.name.common;
  countryRegion.textContent = country.region;
  countryMap.textContent = 'Map';

  countryFlag.src = country.flags.png;
  countryFlag.alt = country.flags.alt;

  countryExplore.href = '#';
  countryMap.href = country.maps.googleMaps;
  countryMap.target = '_blank';

  countryExplore.addEventListener('click', handleClick);

  countryCard.append(
    countryExplore,
    countryName,
    countryRegion,
    countryFlag,
    countryMap
  );
  countryContainer.appendChild(countryCard);
}

function handleClick(e) {
  const countryCard = e.target.parentElement;
  const exploreContainer = document.getElementById('explore-container');

  countryCard.remove();
  exploreContainer.classList.remove('hidden');
}
