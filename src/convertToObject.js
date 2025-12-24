'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};

  const properties = sourceString.split(';');

  properties.forEach((property) => {
    const propertyCopy = property.trim();

    const partsOfProperty = propertyCopy.split(':');

    if (partsOfProperty.length === 2) {
      result[partsOfProperty[0].trim()] = partsOfProperty[1].trim();
    }
  });

  return result;
}

module.exports = convertToObject;
