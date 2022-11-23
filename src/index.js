import './style.css';
import countries from "countries-list";
import zipit from "zip-it";

  const countryCodes = Object.keys(countries.countries);
  countryCodes.forEach(element => {
    const countrySelection = document.createElement('option');
    countrySelection.value = element;
    countrySelection.textContent = element;
    document.getElementById('country').appendChild(countrySelection);
  })

  const countrySelected = document.getElementById('country');
  countrySelected.addEventListener('change', function() {
    const countryZipcode = document.getElementById('zipcode');
    let zipValue = this.value;
    let zipCodePattern = zipit.getRegexForCountry(zipValue);
    countryZipcode.setAttribute('pattern', zipCodePattern);
    console.log(countryZipcode.pattern);
  })
