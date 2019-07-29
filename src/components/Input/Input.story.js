import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "./Input";

const wrapperStyle = {
  "max-width": "500px"
};

storiesOf("Input", module)
  .add("Clean shaven", () => <Input placeholder="Name" style={wrapperStyle} />)
  .add("With label", () => (
    <Input
      labelText="Full name"
      placeholder="E.g. Walter Waynerston"
      style={wrapperStyle}
    />
  ))
  .add("Password field", () => (
    <Input labelText="Password" type="password" style={wrapperStyle} />
  ))
  .add("Number field", () => (
    <Input
      labelText="Date (Unix timestamp)"
      placeholder="e.g. 552540647"
      type="number"
      style={wrapperStyle}
    />
  ));
