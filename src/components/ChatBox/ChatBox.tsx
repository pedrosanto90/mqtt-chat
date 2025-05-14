export default function ChatBox() {
  return (
    <div className="mr-2 flex flex-col flex-1 overflow-hidden">
      {/* Message area*/}
      <div className="border-2 border-blue-500 rounded-xl flex-1 overflow-y-auto p-4 bg-white">
        <div className="mb-2">Mensagem 1</div>
        <div className="mb-2">Mensagem 2</div>
      </div>

      {/* input */}
      <div className="p-4 bg-white flex">
        <input
          type="text"
          placeholder="Say something..."
          className="w-full p-2 rounded border"
        />
        <button className='bg-blue-500 p-2 ml-2 rounded-xl text-white hover:bg-blue-600'>Send</button>
      </div>
    </div>
  )
}
