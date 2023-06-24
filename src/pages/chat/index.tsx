import { Inter } from 'next/font/google'

import ChatScreen from '../../components/channel/ChatScreen'
import InfoBar from '../../components/channel/ChatScreen/InfoBar'
import Sidebar from '../../components/channel/Sidebar'
import ModalAnexo from '../../components/channel/Message/ModalAnexo'
import { ChatProvider } from '@/contexts/chat'
const inter = Inter({ subsets: ['latin'] })

export default function ChatPage() {
  return (
    <ChatProvider>
      <div className='d-flex h-100 w-100'>
          <Sidebar />
          <ChatScreen />
          <ModalAnexo />
          <InfoBar />
      </div>
    </ChatProvider>
  )
}
