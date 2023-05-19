export const multipleCheckboxFilter = (event, filter) => {
  let filterArray;
  let filterString;
  const childElement = event.target.querySelector("input");

  childElement.checked ? (childElement.checked = false) : (childElement.checked = true);
  if (childElement.checked) {
    event.target.classList.add("selected");
    filter === "" ? (filterArray = []) : (filterArray = filter.split(","));
    filterArray.push(childElement.getAttribute("data-value"));
    filterString = filterArray.join(",");
  } else {
    event.target.classList.remove("selected");
    filterArray = filter.split(",");
    const statusIndex = filterArray.indexOf(childElement.getAttribute("data-value"));
    if (statusIndex > -1) {
      filterArray.splice(statusIndex, 1);
    }
    filterString = filterArray.join(",");
  }
  return filterString;
};

export const newFilter = (event, filter) => {
  filter.sorting.map((sortType) => {
    if (sortType.name === event.target.getAttribute("data-field")) {
      sortType.name.params.map((param => {
        if (param.value === event.target.getAttribute("data-value")) {
          param.isClicked = !param.isClicked;
          return filter;
        }
      }))
    }
  })
  return filter;
};

export const singleRadioFilter = (event, filter) => {
  let filterString;
  let childElement = event.target.querySelector("input");

  childElement.checked = true;
  if (childElement.checked) {
    event.target.classList.add("selected");
    filterString = childElement.getAttribute("data-value");
  } else {
    event.target.classList.remove("selected");
    filterString = "ranked";
  }
  return filterString;
};
