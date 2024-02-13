export const capitalizeFirstLetter = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1);

export const convertStringToArray = (techStack: string, delimiter = ',') =>
  techStack.split(delimiter).map((item) => item.trim());
