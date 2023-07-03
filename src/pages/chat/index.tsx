import { Inter } from 'next/font/google'

import ChatScreen from '../../components/channel/ChatScreen'
import InfoBar from '../../components/channel/ChatScreen/InfoBar'
import Sidebar from '../../components/channel/Sidebar'
import ModalAnexo from '../../components/channel/Message/ModalAnexo'
import HistoricoBar from '@/components/channel/ChatScreen/HistoricoBar'
import { Container } from 'react-bootstrap'

import { ChatProvider } from '@/contexts/chat'
const inter = Inter({ subsets: ['latin'] })

export default function ChatPage() {
  return (
    <ChatProvider>
      <div className='chat-page d-flex h-100 w-100'>
          <Sidebar />
          <ChatScreen />
          <ModalAnexo />
          <InfoBar />
          <HistoricoBar />
      </div>
    </ChatProvider>
  )
}

ChatPage.auth = true