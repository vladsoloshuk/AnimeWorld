import { hostUrl } from "../../const/urlConsts";

const Preview = ({ element, imageType }) => {
  // console.log(imageType);
  let url = "";
  imageType.includes("http") ? (url = imageType) : (url = hostUrl + imageType);

  return (
    <picture>
      <source
        srcSet={url}
        type="image/webp"
      />
      <img
        alt={element.name}
        src={url}
        srcSet={url}
      />
    </picture>
  );
};

export default Preview;
