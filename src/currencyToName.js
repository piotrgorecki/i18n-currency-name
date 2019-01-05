var dictionaries = require("./dictionaries");

/**
 * Returns localized currency name
 * @param {number} isoCode
 * @param {string} locale
 * @return {string}
 */
module.exports = function(isoCode, locale) {
  if (!isoCode) return undefined;
  if (!locale) return undefined;

  var dictionary = dictionaries[locale];

  if (dictionary) return dictionary[isoCode];
  else return undefined;
};
