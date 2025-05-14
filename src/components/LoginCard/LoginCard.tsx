export default function LoginCard() {
  return (
    <div className='flex flex-col justify-items items-center border-2 border-blue-500 rounded-xl '>
      <h2 className='m-15 p-2 text-2xl'>Login</h2>
      <form action="" className='flex flex-col justify-items items-center pb-20 pr-10 pl-10'>
        <p>Email</p>
        <input
          type="email"
          placeholder="Email"
          className='m-5 border-2 border-blue-500 rounded-xl p-2'
        />
        <p>Email</p>
        <input
          type="password"
          placeholder="Password"
          className='m-5 border-2 border-blue-500 rounded-xl p-2'
        />
      </form>
      <p className='m-2'>Don't have an account?</p>
      <a href="#" className='m-2 mb-5'>Create one</a>
    </div>
  )
}
