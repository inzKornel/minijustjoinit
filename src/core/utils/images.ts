export const cdnImage = (name: string, placeholder: boolean, folder = '/assets', count = 10) => {
  if (process.env.NODE_ENV === 'production') {
    if (placeholder) {
      return 'https://cdn.statically.io/img/inkornel.github.io/h=' + count + '/' + folder + '/' + name;
    } else {
      return 'https://cdn.statically.io/img/inkornel.github.io/f=auto/' + folder + '/' + name;
    }
  } else {
    return folder + '/' + name;
  }
};
