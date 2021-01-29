import { render, mount } from "enzyme";
import React from "react";

import ErrorBoundary from "./index";

it("component renders correctly", () => {
  expect(
    render(
      <ErrorBoundary>
        <p>Test</p>
      </ErrorBoundary>
    )
  ).toMatchSnapshot();
});

it("component catches error correctly", () => {
  const Node = () => null;
  const wrapper = mount(
    <ErrorBoundary>
      <Node />
    </ErrorBoundary>
  );
  wrapper.find(Node).simulateError(new Error("test"));
  expect(wrapper.state()).toEqual({ hasErrored: true });
});
