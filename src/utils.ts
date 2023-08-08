export const capitalizeFirst = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  export function unslugify(slug: string) {
    const words = slug.replace(/-/g, ' ').split(' ');
    return capitalizeFirst(words.join(' '));
  }
  