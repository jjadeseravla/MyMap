import React from "react";
import { cleanup, render, fireEvent, wait } from "@testing-library/react";
import "jest-dom/extend-expect";

import App from "./App";

describe("The App", () => {
  afterEach(cleanup);

  it("should have a heading", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("heading")).toBeVisible();
  });

  it("should show data after submitting form with correct id in text box", async () => {
    const { getByTestId, getByText } = render(<App />);
    const originalFetch = global.fetch;
    global.fetch = jest.fn();
    global.fetch.mockResolvedValue({
      json: async () => {
        return {
          allowance: "£1000.00",
          total_spend: "£0.00",
          remaining_balance: "£1000.00",
          days_allowance: 2.0,
          days_spent: 0,
          days_remaining: 2.0
        };
      }
    });
    const inputBox = getByTestId("input");
    const submitButton = getByTestId("submitButton");

    fireEvent.change(inputBox, { target: { value: "12345" } });
    fireEvent.click(submitButton);

    expect(global.fetch).toHaveBeenCalledWith("http://localhost:9292/12345");

    await wait(() => {
      getByTestId("dataHeading");
    });
    
    global.fetch = originalFetch;

    expect(getByTestId("allowance").textContent).toEqual("£1000Allowance");
    expect(getByTestId("spent").textContent).toEqual("£0Spent");
    expect(getByTestId("remaining").textContent).toEqual("£1000Remaining");
    expect(getByTestId("daysAllowance").textContent).toEqual("2Training days");
    expect(getByTestId("daysSpent").textContent).toEqual("0Spent");
    expect(getByTestId("daysRemaining").textContent).toEqual("2Remaining");

  });

  it("should give an error message for submitting an empty text box", async () => {
    const { getByTestId, getByText } = render(<App />);
    const inputBox = getByTestId("input");
    const submitButton = getByTestId("submitButton");

    fireEvent.change(inputBox, { target: { value: "" } });
    fireEvent.click(submitButton);

    await wait(() => {
      getByTestId("errorMessage");
    });

    expect(getByText(/Text box cannot be empty/));
  });

  it("should give an error message for submitting an id that isn't 5 digits long", async () => {
    const { getByTestId, getByText } = render(<App />);
    const inputBox = getByTestId("input");
    const submitButton = getByTestId("submitButton");

    fireEvent.change(inputBox, { target: { value: "34" } });
    fireEvent.click(submitButton);

    await wait(() => {
      getByTestId("errorMessage");
    });

    expect(getByText(/ID must be 5 digits long/));
  });

  it("should give an error message for submitting an id that isn't valid", async () => {
    const { getByTestId, getByText } = render(<App />);
    const inputBox = getByTestId("input");
    const submitButton = getByTestId("submitButton");
    const originalFetch = global.fetch;
    global.fetch = jest.fn();
    global.fetch.mockRejectedValueOnce("fake error");

    fireEvent.change(inputBox, { target: { value: "00000" } });
    fireEvent.click(submitButton);

    await wait(() => {
      getByTestId("errorMessage");
    });

    expect(getByText(/Please enter a valid ID/));

    global.fetch = originalFetch;
  });

  it("should have a request button that takes me to the new request form", async () => {
    const { getByTestId } = render(<App />);
    const originalFetch = global.fetch;
    global.fetch = jest.fn();
    global.fetch.mockResolvedValue({
      json: async () => {
        return {
          allowance: "£1000.00",
          total_spend: "£0.00",
          remaining_balance: "£1000.00",
          days_allowance: 2.0,
          days_spent: 0,
          days_remaining: 2.0
        };
      }
    });
    const inputBox = getByTestId("input");
    const submitButton = getByTestId("submitButton");

    fireEvent.change(inputBox, { target: { value: "12345" } });
    fireEvent.click(submitButton);

    await wait(() => {
      getByTestId("dataHeading");
    });

    const newRequestLink = getByTestId("newRequestLink");

    global.fetch = originalFetch;

    expect(newRequestLink).toHaveAttribute(
      "href",
      "https://docs.google.com/forms/d/1oTNJ7gmNNa6JHPyNjmsjyNiwYq99y4rUGrb7iq7EiYU/viewform?edit_requested=true"
    );
  });

  it("should have guidelines button that takes me to the guidelines doc", async () => {
    const { getByTestId } = render(<App />);
    const originalFetch = global.fetch;
    global.fetch = jest.fn();
    global.fetch.mockResolvedValue({
      json: async () => {
        return {
          allowance: "£1000.00",
          total_spend: "£0.00",
          remaining_balance: "£1000.00",
          days_allowance: 2.0,
          days_spent: 0,
          days_remaining: 2.0
        };
      }
    });
    const inputBox = getByTestId("input");
    const submitButton = getByTestId("submitButton");

    fireEvent.change(inputBox, { target: { value: "12345" } });
    fireEvent.click(submitButton);

    await wait(() => {
      getByTestId("dataHeading");
    });
    const guidelinesLink = getByTestId("guidelinesLink");
    
    global.fetch = originalFetch;

    expect(guidelinesLink).toHaveAttribute(
      "href",
      "https://docs.google.com/document/d/1P0NL7BeiWxLfIFNWd_-WqnockL4gMcXS_e_VLQFZeuo/edit"
    );
  });
});
