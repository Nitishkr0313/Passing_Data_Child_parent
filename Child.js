import SubChild from "./SubClild";

export default function Child(props) {
  return (
    <div>
      <p>i am </p>
      <h1>This is a Child Comp name</h1>
      <SubChild setc={props.setp} />
    </div>
  );
}
