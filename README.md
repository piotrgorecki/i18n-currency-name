# i18n-currency-name
Translate the currency code ([ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)) to the localized currency name.

## Installing

At this moment, only github as the source is supported. NPM package is planning in the future.

```
npm i https://github.com/piotrgorecki/i18n-currency-name
```

## ISO to name
*Get the translated name of a currency by it's ISO 4217 code*

```js
var currencyToName = require("i18n-currency-name");

currencyToName("USD", "en")  // "US Dollar"
currencyToName("USD", "pl")  // "Dolar Amerykański"
currencyToName("PLN", "en")  // "Polish Zloty"
currencyToName("PLN", "pl")  // "Złoty"
currencyToName("AAA", "oo")  // undefined
```

## Supported locals
["en", "pl"]
