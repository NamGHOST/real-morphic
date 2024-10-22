'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { History } from './history'
import { HistoryList } from './history-list'
import { useTokenManager } from '@/lib/hooks/use-token-manager'
import { decodeToken } from '@/lib/utils/token'
import { useRouter, useSearchParams } from 'next/navigation'

type HistoryContainerProps = {
  location: 'sidebar' | 'header'
}

const HistoryContainer: React.FC<HistoryContainerProps> = ({ location }) => {
  const { getToken, saveToken } = useTokenManager({})
  const [userId, setUserId] = useState('anonymous')
  const router = useRouter()
  const searchParams = useSearchParams()

  const newToken = searchParams.get('token') as string | undefined

  const getUserId = useCallback(
    async (newToken?: string) => {
      try {
        const token = getToken()
        if (newToken || token) {
          const user = await decodeToken((newToken || token) as string)
          if (user) {
            setUserId((user?.id as string | undefined) || 'anonymous')
            return
          }
          setUserId('anonymous')
        }
      } catch (error) {
        router.push(`${process.env.NEXT_PUBLIC_IMOGENAI_URL}`)
      }
    },
    [getToken, router]
  )

  useEffect(() => {
    if (newToken) {
      saveToken(newToken)
      getUserId(newToken)
    } else {
      getUserId()
    }
  }, [newToken, saveToken, getUserId])

  return (
    <div
      className={location === 'header' ? 'block sm:hidden' : 'hidden sm:block'}
    >
      <History location={location}>
        <HistoryList userId={userId} />
      </History>
    </div>
  )
}

export default HistoryContainer
