import React from "react";
import ReactDOM from "react-dom";
import { Form, Input, Select } from "./components";

import "./styles.css";

export default function App() {
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <h1>Smart Form Component</h1>
      <Form onSubmit={onSubmit}>
        <Input name="firstName" />
        <Input name="lastName" />
        <Select name="sex" options={["female", "male"]} />

        <button>Submit</button>
      </Form>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
