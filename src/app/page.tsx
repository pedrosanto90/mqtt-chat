import LoginCard from "@/components/LoginCard/LoginCard";
import HeaderChat from "@/components/HeaderChat/HeaderChat";

export default function Home() {
  return (
    <div>
      <HeaderChat title='Welcome' />
      <div className='flex flex-col justify-center items-center h-screen'>
        <LoginCard />
      </div>
    </div>
  )
}
