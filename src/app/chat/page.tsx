import HeaderChat from "@/components/HeaderChat/HeaderChat"
import ChatList from "@/components/ChatList/ChatList"
import ChatBox from "@/components/ChatBox/ChatBox"

export default function Chat() {
  return (
    <div className="h-screen flex flex-col pb-6">
      {/* Cabeçalho fixo no topo */}
      <HeaderChat title='Chat Room' />

      {/* Conteúdo principal: lateral + chat */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar (esquerda) */}
        <ChatList />
        <ChatBox />
      </div>
    </div>
  )
}
