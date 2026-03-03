import React from 'react'
import { SignIn } from "@clerk/nextjs"

const SignInPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <SignIn/>
    </div>
  )
}

export default SignInPage