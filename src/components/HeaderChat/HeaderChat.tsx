type HeaderChatProps = {
  title: string;
}
export default function HeaderChat({ title }: HeaderChatProps) {
  return (
    <>
      <header className='m-2 rounded-2xl flex justify-center items-center bg-blue-500 py-10 text-white text-2xl'>
        <h1> MQTT - {title}</h1>
      </header>
    </>
  )
}
