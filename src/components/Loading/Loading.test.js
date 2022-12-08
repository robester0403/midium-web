/* eslint-disable testing-library/prefer-screen-queries */
// Note: install ESLINT next
import React from "react";
import { render } from "@testing-library/react";

import Loading from "./Loading";

describe("<Loading />", () => {
  it("should show only loading icon when no props are passed", () => {
    const { getByTestId } = render(<Loading />);

    expect(getByTestId("loading-icon")).toBeTruthy();
    expect(getByTestId("loading-container")).toHaveTextContent("");
  });

  it("should show message", () => {
    const testMessage = "Hello world";
    const { getByTestId } = render(<Loading message={testMessage} />);

    expect(getByTestId("loading-container")).toHaveTextContent(testMessage);
  });

  it("should show centered content if isCentered is true", () => {
    const { getByTestId } = render(<Loading isCentered />);

    expect(getByTestId("centered-container")).toBeTruthy();
  });

  it("should render smaller icon and message when small is true", () => {
    const { getByTestId } = render(<Loading small />);

    expect(getByTestId("loading-icon")).toHaveStyle("height: 12px");
    expect(getByTestId("loading-container").classList).toContain(
      "MuiTypography-body2"
    );
  });
});
