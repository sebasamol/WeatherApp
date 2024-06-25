import "@testing-library/jest-dom"
import { fireEvent, render, screen } from '@testing-library/react'
import LoginForm from "@/app/components/LoginForm/LoginForm"

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  }
}));

describe("Login Form test", () => {
  test('should take a snapshot', () => {
    const { asFragment } = render(<LoginForm />)
    expect(asFragment()).toMatchSnapshot()
  })
  
  test('display weather station icon', () => {
    render(<LoginForm />)
    const userInputEl = screen.getByAltText('Weather station');
    expect(userInputEl).toBeInTheDocument()
  })

  test('username input should be rendered', () => {
    render(<LoginForm />)
    const userInputEl = screen.getByText('Nazwa użytkownika')
    expect(userInputEl).toBeInTheDocument()
  })

  test('password input should be rendered', () => {
    render(<LoginForm />)
    const userInputEl = screen.getByText('Hasło')
    expect(userInputEl).toBeInTheDocument()
  })

  test('login button should be rendered', () => {
    render(<LoginForm />)
    const userInputEl = screen.getByText('Zaloguj')
    expect(userInputEl).toBeInTheDocument()
  })

  test('username input should change', () => {
    render(<LoginForm />)
    const userInputEl = screen.getByTestId('username')
    const testValue = "test"
    fireEvent.change(userInputEl, { target: { value: testValue } })
    expect(userInputEl).toBe(testValue)
  })

  test('Succesfull login and redirect to home page', async () => {
    render(<LoginForm />)

  })



})