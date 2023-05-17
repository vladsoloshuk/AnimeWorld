export const multipleCheckboxFilter = (event, filter) => {
  let filterArray;
  let filterString;
  if (event.target.checked) {
    filter === "" ? (filterArray = []) : (filterArray = filter.split(","));
    filterArray.push(event.target.getAttribute("data-value"));
    filterString = filterArray.join(",");
    return filterString;
  } else {
    filterArray = filter.split(",");
    const statusIndex = filterArray.indexOf(event.target.getAttribute("data-value"));
    if (statusIndex > -1) {
      filterArray.splice(statusIndex, 1);
    }
    filterString = filterArray.join(",");
    return filterString;
  }
};