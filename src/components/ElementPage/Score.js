const Score = ({ scoreValue }) => {
  return (
    <div className="block">
      <div className="subheadline m5">Score</div>
      <div className="scores">
        <div className="b-rate">
          <div className="stars-container">
            <div className="hoverable-trigger"></div>
            <div className={`stars score score-${Math.round(scoreValue)}`}></div>
            <div className="stars hover"></div>
            <div className="stars background"></div>
          </div>
          <div className="text-score">
            <div className={`score-value score-${Math.round(scoreValue)}`}>{scoreValue}</div>
            <div className="score-notice">
              {scoreValue > 9
                ? "Splendid"
                : scoreValue > 8
                ? "Excellent"
                : scoreValue > 7
                ? "Good"
                : scoreValue > 6
                ? "Fine"
                : scoreValue > 5
                ? "More or less"
                : scoreValue > 4
                ? "Bad"
                : scoreValue > 3
                ? "Very bad"
                : scoreValue > 2
                ? "Terrible"
                : scoreValue > 1
                ? "Worse than ever"
                : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Score;
