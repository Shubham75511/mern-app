import React from 'react'

export default function SignIn() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg focus:outline-none"
          id="email"
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg focus:outline-none"
          id="password"
        />
        <button
          type="submit"
          placeholder="Sign In"
          id="signin"
          className="bg-orange-500 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        > SignIn
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont have an account?</p>
        <a href="/SignUp" className="text-blue-600 hover:underline">
          Sign Up
        </a>
        
      </div>
    </div>
  )
}
