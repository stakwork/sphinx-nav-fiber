import { useCallback, useEffect, useState } from 'react'
import * as sphinx from 'sphinx-bridge'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { isE2E } from '~/constants'
import { getIsAdmin } from '~/network/auth'
import { useUserStore } from '~/stores/useUserStore'
import { executeIfProd, getSignedMessageFromRelay, updateBudget } from '~/utils'

interface setAuthenticated {
  setAuthenticated: (state: boolean) => void
}

export const Auth = ({ setAuthenticated }: setAuthenticated) => {
  const [unAuthorized, setUnauthorized] = useState(false)
  const [setBudget, setIsAdmin, setPubKey] = useUserStore((s) => [s.setBudget, s.setIsAdmin, s.setPubKey])

  const handleAuth = useCallback(async () => {
    await executeIfProd(async () => {
      localStorage.removeItem('admin')

      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const sphinxEnable = await sphinx.enable()

        setPubKey(sphinxEnable?.pubkey)
      } catch (error) {
        setPubKey('')
      }

      await updateBudget(setBudget)

      try {
        const sigAndMessage = await getSignedMessageFromRelay()

        const res = await getIsAdmin({
          message: sigAndMessage.message,
          signature: sigAndMessage.signature,
        })

        if (!res.data.isPublic && !res.data.isAdmin && !res.data.isMember) {
          setUnauthorized(true)

          return
        }

        if (res.data.isAdmin) {
          localStorage.setItem('admin', JSON.stringify({ isAdmin: true }))
          setIsAdmin(true)
        }

        setAuthenticated(true)

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        /* not an admin */
      }
    })

    if (isE2E) {
      setAuthenticated(true)
    }
  }, [setIsAdmin, setPubKey, setBudget, setAuthenticated])

  // auth checker
  useEffect(() => {
    const timer = setTimeout(() => {
      handleAuth()
    }, 5000)

    return () => {
      clearTimeout(timer)
    }
  }, [handleAuth])

  if (unAuthorized) {
    return (
      <StyledFlex>
        <StyledText>Please this is a private Graph, Contact Admin</StyledText>
      </StyledFlex>
    )
  }

  return (
    <StyledFlex>
      <StyledText>Authenticating...</StyledText>
    </StyledFlex>
  )
}

const StyledText = styled(Text)`
  font-size: 5rem;
  font-weight: 600;
  font-family: 'Barlow';
  text-align: center;
`

const StyledFlex = styled(Flex)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
