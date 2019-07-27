import React from "react";
import { storiesOf } from "@storybook/react";
import STYLE_TYPES from "constants/styleTypes";
import Button from "./Button";

storiesOf("Button", module)
  .add("Primary button", () => (
    <Button styleType={STYLE_TYPES.primary}>Very important</Button>
  ))
  .add("Secondaary button", () => (
    <Button styleType={STYLE_TYPES.secondary}>Medium important</Button>
  ))
  .add("Tertiary button", () => (
    <Button styleType={STYLE_TYPES.tertiary}>Not important at all</Button>
  ));
