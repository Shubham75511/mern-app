import React from 'react'

export default function SignUp() {
  return (
    <div className="bg-background m-20 p-3 max-w-lg mx-auto container shadow-lg ">
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
        <input
          type="password"
          placeholder="confirm password"
          className="border p-3 rounded-lg focus:outline-none"
          id="password"
        />
        <button
          type="submit"
          placeholder="Sign In"
          id="signup"
          className="bg-primary text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        > SignUp
        </button>
      </form>
    </div>
  )
}