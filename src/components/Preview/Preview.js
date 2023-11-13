import { hostUrl } from "../../const/urlConsts";

const Preview = ({element, imageType}) => {
  return (
    <picture>
      <source
        srcSet={hostUrl + imageType}
        type="image/webp"
      />
      <img
        alt={element.name}
        src={hostUrl + imageType}
        srcSet={hostUrl + imageType}
      />
    </picture>
  );
};

export default Preview;
