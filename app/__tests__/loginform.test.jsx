import LoginForm from '../components/LoginForm/LoginForm.tsx'
import "@testing-library/jest-dom"
import {fireEvent, render, screen } from "@testing-library/jest-dom"

describe("Login Form", () => {
    it("renders a login form", () => {
        render(<LoginForm/>)
    })
})