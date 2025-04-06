export const getMiLageFormat = (value, prefix) => {
  if (!value) return '';
  const formattedValue = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return prefix ? `${prefix + ' ' + formattedValue}` : formattedValue;
};
