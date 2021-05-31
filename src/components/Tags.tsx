const Tags = (props: { values: readonly string[] }) => (
  <div className="tags">
    {props.values?.map((name, index) => (
      <span className="tag is-info" key={index}>
        {name}
      </span>
    ))}
  </div>
);

export default Tags;
