/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import user from "@testing-library/user-event";
import SnackbarMessage from "./SnackbarMessage";

const message = "testmessage";
const actionLabel = "actionLabel";

describe("<SnackbarMessage / >", () => {
  it("should show the default render with a close icon and call close function on close", () => {
    const onClose = jest.fn();
    const { getByText, getByTestId } = render(
      <SnackbarMessage message={message} open={true} onClose={onClose} />
    );
    expect(getByTestId("closebutton")).toBeTruthy();
    expect(getByText(message)).toBeVisible();

    user.click(getByTestId("closebutton"));

    expect(onClose).toBeCalled();
  });
  it("should show the message, action button, and call action function", () => {
    const onAction = jest.fn();
    const { getByText, getByTestId } = render(
      <SnackbarMessage
        message={message}
        open={true}
        onAction={onAction}
        actionLabel={actionLabel}
      />
    );

    expect(getByTestId("actionbutton")).toBeTruthy();
    expect(getByText(message)).toBeVisible();

    user.click(getByTestId("actionbutton"));
    expect(onAction).toBeCalled();
    expect(getByText(actionLabel)).toBeVisible();
  });
});
