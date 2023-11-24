const SimpleHorizontalBar = ({ element, property, maxValue }) => {
  return (
    <div
      className="bar simple horizontal"
      id={property}
    >
      {element[property].map((rate) => (
        <div
          key={rate.name}
          className="line"
        >
          <div className="x_label">{rate.name}</div>
          <div className="bar-container">
            <div
              className={`bar ${
                (rate.value / maxValue) * 100 > 75 ? "s0" : (rate.value / maxValue) * 100 > 50 ? "s1" : (rate.value / maxValue) * 100 > 25 ? "s2" : "s3"
              }`}
              style={{ width: `${(rate.value / maxValue) * 100}%` }}
              title={rate.value}
            >
              <div className={`value ${(rate.value / maxValue) * 100 > 20 ? "mini" : "narrow"}`}>
                {(rate.value / maxValue) * 100 > 10 ? `${rate.value}` : ``}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SimpleHorizontalBar;
