import { render } from "enzyme";
import React from "react";

import CartItem from "./index";
import { mockCartItem } from "../../constants/mockObjects";

it("component renders correctly", () => {
  expect(render(<CartItem item={mockCartItem} />)).toMatchSnapshot();
});
