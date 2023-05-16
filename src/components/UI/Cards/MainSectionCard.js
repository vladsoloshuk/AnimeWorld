import classes from "./MainSectionCard.module.css";

const MainSectionCard = (props) => {
  return <section className={`${classes['l-page']} ${props.className}`}>{props.children}</section>;
};

export default MainSectionCard;
