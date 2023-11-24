const Description = ({ descriptionValue }) => {
  return (
    <div className="c-description">
      <div className="subheadline m5">Description</div>
      {descriptionValue ? (
        <div
          className="block"
          dangerouslySetInnerHTML={{ __html: descriptionValue }}
        />
      ) : (
        <div className="block">No description</div>
      )}
    </div>
  );
};

export default Description;
