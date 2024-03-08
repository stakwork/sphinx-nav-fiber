import { useCallback, useEffect, useState } from 'react'
import { PropagateLoader } from 'react-spinners'
import * as sphinx from 'sphinx-bridge'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { isDevelopment, isE2E } from '~/constants'
import { getIsAdmin } from '~/network/auth'
import { useFeatureFlagStore } from '~/stores/useFeatureFlagStore'
import { useUserStore } from '~/stores/useUserStore'
import { sphinxBridge } from '~/testSphinxBridge'
import { getSignedMessageFromRelay, updateBudget } from '~/utils'

interface setAuthenticated {
  setAuthenticated: (state: boolean) => void
}

export const Auth = ({ setAuthenticated }: setAuthenticated) => {
  const [unAuthorized, setUnauthorized] = useState(false)
  const [setBudget, setIsAdmin, setPubKey] = useUserStore((s) => [s.setBudget, s.setIsAdmin, s.setPubKey])
  const [setTrendingTopicsFlag] = useFeatureFlagStore((s) => [s.setTrendingTopicsFlag])

  const handleAuth = useCallback(async () => {
    // await executeIfProd(async () => {
    localStorage.removeItem('admin')

    let sphinxEnable

    try {
      if (!isE2E) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        sphinxEnable = await sphinx.enable()
      } else {
        sphinxEnable = await sphinxBridge.enable()
      }

      sessionStorage.setItem('isSphinx', sphinxEnable ? 'true' : 'false')

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

      if (res.data) {
        localStorage.setItem('admin', JSON.stringify({ isAdmin: res.data.isAdmin }))
        setIsAdmin(!!res.data.isAdmin)

        setTrendingTopicsFlag(res.data.trendingTopics)
      }

      setAuthenticated(true)

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      /* not an admin */
    }
    // })

    if (isE2E || isDevelopment) {
      setAuthenticated(true)
    }
  }, [setIsAdmin, setPubKey, setBudget, setAuthenticated, setTrendingTopicsFlag])

  // auth checker
  useEffect(() => {
    const timer = setTimeout(() => {
      handleAuth()
    }, 5000)

    return () => {
      clearTimeout(timer)
    }
  }, [handleAuth])

  const message = 'This is a private Graph, Contact Admin'

  return (
    <StyledFlex>
      {!unAuthorized ? (
        <PropagateLoader color="#909BAA" data-testid="PropagateLoader" />
      ) : (
        <StyledText>{message}</StyledText>
      )}
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
