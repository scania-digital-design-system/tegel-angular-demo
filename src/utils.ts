  export function unslugify(slug: string) {
    const words = slug.replace(/-/g, ' ').split(' ');
    return words.join(' ');
  }
  