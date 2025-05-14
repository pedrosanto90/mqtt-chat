import LoginCard from "@/components/LoginCard/LoginCard";
import HeaderChat from "@/components/HeaderChat/HeaderChat";

export default function Home() {
  return (
    <div>
      <HeaderChat title='Welcome' />
      <div className='flex flex-col justify-center items-center h-screen'>
        <LoginCard />
        <p className='text-red-500 mt-5'>This app is for study purposes only. Please keep that in mind when using it. This app may go offline at any time.</p>
        <p>You can use a fake email to use this app</p>
      </div>
    </div>
  )
}
