import './style.css';
import countries from "countries-list";

  const countryCodes = Object.keys(countries.countries);
  const countryNames = countryCodes.map(code => countries.countries[code].name);
  const sortCountry = countryNames.sort();
  sortCountry.forEach(element => {
    const countrySelection = document.createElement('option');
    countrySelection.value = element;
    countrySelection.textContent = element;
    document.getElementById('country').appendChild(countrySelection)
  })
