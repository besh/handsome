import { configure } from "@storybook/react";

function loadStories() {
  const req = require.context("../src/components", true, /\.story\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
