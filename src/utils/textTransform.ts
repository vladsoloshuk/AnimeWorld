export const kindTransform = (kind: string) => {
  let outputKind: string = "";
  switch (kind) {
    case "tv":
      outputKind = "TV series";
      break;
    default:
      outputKind = kind.replace(/_/g, " ").replace(kind[0], kind[0].toUpperCase());
  }
  return outputKind;
};

export const urlTransform = (kind: string, url: string) => {
  let transformedUrl: string = "";
  kind === "light_novel" || kind === "novel" ? (transformedUrl = url.replace(/mangas/g, "ranobe")) : (transformedUrl = url);
  return transformedUrl;
};

export const firstLetterUpperCase = (InputStr: string) => {
  return InputStr.replace(InputStr[0], InputStr[0].toUpperCase());
};
