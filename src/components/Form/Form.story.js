import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import Form from "./Form";

storiesOf("Form", module).add("Simple form", () => (
  <Form
    style={{
      "max-width": "500px"
    }}
  >
    <Input labelText="First name" placeholder="Johnjane" />
    <Input labelText="Last name" placeholder="Smitherton" />
    <Input
      labelText="Social security #"
      placeholder="Usually found in a sock drawer"
      type="password"
    />
    <Input labelText="Password" type="password" />
    <Button styleType="primary">Submit your data to me</Button>
  </Form>
));
