import { PropsWithChildren, useCallback, useEffect, useState } from 'react'
import * as sphinx from 'sphinx-bridge'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { isDevelopment, isE2E } from '~/constants'
import { getIsAdmin } from '~/network/auth'
import { useDataStore } from '~/stores/useDataStore'
import { useFeatureFlagStore } from '~/stores/useFeatureFlagStore'
import { useUserStore } from '~/stores/useUserStore'
import { sphinxBridge } from '~/testSphinxBridge'
import { getSignedMessageFromRelay, updateBudget } from '~/utils'
import { Splash } from '../App/Splash'

export const AuthGuard = ({ children }: PropsWithChildren) => {
  const [unAuthorized, setUnauthorized] = useState(false)
  const { splashDataLoading } = useDataStore((s) => s)
  const { setBudget, setIsAdmin, setPubKey, setIsAuthenticated } = useUserStore((s) => s)

  const [
    setTrendingTopicsFeatureFlag,
    setQueuedSourcesFeatureFlag,
    setCustomSchemaFeatureFlag,
    setRealtimeGraphFeatureFlag,
  ] = useFeatureFlagStore((s) => [
    s.setTrendingTopicsFeatureFlag,
    s.setQueuedSourcesFeatureFlag,
    s.setCustomSchemaFeatureFlag,
    s.setRealtimeGraphFeatureFlag,
  ])

  const handleAuth = useCallback(async () => {
    localStorage.removeItem('admin')
    localStorage.removeItem('signature')

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

        setTrendingTopicsFeatureFlag(res.data.trendingTopics)
        setQueuedSourcesFeatureFlag(res.data.queuedSources)
        setCustomSchemaFeatureFlag(res.data.customSchema)
        setRealtimeGraphFeatureFlag(res.data.realtimeGraph || false)
      }

      setIsAuthenticated(true)
    } catch (error) {
      /* not an admin */
    }

    if (isE2E || isDevelopment) {
      setIsAuthenticated(true)
    }
  }, [
    setBudget,
    setPubKey,
    setIsAuthenticated,
    setIsAdmin,
    setTrendingTopicsFeatureFlag,
    setQueuedSourcesFeatureFlag,
    setCustomSchemaFeatureFlag,
  ])

  // auth checker
  useEffect(() => {
    handleAuth()
  }, [handleAuth])

  const message = 'This is a private Graph, Contact Admin'

  if (splashDataLoading) {
    return <Splash>{children}</Splash>
  }

  if (!unAuthorized) {
    return (
      <StyledFlex>
        <StyledText>{message}</StyledText>
      </StyledFlex>
    )
  }

  return <>{children}</>
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
