  // TODO: Do this only once, save in store 
  const stylesheet = getComputedStyle(document.documentElement)
  
  export const colorDefault = stylesheet.getPropertyValue('--color-primary');
  export const colorGray = stylesheet.getPropertyValue('--color-gray');