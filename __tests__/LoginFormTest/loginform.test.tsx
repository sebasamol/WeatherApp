import "@testing-library/jest-dom"
import { render, screen } from '@testing-library/react'
import LoginForm from "@/app/components/LoginForm/LoginForm"
import exp from "constants";

jest.mock("next/navigation", () => ({
    useRouter() {
      return {
        prefetch: () => null
      };
    }
  }));
  
describe("Login Form test", () => {
    test ('should take a snapshot', () =>{
      const { asFragment } = render(<LoginForm/>)
      expect(asFragment()).toMatchSnapshot()
    })
    
    test('username input should be rendered', () => {
      render(<LoginForm/>)
      const userInputEl = screen.getByText('Nazwa użytkownika')
      expect(userInputEl).toBeInTheDocument()
    })
    test('password input should be rendered', () => {
      render(<LoginForm/>)
      const userInputEl = screen.getByText('Hasło')
      expect(userInputEl).toBeInTheDocument()
    })
    test('login button should be rendered', () => {
      render(<LoginForm/>)
      const userInputEl = screen.getByText('Zaloguj')
      expect(userInputEl).toBeInTheDocument()
    })
    
})