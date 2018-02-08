const sortList = (list, orderBy) => {
  const key = toCamelCase(orderBy);
  if (orderBy === 'address') {
    return list.sort(sortStreetAddress());
  }
  return list.sort(sortAlphanumeric(key));
};

const sortStreetAddress = (key = 'street') => (
  (a, b) => {
    const houseA = a[key].split(' ');
    const houseB = b[key].split(' ');
    // compare house numbers
    const houseNumA = parseInt(houseA[0], 10);
    const houseNumB = parseInt(houseB[0], 10);
    if (houseNumA !== houseNumB) {
      return houseNumA - houseNumB;
    } else {
      // compare street names
      const streetA = houseA[1].toLowerCase();
      const streetB = houseB[1].toLowerCase();
      const streetAInt = parseInt(streetA, 10);
      const streetBInt = parseInt(streetB, 10);
      // handle comparison if street name contains a number
      if (streetAInt >= 0 && streetBInt >= 0) return streetAInt - streetBInt;
      if (streetBInt >= 0) return 1;
      // Else, handle comparison alphabetically
      if (streetA < streetB) return -1;
      if (streetA > streetB) return 1;
      return 0;
    }
  }
);

const sortAlphanumeric = key => (
  (a, b) => {
    const nameA = a[key].toString().toLowerCase();
    const nameB = b[key].toString().toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  }
);

const toCamelCase = string => (
  string
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => index === 0 ? letter.toLowerCase() : letter.toUpperCase())
    .replace(/\s+/g, '')
);


export default {
  sortList
};
