export const timeFromPublication = (date: Date) => {
  const time = Date.now();
  const publicationDate = new Date(date);
  const dateDifference = time - publicationDate.getTime();

  const second = 1000;
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const year = day * 365;

  let seconds = Math.round(dateDifference / second);
  let minutes = Math.round(dateDifference / minute);
  let hours = Math.round(dateDifference / hour);
  let days = Math.round(dateDifference / day);
  let years = Math.round(dateDifference / year);

  if (dateDifference < 1 * minute) {
    return seconds + " seconds ago";
  }
  if (dateDifference > 1 * minute && dateDifference < 1 * hour) {
    return minutes + " minutes ago";
  }
  if (dateDifference > 1 * hour && dateDifference < 1 * day) {
    return hours + " hours ago";
  }
  if (dateDifference > 1 * day && dateDifference < 1 * year) {
    return days + " days ago";
  }
  if (dateDifference > 1 * year) {
    return years + " years ago";
  }
};

export const getYear = (date: Date) => {
  return new Date(date).getFullYear();
};

export const getYearGap = (airDate: string, releaseDate: string) => {
  return releaseDate ? (`${airDate.substring(0, 4)} - ${releaseDate.substring(0, 4)}`) : (`${airDate.substring(0, 4)}`);
};

export const transformDate = (inputDate: Date) => {
  let date = new Date(inputDate);
  let year = date.getFullYear();
  let month = ("0" + (date.getMonth() + 1)).slice(-2);
  let day = ("0" + date.getDate()).slice(-2);
  let hours = ("0" + date.getHours()).slice(-2);
  let minutes = ("0" + date.getMinutes()).slice(-2);
  return `${year}-${month}-${day} - ${hours}:${minutes}`;
};
