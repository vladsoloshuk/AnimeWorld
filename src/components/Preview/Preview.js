import { hostUrl } from "../../const/urlConsts";

const Preview = ({element}) => {
  return (<picture>
    <source
      srcSet={hostUrl + element.image.preview}
      type="image/webp"
    />
    <img
      alt={element.name}
      src={hostUrl + element.image.preview}
      srcSet={hostUrl + element.image.preview}
    />
  </picture>);
}

export default Preview;