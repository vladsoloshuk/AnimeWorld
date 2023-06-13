const MenuToggler = ({ menuToggleHandler }) => {
  return (
    <div
      className="menu-toggler"
      onClick={menuToggleHandler}
    >
      <div className="toggler"></div>
    </div>
  );
};

export default MenuToggler;
