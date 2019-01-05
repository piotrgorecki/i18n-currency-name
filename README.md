# i18n-currency-name
[![](https://img.shields.io/npm/v/@piotrgorecki/i18n-currency-name.svg)](https://www.npmjs.com/package/@piotrgorecki/i18n-currency-name)
[![install size](https://packagephobia.now.sh/badge?p=@piotrgorecki/i18n-currency-name)](https://packagephobia.now.sh/result?p=@piotrgorecki/i18n-currency-name)


Translates the currency code ([ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)) to the localized currency name.

## Install

```
npm install @piotrgorecki/i18n-currency-name
yarn add @piotrgorecki/i18n-currency-name
```

## Usage

```js
var currencyToName = require("i18n-currency-name");

currencyToName("USD", "de")  // "Dollar"
currencyToName("USD", "en")  // "US Dollar"
currencyToName("USD", "es")  // "Dólar estadounidense"
currencyToName("USD", "pl")  // "Dolar Amerykański"
currencyToName("XYZ", "en")  // undefined
currencyToName("USD", "xyz") // undefined
```

### Supported locals
```js
["de", "en", "es", "pl"]
```
