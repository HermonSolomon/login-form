import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("login functionality", () => {
  test("check all input elements are rendered", () => {
    render(<App />);

    const usernameEl = screen.getByRole("textbox", {
      name: "Enter your username",
    });
    const passwordEl = screen.getByRole("textbox", {
      name: "Enter your password",
    });
    const loginButton = screen.getByRole("button");

    expect(usernameEl).toBeInTheDocument();
    expect(passwordEl).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  test("should not login if incorrect fields are ", () => {
    render(<App />);

    const usernameEl = screen.getByRole("textbox", {
      name: "Enter your username",
    });
    const passwordEl = screen.getByRole("textbox", {
      name: "Enter your password",
    });
    const loginButton = screen.getByRole("button");

    userEvent.type(usernameEl, "test@test.com");
    userEvent.type(passwordEl, "test123");
    userEvent.click(loginButton);

    expect(usernameEl).toBeInTheDocument();
    const errorMessage = screen.getByText("Invalid input, please try again!");
    expect(errorMessage).toBeInTheDocument();
  });

  test("Should render welcome screen once user has logged in ", () => {
    render(<App />);

    const usernameEl = screen.getByRole("textbox", {
      name: "Enter your username",
    });
    const passwordEl = screen.getByRole("textbox", {
      name: "Enter your password",
    });
    const loginButton = screen.getByRole("button");

    userEvent.type(usernameEl, "username@email.com");
    userEvent.type(passwordEl, "password123");
    userEvent.click(loginButton);

    const welcomeText = screen.getByText(`Welcome`, { exact: false });
    expect(welcomeText).toBeInTheDocument();
  });
});
