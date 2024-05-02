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

  const [setTrendingTopicsFlag, setQueuedSourcesFlag, setCustomSchemaFlag, setAddItem, setAddContent, setSettings] =
    useFeatureFlagStore((s) => [
      s.setTrendingTopicsFlag,
      s.setQueuedSourcesFlag,
      s.setCustomSchemaFlag,
      s.setAddItem,
      s.setAddContent,
      s.setSettings,
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

      if (res.data) {
        localStorage.setItem('admin', JSON.stringify({ isAdmin: res.data.isAdmin }))
        setIsAdmin(!!res.data.isAdmin)

        setTrendingTopicsFlag(res.data.trendingTopics)
        setQueuedSourcesFlag(res.data.queuedSources)
        setCustomSchemaFlag(res.data.customSchema)
        setAddContent(res.data.addContent === undefined ? true : res.data.addContent)
        setAddItem(res.data.addItem === undefined ? true : res.data.addItem)
        setSettings(res.data.settings === undefined ? true : res.data.settings)
      }

      if (!res.data.isPublic && !res.data.isAdmin && !res.data.isMember) {
        setUnauthorized(true)

        return
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
    setTrendingTopicsFlag,
    setQueuedSourcesFlag,
    setCustomSchemaFlag,
    setAddContent,
    setAddItem,
    setSettings,
  ])

  // auth checker
  useEffect(() => {
    handleAuth()
  }, [handleAuth])

  const message = 'This is a private Graph, Contact Admin'

  if (splashDataLoading) {
    return <Splash>{children}</Splash>
  }

  if (unAuthorized) {
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
