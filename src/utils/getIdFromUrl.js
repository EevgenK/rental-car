export const getIdFromUrl = (url) => {
  const urlParts = url.split('/');
  const filename = urlParts.pop();
  const id = filename.split('-')[0];
  return id;
};
