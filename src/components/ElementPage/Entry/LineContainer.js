const LineContainer = (props) => {
  return (
    <div className="line-container">
      <div className="line">
        <div className="key">{props.title}</div>
        <div className="value">{props.value}</div>
      </div>
    </div>
  );
};

export default LineContainer;
