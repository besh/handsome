import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "./Input";

storiesOf("Input", module)
  .add("Clean shaven", () => <Input placeholder="Name" />)
  .add("With label", () => (
    <Input labelText="Full name" placeholder="E.g. Jake M'lady" />
  ));
