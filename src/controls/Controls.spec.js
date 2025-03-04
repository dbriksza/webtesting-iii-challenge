// Test away!
import React from "react";
import Controls from "./Controls";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";

import "jest-dom/extend-expect";

describe("<Controls />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Controls />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
