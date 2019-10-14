// Test away
import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import Dashboard from "./Dashboard";

describe("<DashBoard />", () => {
  it("matches snapshot"),
    () => {
      const tree = renderer.create(<Dashboard />);
      expect(tree.toJSON()).toMatchSnapshot();
    };
});
