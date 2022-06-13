import { getByTestId, getByText, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LogInForm from "./LogInForm";

test("should call onSubmit when form is submitted with username and password", () => {
  const login = jest.fn();
  render(<LogInForm login={login} />);

  const usernameInput = screen.getByRole("textbox", {
    name: "Enter your username",
  });
  const passwordInput = screen.getByRole("textbox", {
    name: "Enter your password",
  });
  const button = screen.getByRole("button");

  userEvent.type(usernameInput, "username@email.com");
  userEvent.type(passwordInput, "password123");
  userEvent.click(button);

  expect(login).toHaveBeenCalledTimes(1);
});

test("Should render welcome screen once user has logged in", () => {});
