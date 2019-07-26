import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "./Input";

storiesOf("Input", module)
  .add("Clean shaven", () => <Input />)
  .add("With placeholder", () => <Input placeholder="Name" />);
