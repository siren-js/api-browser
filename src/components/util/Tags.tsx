export default function Tags(props: { values: readonly string[] }) {
  return (
    <div className="tags">
      {props.values?.map((name, index) => (
        <span className="tag is-info" key={index}>
          {name}
        </span>
      ))}
    </div>
  );
}
