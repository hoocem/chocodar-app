export const capitalizeStr = str =>
  str[0].toUpperCase() + str.slice(1).toLowerCase();

export const formatGovernorateName = governorate => {
  const words = governorate.split('_');
  return words.join(' ');
};

export const reverseGovernorateName = gov => {
  const words = gov.split(' ');
  return words.join('_');
};
