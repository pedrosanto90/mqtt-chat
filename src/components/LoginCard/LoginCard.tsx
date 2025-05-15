'use client'
import { FormEvent } from "react"
import { useRouter } from "next/navigation"

export default function LoginCard() {
  const router = useRouter()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const username = formData.get('username')
    const password = formData.get('password')

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
    if (response.ok) {
      router.push('/chat')
    } else {
      window.alert(response)
    }
  }
  return (
    <div className='flex flex-col justify-items items-center border-2 border-blue-500 rounded-xl '>
      <h2 className='m-15 p-2 text-2xl'>Login</h2>
      <form onSubmit={handleSubmit} className='flex flex-col justify-items items-center pb-20 pr-10 pl-10'>
        <p>Username</p>
        <input
          name='username'
          type="text"
          placeholder="Email"
          className='m-5 border-2 border-blue-500 rounded-xl p-2'
          required
        />
        <p>Email</p>
        <input
          name='password'
          type="password"
          placeholder="Password"
          className='m-5 border-2 border-blue-500 rounded-xl p-2'
          required
        />
        <button
          type='submit'
          className='mt-5 bg-blue-500 hover:bg-blue-600 pr-10 pl-10 pt-2 pb-2 rounded-xl text-xl'
        >
          Login
        </button>
      </form>
      <p className='m-2'>Don't have an account?</p>
      <a href="#" className='m-2 mb-5'>Create one</a>
    </div>
  )
}
