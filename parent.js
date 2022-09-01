import { useState } from "react";
import Child from "./Child";
export default function Parent() {
  const [name, setName] = useState("Vikash");

  return (
    <div>
      <p>i am </p>
      <h1>This is a parent Comp name={name}</h1>
      <hr />
      <Child setp={setName} />
    </div>
  );
}
