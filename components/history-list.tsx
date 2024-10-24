'use client'

import React, { useCallback, useEffect, useState } from 'react'
import HistoryItem from './history-item'
import { Chat } from '@/lib/types'
import { getChats } from '@/lib/actions/chat'
import { ClearHistory } from './clear-history'

type HistoryListProps = {
  userId?: string
}

const loadChats = async (userId?: string) => {
  return await getChats(userId)
}

// Start of Selection
export function HistoryList({ userId }: HistoryListProps) {
  const [chats, setChats] = useState<Chat[]>([])

  const initialize = useCallback(async () => {
    const cts = await loadChats(userId)
    setChats(cts)
  }, [userId])
  useEffect(() => {
    initialize()
  }, [userId, initialize])

  return (
    <div className="flex flex-col flex-1 space-y-3 h-full">
      <div className="flex flex-col space-y-0.5 flex-1 overflow-y-auto">
        {!chats?.length ? (
          <div className="text-foreground/30 text-sm text-center py-4">
            No search history
          </div>
        ) : (
          chats?.map(
            (chat: Chat) => chat && <HistoryItem key={chat.id} chat={chat} />
          )
        )}
      </div>
      <div className="mt-auto">
        <ClearHistory empty={!chats?.length} userId={userId as string} />
      </div>
    </div>
  )
}
