import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "./Input";

const wrapperStyle = {
  width: "500px"
};

storiesOf("Input", module)
  .add("Clean shaven", () => <Input placeholder="Name" style={wrapperStyle} />)
  .add("With label", () => (
    <Input
      labelText="Full name"
      placeholder="E.g. Jake M'lady"
      style={wrapperStyle}
    />
  ))
  .add("Password field", () => (
    <Input labelText="Password" type="password" style={wrapperStyle} />
  ));
