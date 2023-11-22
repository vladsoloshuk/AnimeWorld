import { useAppDispatch } from "../../../hooks/redux";
import { elementVisibility } from "../../../store/reducers/MenuParams";

const Backdrop = () => {
  const dispatch = useAppDispatch();

  const backdropHandler = () => {
    dispatch(elementVisibility(["search", false]));
    dispatch(elementVisibility(["mobile", false]));
  };
  return (
    <div
      className="b-shade"
      onClick={backdropHandler}
    ></div>
  );
};

export default Backdrop;
