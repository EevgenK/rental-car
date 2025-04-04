export const formatMilage = (number) => {
  const str = number.toString();
  return str.slice(0, 1) + ' ' + str.slice(1) + ' km';
};
export const formatRegister = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
