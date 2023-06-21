import lowerCase from "lodash/lowerCase";
import { useAppSelector } from "../../../../hooks/redux";

const CatalogDescription = () => {
  const pageParams = useAppSelector((state) => state.pageParams);

  return (
    <header className="head">
      <h1>{pageParams.title}</h1>
      <div className="notice">This page displays sorted {lowerCase(pageParams.title)}.</div>
    </header>
  );
};

export default CatalogDescription;
