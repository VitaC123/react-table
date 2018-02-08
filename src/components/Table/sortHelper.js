const sortList = (list, orderBy) => {
  const key = toCamelCase(orderBy);

  if (orderBy === 'zip') {
    return list.sort(sortNumerical(key));
  }

  if (orderBy === 'address') {
    return list.sort((a, b) => {
      const houseA = a.street.split(' ');
      const houseB = b.street.split(' ');

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
        // Otherwise, handle comparison alphabetically
        if (streetA < streetB) return -1;
        if (streetA > streetB) return 1;
        return 0;
      }
    });
  }

  return list.sort(sortAlphabetical(key));
}

const sortNumerical = key => (
  (a, b) => (a[key] - b[key])
);

const sortAlphabetical = key => (
  (a, b) => {
    const nameA = a[key].toLowerCase();
    const nameB = b[key].toLowerCase();
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
