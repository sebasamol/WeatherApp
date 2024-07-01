import "@testing-library/jest-dom"
import { fireEvent, render, screen } from '@testing-library/react'
import LoginForm from "@/app/components/LoginForm/LoginForm"
import { connectDB } from '../../app/pages/lib/connectDB'
import { Users } from '@/app/models/loginschema';
import fetch from 'node-fetch'
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

  test('username input should be empty', () => {
    render(<LoginForm />)
    const usernameInputEl = screen.getByTestId('test-username')
    fireEvent.change(usernameInputEl, { target: { value: '' } })
    expect(usernameInputEl).toHaveValue('')

  })
  test('password  input should be empty', () => {
    render(<LoginForm />)
    const passwordInputEl = screen.getByTestId('test-password')
    fireEvent.change(passwordInputEl, { target: { value: '' } })
    expect(passwordInputEl).toHaveValue('')

  })

  test('username input should have value', () => {
    render(<LoginForm />)
    const usernameInputEl = screen.getByTestId('test-username')
    fireEvent.change(usernameInputEl, { target: { value: 'Alice' } })
    expect(usernameInputEl).toHaveValue('Alice')

  })

  test('password input should have value', () => {
    render(<LoginForm />)
    const passwordInputEl = screen.getByTestId('test-password')
    fireEvent.change(passwordInputEl, { target: { value: '12345' } })
    expect(passwordInputEl).toHaveValue('12345')

  })

  test('Does not submit an empty form', () => {
    render(<LoginForm />)

    const handleOnSubmitMock = jest.fn()

    fireEvent.click(screen.getByText('Zaloguj'))
    expect(handleOnSubmitMock).not.toHaveBeenCalled()
  })
  
  test('Does not submit the form with and invalid username', () => {
    render(<LoginForm />)

    const handleOnSubmitMock = jest.fn()
    const usernameInputEl = screen.getByTestId('test-username')
    const passwordInputEl = screen.getByTestId('test-password')
    
    fireEvent.change(usernameInputEl, { target: { value: 'Alice421' } })
    fireEvent.change(passwordInputEl, { target: { value: '12345' } })

    fireEvent.click(screen.getByText('Zaloguj'))

    expect(handleOnSubmitMock).not.toHaveBeenCalled()
  })

  test('Does not submit the form with and invalid username', () => {
    render(<LoginForm />)

    const handleOnSubmitMock = jest.fn()
    const usernameInputEl = screen.getByTestId('test-username')
    const passwordInputEl = screen.getByTestId('test-password')
    
    fireEvent.change(usernameInputEl, { target: { value: 'Alice' } })
    fireEvent.change(passwordInputEl, { target: { value: 'zzz' } })

    fireEvent.click(screen.getByText('Zaloguj'))

    expect(handleOnSubmitMock).not.toHaveBeenCalled()
  })
  test('Submit form only with valid data', () => {
    render(<LoginForm />)

    const handleOnSubmitMock = jest.fn()
    const usernameInputEl = screen.getByTestId('test-username')
    const passwordInputEl = screen.getByTestId('test-password')
    
    fireEvent.change(usernameInputEl, { target: { value: 'Alice' } })
    fireEvent.change(passwordInputEl, { target: { value: '123' } })

    fireEvent.click(screen.getByText('Zaloguj'))

    expect(handleOnSubmitMock).not.toHaveBeenCalled()
  })
})