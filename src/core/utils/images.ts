export const cdnImage = (name: string, placeholder: boolean, folder = '/assets', count = 10) => {
  if (process.env.NODE_ENV === 'production') {
    if (placeholder) {
      return 'https://cdn.statically.io/img/minijustjoinit/h=' + count + '/' + folder + '/' + name;
    } else {
      return 'https://cdn.statically.io/img/minijustjoinit/f=auto/' + folder + '/' + name;
    }
  } else {
    return folder + '/' + name;
  }
};
