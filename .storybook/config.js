import { configure, addParameters } from "@storybook/react";
import theme from "./theme";

addParameters({
  options: {
    theme
  }
});

function loadStories() {
  const req = require.context("../src/components", true, /\.story\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
