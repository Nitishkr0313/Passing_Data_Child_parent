export default function SubChild(props) {
  return (
    <div>
      <hr />
      <p>i am </p>
      <h1>This is a SubChild Comp name</h1>
      <button
        onClick={() =>
          props.setc("nitish kumar is comming from subchild to parent")
        }
      >
        Click me
      </button>
    </div>
  );
}
