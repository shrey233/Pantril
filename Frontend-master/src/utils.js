export const ToQueryStringParam = filter => {
  if (filter && filter.allergens && filter.allergens.length > 0) {
    let filters = "?";
    for (let allergen of filter.allergens) {
      filters = `${filters}allergens=${allergen}&`;
    }

    if (filter.kosher) {
      filters = `${filters}isKosher=${filter.kosher}&`;  
    }

    filters = `${filters}excludeMayContain=${filter.mayContain}`;

    return filters;
  }

  return "";
};

export const ArrayToQueryParams = someArray => {
  if (someArray && someArray.length > 0) {
    let params = "";
    for (let item of someArray) {
      params = `${params}${params.length > 0 ? "&" : "?"}ids=${item}&`;
    }

    return params;
  }

  return "";
};
