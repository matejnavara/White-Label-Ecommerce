import { shallow } from "enzyme";
import React from "react";

import CartItem from "./index";
import { mockCartItem } from "../../constants/mockObjects";

it("component renders correctly", () => {
  expect(shallow(<CartItem item={mockCartItem} />)).toMatchSnapshot();
});
