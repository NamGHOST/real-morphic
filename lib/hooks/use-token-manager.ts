'use client'

import { useCallback, useEffect, useMemo } from 'react'

export interface useTokenManagerProps {
  token?: string;
}

export function useTokenManager({
  token: newToken
}: useTokenManagerProps) {
  const getToken = useCallback(() => {
    try {
      return localStorage.getItem("token") || ""
    } catch (error) {
      throw new Error("localStorage is not defined")
    }
  }, [])

  const saveToken = useCallback((token: string) => {
    try {
      localStorage.setItem("token", token)
    } catch (error) {
      new Error("localStorage is not defined")
    }
  }, [])

  useEffect(() => {
    if (newToken) {
      saveToken(newToken);
    }
  }, [newToken, saveToken])
  return {
    saveToken, getToken
  }
}
