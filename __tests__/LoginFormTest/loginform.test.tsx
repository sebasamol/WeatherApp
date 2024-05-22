import "@testing-library/jest-dom"
import { render, screen } from '@testing-library/react'
import LoginForm from "@/app/components/LoginForm/LoginForm"

jest.mock("next/navigation", () => ({
    useRouter() {
      return {
        prefetch: () => null
      };
    }
  }));
  
describe("Login Form", () => {
    it("renders a login form", () => {
        render(<LoginForm/>)
    })
})