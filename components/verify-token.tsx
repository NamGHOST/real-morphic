'use client'

import { useTokenManager } from '@/lib/hooks/use-token-manager'
import { FC, Fragment, useCallback, useEffect, useState } from 'react'
import { decodeToken } from '@/lib/utils/token'

interface VerifyTokenProps {
  children: React.ReactNode
  userId: string
}

export const VerifyToken: FC<VerifyTokenProps> = ({ children, userId }) => {
  const { getToken } = useTokenManager({})
  const [isVerifyProcessed, setIsVerifyProcessed] = useState(-1)

  const verify = useCallback(async () => {
    const token = getToken()
    if (!token) {
      setIsVerifyProcessed(0)
      return
    }
    try {
      const user = await decodeToken(token)
      if (user && user.id === userId) {
        setIsVerifyProcessed(1)
      }
    } catch (error) {
      setIsVerifyProcessed(0)
    }
  }, [getToken, userId])

  useEffect(() => {
    if (userId) {
      verify()
    }
  }, [verify, userId])

  return (
    <Fragment>
      {isVerifyProcessed === 1 && children}
      {isVerifyProcessed === 0 && <>Not Allowed</>}
    </Fragment>
  )
}
