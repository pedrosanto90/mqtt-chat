import HeaderChat from "@/components/HeaderChat/HeaderChat"
export default function CreateAccount() {
  return (
    <div>
      <HeaderChat title='Create Account' />
      <div className='flex flex-col justify-items items-center h-screen'>
        <form action="" className='flex flex-col border-2 border-blue-500 justify-center items-center p-10 mt-10 rounded-xl'>
          <h1 className='mb-5 text-xl'>Create Account</h1>
          <p>Name</p>
          <input type="text" className='border-2 rounded-xl border-blue-500 p-1 m-2' />
          <p>Email</p>
          <input type="text" className='border-2 rounded-xl border-blue-500 p-1 m-2' />
          <p>Password</p>
          <input type="password" className='border-2 rounded-xl border-blue-500 p-1 m-2' />
          <button type='submit' className='bg-blue-500 text-white p-3 m-2 rounded-xl hover:bg-blue-600'>Create Account</button>
        </form>
      </div>
    </div>
  )
}
