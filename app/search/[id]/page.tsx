import { notFound, redirect } from 'next/navigation'
import { Chat } from '@/components/chat'
import { getChat } from '@/lib/actions/chat'
import { AI } from '@/app/actions'
import { VerifyToken } from '@/components/verify-token'

export const maxDuration = 60

export interface SearchPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: SearchPageProps) {
  const chat = await getChat(params.id, 'anonymous')
  return {
    title: chat?.title.toString().slice(0, 50) || 'Search'
  }
}

export default async function SearchPage({ params }: SearchPageProps) {
  const chat = await getChat(params.id)

  if (!chat) {
    redirect('/')
  }

  return (
    <VerifyToken userId={chat?.userId}>
      <AI
        initialAIState={{
          chatId: chat.id,
          messages: chat.messages
        }}
      >
        <Chat id={params.id} />
      </AI>
    </VerifyToken>
  )
}
