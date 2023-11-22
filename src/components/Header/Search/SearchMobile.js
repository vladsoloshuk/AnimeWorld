import { useState } from "react";
import { useAppDispatch } from "../../../hooks/redux";
import { elementVisibility } from "../../../store/reducers/MenuParams";

const SearchMobile = () => {
  const dispatch = useAppDispatch();
  const [isVisible, setIsVisible] = useState(false);

  const showMobileSearchHandler = () => {
    setIsVisible(!isVisible);
    dispatch(elementVisibility(["search", !isVisible]));
    dispatch(elementVisibility(["mobile", !isVisible]));
  };

  return (
    <div
      onClick={showMobileSearchHandler}
      className="menu-icon search mobile"
    ></div>
  );
};

export default SearchMobile;
