import './style.css';
import countries from "countries-list";

  const countryCodes = Object.keys(countries.countries);
  const countryNames = countryCodes.map(code => countries.countries[code].name);
  console.log(countryNames)
  const sortCountry = countryNames.sort();
  console.log(countryCodes)
  console.log(sortCountry)
  sortCountry.forEach(element => {
    const countrySelection = document.createElement('option');
    countrySelection.value = element;
    countrySelection.textContent = element;
    document.getElementById('country').appendChild(countrySelection)
  })

