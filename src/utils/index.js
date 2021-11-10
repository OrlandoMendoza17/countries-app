export const getCountryNativeName = (country) => {
  return country.name.nativeName[Object.keys(country.name.nativeName)[0]].official
}

export const getList = (list) => {
  return Object.values(list)
}

export const displayListFrom = (array) => {
  return array.join(", ")
}

export const displayList = (list, attribute) => {
  const listValues = getList(list).map(item => attribute? item[attribute] : item)
  return displayListFrom(listValues)
}

export const formatNumber = (number) => number.toLocaleString('es-VE')